import React from 'react';
import Button from "react-bootstrap/Button";
import {Col, Row} from "reactstrap";
import { FormGroup, Input, Label} from 'reactstrap';
import { withRouter } from "react-router-dom";
import validate from "./validators/home-validators";
// import * as API_HOME_REGISTER from "../api/home-api";
import * as API_HOME_REGISTER from "../api/home-api";
// import APIResponseErrorMessage from "../../commons/errorhandling/api-response-error-message";
//import UserCookie from "../../userCookie";



//Form:
class HomeForm_Register extends React.Component
{
    //Constructor:
    constructor(props) {
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
        this.reloadHandler = this.props.reloadHandler;
        //this.userRoleData = this.userRoleData.bind(this);
        this.userRegister = this.userRegister.bind(this);
        //this.routeChange = this.routeChange.bind(this);

        //State:
        this.state = {
            // result: null,
            // errorStatus: 0,
            // error: null,
            formIsValid: false,
            formControls: {
                name: {
                    value: '',
                    placeholder: 'Register with User Name',
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true,
                        nameValidator: true
                    }
                },
                email: {
                    value: '',
                    placeholder: 'Register with User Email',
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true,
                        emailValidator: true
                    }
                },
                password: {
                    value: '',
                    placeholder: '*************',
                    valid: false,
                    touched: false,
                    validationRules: {
                        isRequired: true,
                        passwordValidator: true
                    }
                }
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.cookieRef = React.createRef();
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
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);
        updatedControls[name] = updatedFormElement;

        let formIsValid = true;
        for (let updatedFormElementName in updatedControls) {
            formIsValid = updatedControls[updatedFormElementName].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        });
    };

    handleSubmit()
    {
        let homeUserRegister = {
            name: this.state.formControls.name.value,
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value
        };

        console.log(homeUserRegister);

        //Apeluri backend:
        //this.userRoleData(homeUserRegister);
        this.userRegister(homeUserRegister);
    }

    //Comunicare be:
    // userRoleData(homeUser) {
    //     return API_HOME.userRoleRedirect(homeUser, (result, status, error) => {
    //
    //         if (result !== null && (status === 200 || status === 201)) {
    //             this.reloadHandler();
    //
    //             this.cookieRef.current.handleUserChange(result);
    //
    //             if(result.role === 'admin')
    //             {
    //                 let newPath = '/admin';
    //                 this.props.history.push(newPath);
    //             }
    //             else if(result.role === 'client')
    //             {
    //                 let newPath = '/client';
    //                 this.props.history.push(newPath);
    //             }
    //             else if(result.role === 'noRole')
    //             {
    //             }
    //         } else {
    //             this.setState(({
    //                 errorStatus: status,
    //                 error: error
    //             }));
    //         }
    //     });
    // }

    //2) User Register:
    userRegister(homeUserRegister) {
        return API_HOME_REGISTER.userRegister(homeUserRegister, (result, status) => {

            if (result !== null && (status === 200 || status === 201))
            {
                this.reloadHandler();
                console.log("User Name: " + result.name + " !");

                //Fara setari context sau local storage! Doar un alert!

                window.alert("User is registered!");
            }
            else {
                window.alert("Invalid credentials!");
                // window.alert(result.error);
            }
        });
    }

    render() {
        return (
            <div>
                {/*Name:*/}
                <FormGroup id='name'
                           style = {{backgroundColor: "#ecca67",
                                    padding: "2%",
                                    borderRadius: "1.5%"}}
                >
                    <Label for='nameField'
                           style = {{fontStyle: "italic", fontSize: "large"}}>
                        <strong>
                            Name:
                        </strong>
                    </Label>
                    <Input name='name' id='nameField'
                           placeholder={this.state.formControls.name.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.name.value}
                           touched={this.state.formControls.name.touched? 1 : 0}
                           valid={this.state.formControls.name.valid}
                           required
                    />
                    {this.state.formControls.name.touched && !this.state.formControls.name.valid &&
                        <div
                            style = {{marginLeft: "3%",
                                      marginTop: "3%"}}
                            className={"error-message row"}>
                            * User Name is not valid!
                        </div>}
                </FormGroup>

                {/*Email:*/}
                <FormGroup id='email'
                           style = {{backgroundColor: "#ecca67",
                                     padding: "2%",
                                     borderRadius: "1.5%"}}
                >
                    <Label for='emailField' style = {{fontStyle: "italic", fontSize: "large"}}>
                        <strong>
                            Email:
                        </strong>
                    </Label>
                    <Input name='email' id='emailField'
                           placeholder={this.state.formControls.email.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.email.value}
                           touched={this.state.formControls.email.touched? 1 : 0}
                           valid={this.state.formControls.email.valid}
                           required
                    />
                    {this.state.formControls.email.touched && !this.state.formControls.email.valid &&
                        <div
                            style = {{marginLeft: "3%",
                                      marginTop: "3%"}}
                            className={"error-message row"}>
                            * User Email is not valid!
                        </div>}
                </FormGroup>

                {/*Password:*/}
                {/*Type pentru password ascuns:*/}
                <FormGroup id='password'
                           style = {{backgroundColor: "#ecca67",
                                     padding: "2%",
                                     borderRadius: "1.5%"}}
                >
                    <Label for='passwordField' style = {{fontStyle: "italic", fontSize: "large"}}>
                        <strong>
                            Password:
                        </strong>
                    </Label>
                    <Input type='password' name='password' id='passwordField'
                           placeholder={this.state.formControls.password.placeholder}
                           onChange={this.handleChange}
                           defaultValue={this.state.formControls.password.value}
                           touched={this.state.formControls.password.touched? 1 : 0}
                           valid={this.state.formControls.password.valid}
                           required
                    />
                    {this.state.formControls.password.touched && !this.state.formControls.password.valid &&
                        <div
                            style = {{marginLeft: "3%",
                                      marginTop: "3%"}}
                            className={"error-message"}>
                            * Password must have a valid format!
                        </div>}
                </FormGroup>

                {/*Buton confirmare, in handleSubmit apel pentru backend:*/}
                <Row>
                    <Col sm={{size: '8', offset: 5}}>
                        <Button type={"submit"} disabled={!this.state.formIsValid}
                                onClick={this.handleSubmit}
                                style = {{backgroundColor: '#ab1111'}}>
                            Confirm Register
                        </Button>
                    </Col>
                </Row>
                {
                    // Pentru a stii ce nu merge in backend:
                    // this.state.errorStatus > 0
                    // &&
                    // <APIResponseErrorMessage errorStatus={this.state.errorStatus} error={this.state.error}/>
                }

                {/*<UserCookie ref={this.cookieRef} />*/}
            </div>
        ) ;
    }
}


export default withRouter(HomeForm_Register);


