import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../App";
import Button from "react-bootstrap/Button";
import {Col, Row} from "reactstrap";
import { FormGroup, Input, Label} from 'reactstrap'; //Same;
import { withRouter } from "react-router-dom";
import validateVanzari from "./validators/vanzari-validators";
import * as API_VANZARI_UPDATE from "../api/vanzari-api";


//Form: La fel ca Add!
class VanzariUpdate extends React.Component
{
    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
        this.reloadHandler = this.props.reloadHandler;
        this.vanzariUpdate = this.vanzariUpdate.bind(this);

        //State:
        this.state = {
            formIsValid: false,
            formControls: {
                metriPatrati: {
                    value: '',
                    placeholder: 'Noua valoare metri patrati',
                    valid: false,
                    touched: false,
                    validationRules: {
                        // minLength: 3,
                        isRequired: true,
                    }
                },
                numarCamere: {
                    value: '',
                    placeholder: 'Noul numar de camere',
                    valid: false,
                    touched: false,
                    validationRules: {
                        // minLength: 3,
                        isRequired: true,
                    }
                },
                locatie: {
                    value: '',
                    placeholder: 'Locatia proprietatii',
                    valid: false,
                    touched: false,
                    validationRules: {
                        // minLength: 3,
                        isRequired: true,
                    }
                },
                pret: {
                    value: '',
                    placeholder: 'Noua valoare de pret',
                    valid: false,
                    touched: false,
                    validationRules: {
                        // minLength: 3,
                        isRequired: true,
                    }
                },
                tip: {
                    value: '',
                    placeholder: 'Noul tip al proprietatii',
                    valid: false,
                    touched: false,
                    validationRules: {
                        // minLength: 3,
                        isRequired: true,
                    }
                },
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //Setare valori pentru update:
        //Setare date in values: (Daca este selectat:)
        //Daca avem ceva, selecteaza-le:
        // if(true)
        if(localStorage.getItem("locatie") !== null)
        {
            //Setare toate:
            this.state.formControls.metriPatrati.value = localStorage.getItem("metriPatrati");
            // this.setState({metriPatrati: localStorage.getItem("metriPatrati")});
            this.state.formControls.numarCamere.value = localStorage.getItem("numarCamere");
            this.state.formControls.locatie.value = localStorage.getItem("locatie");
            this.state.formControls.pret.value = localStorage.getItem("pret");
            this.state.formControls.tip.value = localStorage.getItem("tip");

            //Poti da direct submit:
            //Touch:
            // this.state.formControls.metriPatrati.touched = true;
            // this.state.formControls.numarCamere.touched = true;
            // this.state.formControls.locatie.touched = true;
            // this.state.formControls.pret.touched = true;
            // this.state.formControls.tip.touched = true;

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

    //Alte submit:
    handleSubmit(metriPatrati, numarCamere, locatie, pret, tip)
    {
        let updateVanzare = {
            metriPatrati: this.state.formControls.metriPatrati.value,
            numarCamere: this.state.formControls.numarCamere.value,
            locatie: this.state.formControls.locatie.value,
            pret: this.state.formControls.pret.value,
            tip: this.state.formControls.tip.value,
        };

        console.log(updateVanzare);

        this.vanzariUpdate(updateVanzare, metriPatrati, numarCamere, locatie, pret, tip);
    }


    //Update vanzare:
    vanzariUpdate(updateVanzare, metriPatrati, numarCamere, locatie, pret, tip) {

        return API_VANZARI_UPDATE.vanzariUpdate(updateVanzare, (result, status) =>
        {
            //Daca diferit, primim date:
            if (result !== null && (status === 200 || status === 201))
            {
                this.reloadHandler();
                console.log("Result: " + result);

                //Nothing else;
                //Update la local storage:
                localStorage.setItem("metriPatrati", updateVanzare.metriPatrati);
                localStorage.setItem("numarCamere",  updateVanzare.numarCamere);
                localStorage.setItem("locatie",  updateVanzare.locatie);
                localStorage.setItem("pret",  updateVanzare.pret);
                localStorage.setItem("tip",  updateVanzare.tip);
            }
            else
            {
                window.alert("Invalid data!");
            }
        });
    }

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


                {/*Buton confirmare update:*/}
                <Row>
                    <Col sm={{size: '8', offset: 5}}>
                        <AppContext.Consumer>
                            {({metriPatrati, numarCamere, locatie, pret, tip}) => (
                                <Button type={"submit"} disabled={!this.state.formIsValid}
                                        onClick={() => this.handleSubmit(metriPatrati, numarCamere, locatie, pret, tip)}
                                        style = {{backgroundColor: '#ab1111'}}>
                                    Confirm Update Sale
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
export default withRouter(VanzariUpdate);


