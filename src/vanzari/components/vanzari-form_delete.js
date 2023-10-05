import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../App";
import Button from "react-bootstrap/Button";
import {Col, Row} from "reactstrap";
import { FormGroup, Input, Label} from 'reactstrap'; //Same;
import { withRouter } from "react-router-dom";
import validateVanzari from "./validators/vanzari-validators";
import * as API_VANZARI_DELETE from "../api/vanzari-api";


//Form: La fel ca Add!
class VanzariDelete extends React.Component
{
    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
        this.reloadHandler = this.props.reloadHandler;
        this.vanzariDelete = this.vanzariDelete.bind(this);

        //State:
        this.state = {
            formIsValid: false,
            formControls: {
                //Doar locatie pentru sters, readonly!!!
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
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //Setare valoroare locatie pentru delete:
        if(localStorage.getItem("locatie") !== null)
        {
            //Setare:
            this.state.formControls.locatie.value = localStorage.getItem("locatie");

            //Valid:
            this.state.formControls.locatie.valid = true;

            //Valid final:
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
    handleSubmit(locatie)
    {
        let deleteVanzare = {
            locatie: this.state.formControls.locatie.value,
        };

        console.log(deleteVanzare);

        this.vanzariDelete(deleteVanzare, locatie);
    }


    //Delete vanzare:
    vanzariDelete(deleteVanzare, locatie) {

        return API_VANZARI_DELETE.vanzariDelete(deleteVanzare, (result, status) =>
        {
            //Daca diferit, primim date:
            if (result !== null && (status === 200 || status === 201))
            {
                this.reloadHandler();
                console.log("Result: " + result);

                //Update la local storage: La toate gol de acum!
                localStorage.setItem("metriPatrati", "-");
                localStorage.setItem("numarCamere", "-");
                localStorage.setItem("locatie",  "-");
                localStorage.setItem("pret", "-");
                localStorage.setItem("tip", "-");
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

                {/*Locatie:*/}
                <FormGroup id='locatie'
                           style = {{backgroundColor: "#ecca67",
                               padding: "2%",
                               borderRadius: "1.5%"}}
                >
                    <Label for='locatieField' style = {{fontStyle: "italic", fontSize: "large"}}>
                        <strong>
                            Locatie:
                        </strong>
                    </Label>
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


                {/*Buton confirmare delete:*/}
                <Row>
                    <Col sm={{size: '8', offset: 5}}>
                        <AppContext.Consumer>
                            {({locatie}) => (
                                <Button type={"submit"} disabled={!this.state.formIsValid}
                                        onClick={() => this.handleSubmit(locatie)}
                                        style = {{backgroundColor: '#ab1111'}}>
                                    Confirm Delete Sale
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
export default withRouter(VanzariDelete);


