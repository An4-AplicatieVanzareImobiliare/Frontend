import React, {useContext, useEffect} from 'react'; //, useEffect
import './home-container.css';
import ReactPlayer from 'react-player'
// import '../commons/images/houseIcon.css'
import backgroundImg1 from '../commons/images/backgroundImg1.png'
import backgroundImg2 from '../commons/images/backgroundImg2.png'
// import backgroundImg3 from '../commons/images/backgroundImg3.png'
import backgroundImg3 from '../commons/images/backgroundImg3.svg'
import backgroundAddressIcon1 from '../commons/images/addressIcon.svg'
import backgroundPhoneIcon2 from '../commons/images/phoneIcon.svg'
import backgroundEmailIcon3 from '../commons/images/mailIcon.svg'
import videoBuildings from '../commons/videos/BuildingVideo.mov'
import videoBuildings2 from '../commons/videos/BuildingVideo2.mp4'
import * as API_HOME_CONTAINER from "./api/home-api"; //Nu poate fi denumit la fel;
// import BackgroundImg from '../commons/images/energy.jpeg';
import {
    Button,
    Card,
    CardHeader,
    Col,
    Modal,
    ModalBody,
    ModalHeader,
    Row,
    Container,
    //Jumbotron
} from 'reactstrap';
import HomeForm_Login from "./components/home-form_login";
import HomeForm_Register from "./components/home-form_register";

//Eroare:
import APIResponseErrorMessage from "../commons/errorhandling/api-response-error-message";

//Componenta:
import HomeForm from "./components/home-form_login";

//API:
import * as API_HOME from "./api/home-api"

//Cookie:
// import UserCookie from "../userCookie";







//1)

//useState:
import { useState } from 'react'
import logo from "../commons/images/houseIcon.svg";
import {AppContext} from "../App";

