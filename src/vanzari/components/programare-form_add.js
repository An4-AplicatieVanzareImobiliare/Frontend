import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../App";
import Button from "react-bootstrap/Button";
import {Col, Row} from "reactstrap";
import { FormGroup, Input, Label} from 'reactstrap'; //Same;
import { withRouter } from "react-router-dom";
import validateVanzari from "./validators/vanzari-validators";
import * as API_PROGRAMARE_ADD from "../api/vanzari-api";
//Date and Time:
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
//Fara css nu merge usor: Nu se vede bine:
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";


//Form: La fel ca Add!
class ProgramareAdd extends React.Component
{
    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
        this.reloadHandler = this.props.reloadHandler;
        this.programareAdd = this.programareAdd.bind(this);

        //State: Fara placeholders:
        this.state = {
            //Date simplu, si Time ora + minute + secunde cu :;
            dateInput: new Date(),
            //String de la concatenari:
            timeInput: new Date().getHours() + ":"
                     + new Date().getMinutes(), //+ ":00", //Nu aici pun;
                     //Nu are secunde!!!
                     //+ new Date().getSeconds(), //new TimeRanges(),
            formIsValid: false,
            formControls: {
                metriPatrati: {
                    value: '',
                    placeholder: '',
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true,
                    }
                },
                numarCamere: {
                    value: '',
                    placeholder: '',
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true,
                    }
                },
                locatie: {
                    value: '',
                    placeholder: '',
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true,
                    }
                },
                pret: {
                    value: '',
                    placeholder: '',
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true,
                    }
                },
                tip: {
                    value: '',
                    placeholder: '',
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true,
                    }
                },
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //Date and Time:
        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);

        //Setare valori pentru add programare: Daca exista locatie:
        if(localStorage.getItem("locatie") !== null)
        {
            this.state.formControls.metriPatrati.value = localStorage.getItem("metriPatrati");
            this.state.formControls.numarCamere.value = localStorage.getItem("numarCamere");
            this.state.formControls.locatie.value = localStorage.getItem("locatie");
            this.state.formControls.pret.value = localStorage.getItem("pret");
            this.state.formControls.tip.value = localStorage.getItem("tip");

            //Valid:
            this.state.formControls.metriPatrati.valid = true;
            this.state.formControls.numarCamere.valid = true;
            this.state.formControls.locatie.valid = true;
            this.state.formControls.pret.valid = true;
            this.state.formControls.tip.valid = true;

            this.state.formIsValid = true;
        }
    }

    //Toggle:
    toggleForm() {
        this.setState({collapseForm: !this.state.collapseForm});
    }

    //Verificari pentru change:
    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        const updatedControls = this.state.formControls;
        const updatedFormElement = updatedControls[name];

        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validateVanzari(value, updatedFormElement.validationRules);
        updatedControls[name] = updatedFormElement;

        let formIsValid = true;
        for (let updatedFormElementName in updatedControls) {
            formIsValid = updatedControls[updatedFormElementName].valid && formIsValid;

            //console.log(value);
            console.log(updatedControls[updatedFormElementName].valid);
        }

        // Set state:
        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        });
    };


    //Handle Date and Time:
    handleDate(dateInput) {
        this.setState({
            dateInput: dateInput
        });
    }

    handleTime(timeInput) {
        this.setState({
            timeInput: timeInput
        });
    }


    //Alte submit:
    handleSubmit(metriPatrati, numarCamere, locatie, pret, tip)
    {
        //Ce primeste post:
        let addProgramare = {
            //imobil_id: "", //No imobil id;
            imobil_metriPatrati: this.state.formControls.metriPatrati.value,
            imobil_numarCamere: this.state.formControls.numarCamere.value,
            imobil_locatie: this.state.formControls.locatie.value,
            imobil_pret: this.state.formControls.pret.value,
            imobil_tip: this.state.formControls.tip.value,
            date_and_time_string: "", //Din fields: //Pun si string pentru primire!!!
            user_email: localStorage.getItem("clientEmail") //Din local storage, string!
        };

        //Pentru set date and time:
        //Din form:
        //1) Nu este value:
        //let dateInput = this.state.formControls.dateInput.value;
        //let timeInput = this.state.formControls.timeInput.value;
        //2) Out of form, nu conteaza:
        //let dateInput = this.state.dateInput.getFullYear() + "-" + this.state.dateInput.getMonth() + "-" + this.state.dateInput.getDay();
        //let timeInput = this.state.timeInput.value;
        //3) Trebuie creat asa: Ca la SD:
        let dateInput;
        let timeInput;
        //Pe langa input, voi pune si 00 de la secunde;
        //Doar daca minutele sunt 00 las sa insereze!!!
        if(this.state.timeInput[3] === "0" && this.state.timeInput[4] === "0")
        {
            timeInput = this.state.timeInput + ":00"; //GetTime nu merge, aparent este string;
            //console.log("Time value: " + timeInput + " !");
        }
        else
        {
            //Finish flow:
            window.alert("Please input only hours!");
            return;
        }

        //Pentru data corecta!!!
        if(this.state.dateInput.getMonth() < 10)
        {
            if(this.state.dateInput.getDate() < 10)
            {
                dateInput = this.state.dateInput.getFullYear() + '-0' +
                    (this.state.dateInput.getMonth() + 1) + '-0'
                    + this.state.dateInput.getDate();
            }
            else
            {
                dateInput = this.state.dateInput.getFullYear() + '-0' +
                    (this.state.dateInput.getMonth() + 1) + '-'
                    + this.state.dateInput.getDate();
            }
        }
        else
        {
            if(this.state.dateInput.getDate() < 10)
            {
                dateInput = this.state.dateInput.getFullYear() + '-' +
                    (this.state.dateInput.getMonth() + 1) + '-0'
                    + this.state.dateInput.getDate();
            }
            else
            {
                dateInput = this.state.dateInput.getFullYear() + '-' +
                    (this.state.dateInput.getMonth() + 1)
                    + '-' + this.state.dateInput.getDate();
            }
        }


        //Data dummy: Pun pentru Appartament and Home acum!!!
        //addProgramare.date_and_time = dateInput + "T" + timeInput;
        //Nu sunt secunde, deci adaug: Si pe T!
        addProgramare.date_and_time_string = dateInput + "T" + timeInput; //+ ":00";
        //addProgramare.date_and_time_string = "2023-08-03" + "T" + "13:00:00"; //String dat pentru backend!

        console.log("Programarea la ora: " + addProgramare.date_and_time_string);

        this.programareAdd(addProgramare, metriPatrati, numarCamere, locatie, pret, tip);
    }


    //Add programare: Functia noua:
    programareAdd(addProgramare, metriPatrati, numarCamere, locatie, pret, tip) {

        return API_PROGRAMARE_ADD.programareAdd(addProgramare, (result, status) =>
        {
            //If good, insert data:
            //Else alerta cu recomandare!
            if (result !== null && (status === 200 || status === 201))
            {
                //Ori primesti recomandare daca nu este locatie;
                if(result.imobil_locatie === "")
                {
                    //Reload inainte de alert:
                    //this.reloadHandler(); //Fara sa inchida modala;
                    let recommendation = result.date_and_time;
                    window.alert("You could instead do a reservation at this time: " + recommendation + " !");
                }
                //Ori primesti locatie si doar inserezi cu mesaj de confirmare:
                else
                {
                    //this.reloadHandler();
                    console.log("Result: " + result);
                    window.alert("Successfully inserted reservation at this location: " + result.imobil_locatie + " !");
                }

                //Insert data! Nothing else!
            }
            else
            {
                //Nu exista else, tot timpul primim not null and status 200!!!
                window.alert("Invalid data!");
            }
        });
    }



    // Toate datele imobilului sunt read only:
    render()
    {
        return (
            <div>

                {/*Metri patrati:*/}
                <FormGroup id='metriPatrati'
                           style = {{backgroundColor: "#ecca67",
                               padding: "2%",
                               borderRadius: "1.5%"}}
                >
                    {/*<AppContext.Consumer>*/}
                    <Label for='metriPatratiField' style = {{fontStyle: "italic", fontSize: "large"}}>
                        <strong>
                            Metri Patrati:
                        </strong>
                    </Label>
                    {/*</AppContext.Consumer>*/}
                    <Input name='metriPatrati' id='metriPatratiField'
                           placeholder={this.state.formControls.metriPatrati.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.metriPatrati.value}
                           touched={this.state.formControls.metriPatrati.touched? 1 : 0}
                           valid={this.state.formControls.metriPatrati.valid}
                           readOnly={true}
                           required
                    />
                    {this.state.formControls.metriPatrati.touched && !this.state.formControls.metriPatrati.valid &&
                        <div
                            style = {{marginLeft: "3%",
                                marginTop: "3%"}}
                            className={"error-message row"}>
                            * The m^2 is not valid!
                        </div>}
                </FormGroup>


                {/*Numar Camere:*/}
                <FormGroup id='numarCamere'
                           style = {{backgroundColor: "#ecca67",
                               padding: "2%",
                               borderRadius: "1.5%"}}
                >
                    {/*<AppContext.Consumer>*/}
                    <Label for='numarCamereField' style = {{fontStyle: "italic", fontSize: "large"}}>
                        <strong>
                            Numar Camere:
                        </strong>
                    </Label>
                    {/*</AppContext.Consumer>*/}
                    <Input name='numarCamere' id='numarCamereField'
                           placeholder={this.state.formControls.numarCamere.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.numarCamere.value}
                           touched={this.state.formControls.numarCamere.touched? 1 : 0}
                           valid={this.state.formControls.numarCamere.valid}
                           readOnly={true}
                           required
                    />
                    {this.state.formControls.numarCamere.touched && !this.state.formControls.numarCamere.valid &&
                        <div
                            style = {{marginLeft: "3%",
                                marginTop: "3%"}}
                            className={"error-message row"}>
                            * The room number is not valid!
                        </div>}
                </FormGroup>


                {/*Locatie:*/}
                <FormGroup id='locatie'
                           style = {{backgroundColor: "#ecca67",
                               padding: "2%",
                               borderRadius: "1.5%"}}
                >
                    {/*<AppContext.Consumer>*/}
                    <Label for='locatieField' style = {{fontStyle: "italic", fontSize: "large"}}>
                        <strong>
                            Locatie:
                        </strong>
                    </Label>
                    {/*</AppContext.Consumer>*/}
                    <Input name='locatie' id= 'locatieField'
                           placeholder={this.state.formControls.locatie.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.locatie.value}
                           touched={this.state.formControls.locatie.touched? 1 : 0}
                           valid={this.state.formControls.locatie.valid}
                        //Pentru Location sa fie not modifiable:
                           readOnly={true}
                           required
                    />
                    {this.state.formControls.locatie.touched && !this.state.formControls.locatie.valid &&
                        <div
                            style = {{marginLeft: "3%",
                                marginTop: "3%"}}
                            className={"error-message row"}>
                            * The location is not valid!
                        </div>}
                </FormGroup>


                {/*Pret:*/}
                <FormGroup id='pret'
                           style = {{backgroundColor: "#ecca67",
                               padding: "2%",
                               borderRadius: "1.5%"}}
                >
                    {/*<AppContext.Consumer>*/}
                    <Label for='pretField' style = {{fontStyle: "italic", fontSize: "large"}}>
                        <strong>
                            Pret:
                        </strong>
                    </Label>
                    {/*</AppContext.Consumer>*/}
                    <Input name='pret' id='pretField'
                           placeholder={this.state.formControls.pret.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.pret.value}
                           touched={this.state.formControls.pret.touched? 1 : 0}
                           valid={this.state.formControls.pret.valid}
                           readOnly={true}
                           required
                    />
                    {this.state.formControls.pret.touched && !this.state.formControls.pret.valid &&
                        <div
                            style = {{marginLeft: "3%",
                                marginTop: "3%"}}
                            className={"error-message row"}>
                            * The price is not valid!
                        </div>}
                </FormGroup>


                {/*Tip:*/}
                <FormGroup id='tip'
                           style = {{backgroundColor: "#ecca67",
                               padding: "2%",
                               borderRadius: "1.5%"}}
                >
                    {/*Consumer fara sa consumi este problema:*/}
                    {/*<AppContext.Consumer>*/}
                    <Label for='tipField' style = {{fontStyle: "italic", fontSize: "large"}}>
                        <strong>
                            Tip:
                        </strong>
                    </Label>
                    {/*</AppContext.Consumer>*/}
                    <Input name='tip' id='tipField'
                           placeholder={this.state.formControls.tip.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.tip.value}
                           touched={this.state.formControls.tip.touched? 1 : 0}
                           valid={this.state.formControls.tip.valid}
                           readOnly={true}
                           required
                    />
                    {this.state.formControls.tip.touched && !this.state.formControls.tip.valid &&
                        <div
                            style = {{marginLeft: "3%",
                                marginTop: "3%"}}
                            className={"error-message row"}>
                            * The type is not valid!
                        </div>}
                </FormGroup>



                {/*Pentru Date and Time:*/}
                <DatePicker
                    value = { this.state.dateInput }
                    onChange = { this.handleDate }
                    name = "dateInput"
                    format = {"yyyy-MM-dd"}
                    className = "vanzari-date"
                    // Pentru aranjare in pagina:
                    // style = {{
                    //     marginLeft: '1vmax !important',
                    //     marginTop: '1vmax !important',
                    // }}
                />

                <TimePicker
                    value = { this.state.timeInput }
                    onChange = { this.handleTime }
                    name = "timeInput"
                    className = "vanzari-time"
                    // format = {"yyyy-MM-dd"}
                    // style = {{
                    //     marginLeft: '10vmax !important',
                    //     marginTop: '1vmax !important',
                    // }}
                />


                {/*Buton confirmare update:*/}
                <Row>
                    <Col sm={{size: '6vmax', offset: 8}}>
                        <AppContext.Consumer>
                            {({metriPatrati, numarCamere, locatie, pret, tip}) => (
                                <Button type={"submit"} disabled={!this.state.formIsValid}
                                        onClick={() => this.handleSubmit(metriPatrati, numarCamere, locatie, pret, tip)}
                                        style = {{
                                            backgroundColor: '#ab1111',
                                            marginTop: "7vmax",
                                }}>
                                    Confirm Add Reservation
                                </Button>
                            )}
                        </AppContext.Consumer>
                    </Col>
                </Row>
                {
                }
            </div>
        ) ;
    }
}


//Rutare:
export default withRouter(ProgramareAdd);


