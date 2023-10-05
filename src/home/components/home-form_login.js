import React, {useContext, useEffect} from 'react';
// import AppContext from "../../App";
import {AppContext} from "../../App"; //Nu stiu diferenta;
// import {AppContext} from "../../App";
import Button from "react-bootstrap/Button";
import {Col, Row} from "reactstrap";
import { FormGroup, Input, Label} from 'reactstrap';
import { withRouter } from "react-router-dom";
import validate from "./validators/home-validators";
import * as API_HOME_LOGIN from "../api/home-api";
// import APIResponseErrorMessage from "../../commons/errorhandling/api-response-error-message";
//import UserCookie from "../../userCookie";



//Pentru context:
//Const inafara clasei:
//Apel in o functie la care nu dai export, in combinatie cu clasa!!!
//Nu merge apel in clasa de aici;
// function HomeForm_LoginFunction(){
//     const {isLoggedIn, setIsLoggedIn, isClient, setIsClient} = useContext(AppContext);
// }


//Form:
class HomeForm_Login extends React.Component
{
    //Pentru AppContext;
    //Nu merge adaugat asa static:
    //static contextType = AppContext; //.Consumer;

    // state = {
    //     isClient: {},
    //     setIsClient: {},
    //     isLoggedIn: {},
    //     setIsLoggedIn: {},
    // }