export default function HomeContainer() {

    // Variabile: login and register:
    //Nu trebuie specificat tipul, Boolean:
    //SetState face render cu useEffects:
    //Conteaza ce schimbi si ce afisezi;
    const [selectLogin, setSelectLogin] = useState(false);
    const [selectRegister, setSelectRegister] = useState(false);
    const [loginAndRegisterButtons, setLoginAndRegisterButtons] = useState(<div></div>); //Empty, not string;
    // const [isInitialRender, setIsInitialRender] = useState(true);

    //Din APp JS: Folosesti context:
    const {isLoggedIn, setIsLoggedIn, isClient, setIsClient, clientEmail, setClientEmail} = useContext(AppContext);

    //Set modal login:
    const toggleFormLogin = () => {
        //No getter:
        setSelectLogin(!selectLogin);

        console.log("Login Form!");
    }

    //Set modal register:
    const toggleFormRegister = () => {
        //No getter:
        setSelectRegister(!selectRegister);

        console.log("Register Form!");
    }

    //Pentru reload:
    const reload = (loginOrRegister) => {

        // console.log("Reload!");

        if(loginOrRegister === 1)
        {
            //Am facut login:
            // console.log("Login toggle!");
            toggleFormLogin();
        }
        else if(loginOrRegister === 2)
        {
            //Am facut register:
            // console.log("Register toggle!");
            toggleFormRegister();
        }
    }

    // //1) Not logged in:
    // let notLoggedIn =
    //     <div>
    //         <Button
    //             className = "home-loginStyle"
    //             onClick={toggleFormLogin}
    //         > Login </Button>
    //
    //         <Modal
    //             isOpen={selectLogin}
    //             toggle={toggleFormLogin}
    //             size="lg"
    //             style = {{borderRadius: "20% !important"}}
    //         >
    //             <ModalHeader
    //                 style={{backgroundColor: '#98b9ec',
    //                     textAlign: "center",
    //                     paddingLeft: "45%",}}
    //                 toggle={toggleFormLogin}>
    //                 <strong>
    //                     Login:
    //                 </strong>
    //             </ModalHeader>
    //
    //             <ModalBody
    //                 style={{backgroundColor: '#98b9ec'}}
    //             >
    //                 <HomeForm_Login
    //                     reloadHandler={() => reload(1)}
    //                 />
    //             </ModalBody>
    //         </Modal>
    //
    //
    //         <Button
    //             className = "home-registerStyle"
    //             onClick={toggleFormRegister}
    //         >
    //             Register
    //         </Button>
    //
    //         <Modal
    //             isOpen={selectRegister}
    //             toggle={toggleFormRegister}
    //             size="lg"
    //             style = {{borderRadius: "20% !important "}}
    //             // className={this.props.className}
    //         >
    //             <ModalHeader
    //                 style={{backgroundColor: '#98b9ec',
    //                     textAlign: "center",
    //                     paddingLeft: "45%"}}
    //                 toggle={toggleFormRegister}>
    //                 <strong>
    //                     Register
    //                 </strong>
    //             </ModalHeader>
    //
    //             <ModalBody
    //                 style={{backgroundColor: '#98b9ec'}}>
    //                 <HomeForm_Register
    //                     reloadHandler={() => reload(2)}
    //                 />
    //             </ModalBody>
    //         </Modal>
    //     </div>;

    //2) Logged in:
    // let loggedIn = <div>
    //     {/*Text pentru numele tau:*/}
    //     <p className="home-userEmailData"> Hello {clientEmail} ! </p>
    //
    //     <Button
    //         // Este ca register la style, dar acum scrie logout:
    //         className = "home-registerStyle"
    //         onClick={() => handleLogout()}
    //     >
    //         Logout
    //     </Button>
    // </div>;

    //Pentru logout:
    const handleLogout = () => {
        //Apel:
        userLogout();
    }

    //User logout:
    const userLogout = () => {
        return API_HOME_CONTAINER.userLogout((result, status) => {

            //Daca am putut da delogare:
            if (status === 200 || status === 201)
            {
                //this.reloadHandler();
                console.log("User Name Delogat: " + result.name + " !");

                //Not logged in anymore:
                //Nu conteaza pentru use effects?
                setIsLoggedIn(false);
                localStorage.setItem("isLoggedIn", false);

                //Client:
                setIsClient(true);
                localStorage.setItem("isClient", true);

                //Empty email:
                setClientEmail("email");
                localStorage.setItem("clientEmail", "email");


                //Pentru locatie, set toate goale:
                localStorage.setItem("metriPatrati", "-");
                localStorage.setItem("numarCamere",  "-");
                localStorage.setItem("locatie",  "-");
                localStorage.setItem("pret",  "-");
                localStorage.setItem("tip",  "-");
            }
            else {
                window.alert("Invalid!");
            }
        });
    }


    //Nefolosit:
    //Pentru handle data:
    const handleUserData = () => {
        //Apel:
        userData();
    }

    //Get user data:
    const userData = () => {
        return API_HOME_CONTAINER.getUserData((result, status) => {

            //Daca exista result si status bun:
            if (result !== null && status === 200) {
                //Nothing;
            } else {
                window.alert("Invalid!");
            }
        });
    }


    //Use effects:
    // useEffect(() => {
    //     //Repunerea datelor:
    //     setIsLoggedIn(isLoggedIn);
    //     setIsClient(isClient);
    //     setClientEmail(clientEmail);
    // })
    // const [ value, setValue]= useState(0);
    //
    // const handleIncrement = () => {
    //     setValue(value + 1)
    // }
    // const handleDecrement = () => {
    //     setValue(value - 1)
    // }
    //Declarare pentru renderer:
    //let loginAndRegisterButtons;
    // App si Home Container need updates:
    // Fara lista se reapeleaza la infinit pentru ca nu are cu ce compara previous;
    // Daca este logat, nimic, altfel arata butoanele:
    // if(true)
    // if(!localStorage.getItem("isLoggedIn"))
    // if(!isLoggedIn)

    useEffect(() => {

            //Pentru a afisa clientul:
            //Se apeleaza o data, sa fie mai rapid:
            setIsLoggedIn(localStorage.getItem("isLoggedIn"));
            setIsClient(localStorage.getItem("isClient"));
            setClientEmail(localStorage.getItem("clientEmail"));

        //Pentru string:
        //Este string idk;
        // if(!isLoggedIn)
            if(isLoggedIn === "false") //&& isInitialRender)
            {
            // Pun aici daca este sau nu logat!!!
            //Primeste primul div care il dai:
            //In loc de egal!!! Dai set!!! Deci asa se activeaza!!!
            // setLoginAndRegisterButtons((loginAndRegisterButtons) => notLoggedIn);
            // setLoginAndRegisterButtons(() => notLoggedIn);
            // setIsInitialRender(false);

            setLoginAndRegisterButtons(<div>
                <Button
                    className = "home-loginStyle"
                    onClick={toggleFormLogin}
                > Login </Button>

                <Button
                    className = "home-registerStyle"
                    onClick={toggleFormRegister}
                >
                    Register
                </Button>
            </div>); //Cu div recunoaste;
        }
        else //If true, logat:
        {
            // setLoginAndRegisterButtons((loginAndRegisterButtons) => loggedIn);
            // setLoginAndRegisterButtons(() => loggedIn);
            // setIsInitialRender(true);

            setLoginAndRegisterButtons(
                <div>
                    <p className="home-userEmailData"> Hello, {clientEmail} ! </p>

                    <Button
                        // Este ca register la style, dar acum scrie logout:
                        className = "home-registerStyle"
                        onClick={() => handleLogout()}
                    >
                        Logout
                    </Button>
                </div>
            );
        }
    }
    //isLoggedIn: se schimba => apelare useEffect;
    //selectLogin / selectRegister => nu conteaza pentru use effects;
    //Nu conteaza seturile din context aici;
    //clientEmail este cea care trebuie schimbata;
    //Toggle are probleme pentru ca schimba din 1 in 2 si din 2 in 1;
    , [isLoggedIn, clientEmail]);

    //Toate care s-ar putea schimba:
    // , [loginAndRegisterButtons]);
    // );
    // , [isLoggedIn, isClient, clientEmail]);
    // , [isInitialRender]);
    // , [loginAndRegisterButtons, selectLogin,
    //         selectRegister, isLoggedIn, isClient,
    //         clientEmail, HomeForm_Login, HomeForm_Register]);
    // , [loginAndRegisterButtons, clientEmail, HomeForm_Login, HomeForm_Register]);
    //Lista contine ce se schimba;


    // style = {{overflowX: "hidden"}}
    return (
        <div className="home">

            {/*<h1 className = "home-header">HOME</h1>*/}



            {/*Parte 1:*/}
            <div>
                {/*<div className = "home-backgroundImg1"></div>*/}
                {/*Title:*/}
                <div className="home-divTitle"></div>

                {/*Title:*/}
                <p className="home-p1">
                    ImobiliareCaAcasa
                    {/*{HomeForm_Login.state.userLoggedIn}*/}
                    {/*{HomeForm_Login.props.state.userLogin.name}*/}
                </p>

                {/*Title:*/}
                <div className="home-divTitleText"></div>

                {/*Text sub:*/}
                <p className="home-p2"> De ce sa alegi ImobiliareCaCasa ? </p>

                {/*Text 1:*/}
                <p className="home-p3">
                    O alegere buna pentru
                    <br></br>
                    cei ce doresc o casa
                    <br></br>
                    de calitate.  </p>

                {/*Text 2:*/}
                <p className="home-p4">
                    Cei ce nu doresc sa
                    <br></br>
                    cumpere un imobil pot
                    <br></br>
                    inchiria unul la
                    <br></br>
                    preturi mici.
                </p>

                {/*Text 3:*/}
                <p className="home-p5">
                    De ce sa te complici
                    <br></br>
                    cand poti gasi la noi
                    <br></br>
                    mai usor?
                </p>

                {/*Img 1:*/}
                <img src={backgroundImg1}  alt = "Background Img 1"
                     width = "100%" height = "50%" style = {{opacity : "0.6"}}>
                    {/*width = "100%" height = "50%"*/}
                    {/*width = "1518vmax" height = "1240vmax"*/}
                    {/*<h1 className = "home-header">HOME 2</h1>*/}
                </img> {/* style = "home-backgroundImg1" */}
            </div>



            {/*Parte 2:*/}
            <div className="home-divCredentials">
                {/*Text Login Register:*/}
                <div className="home-LoginRegisterText"></div>

                {/*Paragraf Login Register:*/}
                <p className = "home-LoginRegisterTextP1">
                    Vrei sa creezi un account?
                    <br></br>
                    Astfel poti reveni cu acelasi
                    <br></br>
                    cont pentru alte oferte!
                </p>

                {/*Sageata din 3 componente:*/}
                <div className="home-LoginRegisterArrow"></div>
                <div className="home-LoginRegisterArrowUp"></div>
                <div className="home-LoginRegisterArrowDown"></div>

                {/*Div Buttons:*/}
                <div className="home-LoginRegisterButtons"></div>

                {/*Butoane login + register:*/}

                {/*Buton login:*/}

                {/*Ori logat, ori nu!!!*/}
                {loginAndRegisterButtons}

                {/*MODALA O LAS AICI!!!*/}
                {/*Login:*/}
                <Modal
                    isOpen={selectLogin}
                    toggle={toggleFormLogin}
                    size="lg"
                    style = {{borderRadius: "20% !important"}}
                >
                    <ModalHeader
                        style={{backgroundColor: '#98b9ec',
                            textAlign: "center",
                            paddingLeft: "45%",}}
                        toggle={toggleFormLogin}>
                        <strong>
                            Login:
                        </strong>
                    </ModalHeader>

                    <ModalBody
                        style={{backgroundColor: '#98b9ec'}}
                    >
                        <HomeForm_Login
                            reloadHandler={() => reload(1)}
                        />
                    </ModalBody>
                </Modal>

                {/*Register:*/}
                <Modal
                    isOpen={selectRegister}
                    toggle={toggleFormRegister}
                    size="lg"
                    style = {{borderRadius: "20% !important "}}
                    // className={this.props.className}
                >
                    <ModalHeader
                        style={{backgroundColor: '#98b9ec',
                            textAlign: "center",
                            paddingLeft: "45%"}}
                        toggle={toggleFormRegister}>
                        <strong>
                            Register
                        </strong>
                    </ModalHeader>

                    <ModalBody
                        style={{backgroundColor: '#98b9ec'}}>
                        <HomeForm_Register
                            reloadHandler={() => reload(2)}
                        />
                    </ModalBody>
                </Modal>

            </div>


            {/*Parte 3:*/}
            {/*Position Absolute trebuie primele!!!*/}
            <div>
                {/*<p className="home-p1"> Parte 3  </p>*/}

                {/*Video:*/}

                {/*1)*/}
                {/*<video*/}
                {/*    src={videoBuildings}*/}
                {/*    // width="50vmax"*/}
                {/*    // height="50vmax"*/}
                {/*    position="absolute"*/}
                {/*    width="100%"*/}
                {/*    height="100%"*/}
                {/*    autoPlay="true">*/}
                {/*</video>*/}
                {/*allowFullScreen/>*/}

                {/*2)*/}
                {/*onPlay={() => console.log('video is playing')} onPause={() => console.log('video is paused')}*/}

                <ReactPlayer
                    url={videoBuildings2}
                    controls={true}
                    onPlay={() => console.log('video is playing!')}
                    onPause={() => console.log('video is paused!')}
                    className = "home-videoPlayer"
                    // position= "absolute"
                />


                {/*Text langa video:*/}
                <p className="home-p6">
                    La ce te poti astepta de la noi:
                    <br></br>
                    <br></br>
                    &emsp;- Evaluarea proprietății: agenții imobiliare pot evalua proprietatea ta și pot oferi
                    o valoare estimată pe baza pieței imobiliare și a proprietăților similare din zonă.
                    <br></br>
                    <br></br>
                    &emsp;- Listarea proprietății: agențiile imobiliare pot lista proprietatea ta pe site-urile
                    lor web și în alte locuri relevante pentru a atrage mai mulți cumpărători sau chiriași.
                    {/*<br></br>*/}
                </p>


                {/*Imagine upfront:*/}
                <img src={backgroundImg3}
                     className = "home-frontImage"
                     alt = "Background Img 2">
                </img>


                {/*Text langa imagine:*/}
                <p className={"home-p7"}>
                    &emsp;Imobiliarele reprezintă un domeniu foarte vast și din ce în ce mai important
                    în viața noastră de zi cu zi. Fie că este vorba de achiziționarea unei case
                    sau a unui apartament, de închirierea unui spațiu comercial sau de investiții
                    în proprietăți imobiliare, acest domeniu poate fi foarte complex și plin de oportunități.

                    <br></br>
                    <br></br>

                    &emsp;Cumpărarea unei proprietăți poate fi una dintre cele mai importante decizii
                    financiare pe care le vei lua în viața ta. Este important să îți asumi un angajament
                    financiar pe termen lung și să te asiguri că îți poți permite plata ratei lunare a
                    împrumutului ipotecar.
                </p>


                {/*Img 3:*/}
                {/*Nu pot face border mai nergu:*/}
                <img src={backgroundImg2}  alt = "Background Img 2"
                     width = "100%" height = "50%"
                     style = {{opacity : "0.4",
                               // border: "0px 30px 30px 0px",
                               // border: "#000000 solid 20px",
                               borderWidth: "0.8vmax 0 0.8vmax 0",
                               borderStyle: "solid",
                               borderColor: "#000000",
                               zIndex: "100",}}>
                </img>
            </div>


            {/*Parte 4:*/}
            <div>
                {/*Contact bar:*/}
                <div className="home-contactInfo"></div>

                {/*Text contact first:*/}
                <p className={"home-p8"}>
                    Contact Firma:
                    {/*<br></br>*/}
                </p>

                {/*Text contact 1:*/}
                <p className={"home-p9"}>
                    Adresa:
                    <br></br>
                    Strada Aurel Vlaicu nr. 14,
                    Cluj-Napoca, județul Cluj,
                    cod poștal 400364.
                </p>

                {/*Icon 1:*/}
                <img src={backgroundAddressIcon1} className = "home-Icon1"/>

                {/*Text contact 2:*/}
                <p className={"home-p10"}>
                    Telefon:
                    <br></br>
                    +40 742 587 921
                    <br></br>
                    +40 756 123 456
                </p>

                {/*Icon 2:*/}
                <img src={backgroundPhoneIcon2} className = "home-Icon2"/>

                {/*Text contact 3:*/}
                <p className={"home-p11"}>
                    Email:
                    <br></br>
                    Imobiliare.CaAcasa@gmail.com
                </p>

                {/*Icon 3:*/}
                <img src={backgroundEmailIcon3} className = "home-Icon3"/>

                {/*!!!*/}
                {/*Daca nu am imagine in background nu stiu cat de bine merge;*/}
            </div>


            {/*<img className = "home-backgroundImg1"></img>*/}

            {/*<div className="buttons">*/}
            {/*    <button data-testid="Increment" onClick={handleIncrement}>Increment</button>*/}
            {/*    <button data-testid="Decrement" onClick={handleDecrement}>Decrement</button>*/}
            {/*</div>*/}
            {/*<p data-testid="count">{value}</p>*/}

        </div>
    );
}






