import React from 'react';
import './contact-container.css';
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

import APIResponseErrorMessage from "../commons/errorhandling/api-response-error-message";
// import HomeForm from "./components/home-form";
// import * as API_HOME from "./api/home-api"
// import UserCookie from "../userCookie";


import { useState } from 'react'
import despreNoiContact1 from "../commons/images/despreNoiContact1.jpg";
import backgroundAddressIcon1 from "../commons/images/addressIcon.svg";
import backgroundPhoneIcon2 from "../commons/images/phoneIcon.svg";
import backgroundEmailIcon3 from "../commons/images/mailIcon.svg";




export default function ContactContainer() {
    return (
        // Initial:
        // <div>
        //    <h1 className = "contact-header">CONTACT</h1>
        // </div>

        <div className = "contact">


            {/*Parte 1:*/}

            <div>
                {/*Img new:*/}
                <img src={despreNoiContact1}  alt = "Despre Noi Img"
                     width = "100%"
                     height = "20%"
                     style = {{
                         // opacity : "0.4",
                         // borderWidth: "0.8vmax 0 0.8vmax 0",
                         borderStyle: "solid",
                         borderColor: "#000000",
                         zIndex: "100"
                         ,}}>
                </img>
            </div>

            <div style = {{
                // width: "50vmax",
                height: "5vmax"}}>
            </div>


            {/*Parte 2:*/}

            <div>
                {/*Contact bar:*/}
                <div className="contact-contactInfo"></div>

                {/*Text contact first:*/}
                <p className={"contact-p8"}>
                    Date de contact:
                </p>

                {/*Text contact 1:*/}
                <p className={"contact-p9"}>
                    Adresa:
                    <br></br>
                    Strada Aurel Vlaicu nr. 14,
                    Cluj-Napoca, județul Cluj,
                    cod poștal 400364.
                </p>

                {/*Icon 1:*/}
                <img src={backgroundAddressIcon1} className = "contact-Icon1"/>

                {/*Text contact 2:*/}
                <p className={"contact-p10"}>
                    Telefon:
                    <br></br>
                    +40 742 587 921
                    <br></br>
                    +40 756 123 456
                </p>

                {/*Icon 2:*/}
                <img src={backgroundPhoneIcon2} className = "contact-Icon2"/>

                {/*Text contact 3:*/}
                <p className={"contact-p11"}>
                    Email:
                    <br></br>
                    Imobiliare.CaAcasa@gmail.com
                </p>

                {/*Icon 3:*/}
                <img src={backgroundEmailIcon3} className = "contact-Icon3"/>
            </div>

        </div>
    );
}