    //Constructor:
    constructor(props) {
        // super(props, context); //Super props;
        super(props);
        this.toggleForm = this.toggleForm.bind(this);
        this.reloadHandler = this.props.reloadHandler;
        //this.userRoleData = this.userRoleData.bind(this);
        this.userLogin = this.userLogin.bind(this);
        //this.routeChange = this.routeChange.bind(this);

        //State:
        this.state = {
            // result: null,
            // errorStatus: 0,
            // error: null,
            // contextType: AppContext.Consumer,
            userLoggedIn: {
                name: '',
                email: '',
                // password: '',
                role: '',
            },
            formIsValid: false,
            formControls: {
                email: {
                    value: '',
                    placeholder: 'Login with User Email',
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
        //Pentru App Context:
        // this.context = this.context.bind(this);
        //this.contextType = this.contextType.bind(this);
        // this.cookieRef = React.createRef();
    }

    //Pentru AppContext;
    // static contextType = AppContext;

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

            //console.log(value);
            //Se face si true si false:
            console.log(updatedControls[updatedFormElementName].valid);
        }

        console.log(value);

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        });
    };

    handleSubmit(isLoggedIn, setIsLoggedIn, isClient, setIsClient, setClientEmail)
    {
        let homeUserLogin = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value
        };

        console.log(homeUserLogin);

        //Apeluri backend:
        //this.userRoleData(homeUserLogin);
        this.userLogin(homeUserLogin, isLoggedIn, setIsLoggedIn, isClient, setIsClient, setClientEmail);
    }

    // componentDidUpdate(){}

    //1) Role redirect:
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

    //2) User Login:
    userLogin(homeUserLogin, isLoggedIn, setIsLoggedIn, isClient, setIsClient, setClientEmail) {
        // return API_HOME.userLogin(homeUserLogin, (result, status, error) => {
        return API_HOME_LOGIN.userLogin(homeUserLogin, (result, status) => {

            //Result DTO din backend; (name, email, id, role - user)
            //Daca este existent si status ok:
            if (result !== null && (status === 200 || status === 201))
            {
                this.reloadHandler();
                //let newPath = '/'; //Pe Home
                console.log("User Name: " + result.name + " !");

                //Save logged in user:
                this.state.userLoggedIn.name = result.name;
                this.state.userLoggedIn.email = result.email;
                this.state.userLoggedIn.role = result.role;

                //Save that he is logged in: (Expires at logout)
                //this.context.setIsLoggedIn(true);
                //this.contextType.setIsLoggedIn(true);
                //this.state.setIsLoggedIn(true);

                //Nu ajuta sa pui context, dar se pot combina:
                setIsLoggedIn(true);
                localStorage.setItem("isLoggedIn", true);
                // useEffect(setIsLoggedIn(true));


                //Ordinea?
                //Contextul si Stateul sunt mai lente;
                //Pentru reapel useEffects;
                setClientEmail(result.email);
                // setClientEmail(this.state.userLoggedIn.email);
                localStorage.setItem("clientEmail", result.email);
                // localStorage.setItem("clientEmail", this.state.userLoggedIn.email);
                // useEffect(setClientEmail(this.state.userLoggedIn.email));


                if(this.state.userLoggedIn.role === "client")
                {
                    //If client, save that he is client:
                    //this.context.setIsClient(true);
                    //this.contextType.setIsClient(true);
                    //this.state.setIsClient(true);
                    setIsClient(true);
                    localStorage.setItem("isClient", true);
                    // useEffect(setIsClient(true));
                    console.log("Client Logged In!");
                }
                else if(this.state.userLoggedIn.role === "administrator")
                {
                    //If admin, save that he is admin:
                    //this.context.setIsClient(false);
                    //this.contextType.setIsClient(false);
                    //this.state.setIsClient(false);
                    setIsClient(false);
                    localStorage.setItem("isClient", false);
                    // useEffect(setIsClient(false));
                    console.log("Admin Logged In!");
                }
            }
            else {

                //Alert:
                window.alert("Invalid credentials!");
                //Redirect:
                //window.location.href = "/noutati";

                // this.setState(({
                //     errorStatus: status,
                //     error: error
                // }));
            }
        });
    }

    render() {

        //In render se pot constante;

        //Varianta context static:
        //const { isClient, setIsClient, isLoggedIn, setIsLoggedIn } = this.context; //this.state.context;
        //ToString pentru afisarea variabilelor din context!!!
        //ToString merge doar daca este defined:
        //const isLoggedInLocal = isLoggedIn.toString();
        //Varianta user Context: Nici in render;
        //const {isLoggedIn, setIsLoggedIn, isClient, setIsClient} = useContext(AppContext);
        //Undefined vs False;
        // console.log("Testare transmitere context cu hooks in clase: " + isLoggedIn);
        // console.log("Ce este in context incercari: " + this.context.isLoggedIn);

        //Pentru consume: Trebuie definit!!! Nu trebuie, din consumer stie: Se foloseste automat contextul:
        // const { isLoggedIn, setIsLoggedIn, isClient, setIsClient } = this.context;

        return (
                <div>
                    {/*Email:*/}
                    <FormGroup id='email'
                               style = {{backgroundColor: "#ecca67",
                                   padding: "2%",
                                   borderRadius: "1.5%"}}
                    >
                        <AppContext.Consumer>
                            {({isLoggedIn}) => (
                                <Label for='emailField' style = {{fontStyle: "italic", fontSize: "large"}}>
                                    <strong>
                                        {/*Email (Test: {isLoggedIn.toString()}):*/}
                                        {/*Email ({this.state.userLoggedIn.email}) :*/}
                                        {/*Undefined din context:*/}
                                        {/*Email ({`Test context: ${isLoggedInLocal}`}):*/}
                                        {/*Email ({`Test context: ${isLoggedIn}`}):*/}
                                        Email:
                                    </strong>
                                </Label>
                            )}
                        </AppContext.Consumer>
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

                    {/*Buton confirmare, in handleSubmit apel pentru backend: HandleSubmit de login;*/}
                    <Row>
                        <Col sm={{size: '8', offset: 5}}>
                        <AppContext.Consumer>
                            {({isLoggedIn, setIsLoggedIn, isClient, setIsClient, setClientEmail}) => (
                                <Button type={"submit"} disabled={!this.state.formIsValid}
                                        onClick={() => this.handleSubmit(isLoggedIn, setIsLoggedIn, isClient, setIsClient, setClientEmail)}
                                        style = {{backgroundColor: '#ab1111'}}>
                                    Confirm Login
                                </Button>
                            )}
                        </AppContext.Consumer>
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

//In loc de static:
// HomeForm_Login.contextType = AppContext;

//Rutare:
export default withRouter(HomeForm_Login);