//2)

//Parte CSS:
// const backgroundStyle = {
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     width: "100%",
//     height: "3840px",
//     backgroundImage: `url(${BackgroundImg})`
// };
//
// const textStyle =
//     {color: 'white',
//         textAlign: 'center',
//         paddingBottom: '5%'
//     };
//
// const divTotal = {
//     overflow: 'hidden',
// };
//
// const buttonStyle = {
//     marginLeft: '40%',
//     //padding: '1% 4.5% 1% 4.5%',
//     width: '20%',
//     height: '100%'
// };





// class HomeContainer extends React.Component
// {
//     constructor(props) {
//         super(props);
//         this.toggleForm = this.toggleForm.bind(this);
//         this.reload = this.reload.bind(this);
//         this.state = {
//             selected: false,
//             collapseForm: false,
//             tableData: [],
//             isLoaded: false,
//             errorStatus: 0,
//             error: null
//         };
//
//         this.cookieRef = React.createRef();
//     }
//
//     componentDidMount() {
//         this.fetchNoRole();
//         // this.cookieRef.current.setAllNull();
//     }
//
//     componentWillUnmount() {
//         this.setState = (state,callback)=>{
//             return;
//         };
//     }
//
//     fetchNoRole() {
//         let result = this.cookieRef.current.state.role;
//         console.log("Test nou 1: " + result);
//         if (result !== null) {
//             if(result === "noRole")
//             {
//             }
//             else if(result === "admin")
//             {
//             }
//             else if(result === "client")
//             {
//             }
//         }
//         else {
//         }
//     }
//
//     toggleForm() {
//         this.setState({selected: !this.state.selected});
//     }
//
//     reload() {
//         this.setState({
//             isLoaded: false
//         });
//         this.toggleForm();
//     }
//
//     render() {
//         return (
//             <div style={divTotal}>
//
//                 <Jumbotron fluid style={backgroundStyle}>
//
//                     <Container fluid>
//
//                         <h1 className="display-3" style={{textAlign: 'center',
//                             color: '#000000', marginBottom: '5%'}}>Energy monitoring platform</h1>
//
//                         <p className="lead" style={textStyle}> <b>
//                             Renowned for our expertise in the field of precision measurement in high-current applications,
//                             EnergyConsumptionMeasuringCompany has been a leading global provider of advanced measuring systems for many years.
//                             Marketed under the ISA® brand, our precision measuring systems offer exceptionally high performance.
//                             Our commitment to achieving the ultimate in precision is combined with ease of use and a
//                             high degree of variability! </b>
//                         </p>
//
//                         <Row>
//                             <Col>
//                                 <Button color="primary"
//                                         style = {buttonStyle}
//                                         onClick={this.toggleForm}>Login</Button>
//                             </Col>
//                         </Row>
//
//                     </Container>
//
//                 </Jumbotron>
//
//                 <br/>
//
//                 <Modal isOpen={this.state.selected} toggle={this.toggleForm}
//                        className={this.props.className} size="lg">
//                     <ModalHeader toggle={this.toggleForm}
//                                  style = {{backgroundColor: "#ffc824"}}> Login Form: </ModalHeader>
//                     <ModalBody style = {{backgroundColor: "#ffc824"}}>
//                         <HomeForm reloadHandler={this.reload}/>
//                     </ModalBody>
//                 </Modal>
//
//                 <UserCookie ref={this.cookieRef} />
//
//             </div>
//         )
//     }
// }


