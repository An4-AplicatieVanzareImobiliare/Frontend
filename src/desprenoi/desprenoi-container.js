import React from 'react';
import './desprenoi-container.css';
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
} from 'reactstrap';

import APIResponseErrorMessage from "../commons/errorhandling/api-response-error-message";
// import HomeForm from "./components/home-form";
// import * as API_HOME from "./api/home-api"
// import UserCookie from "../userCookie";


import { useState } from 'react'
import backgroundImg1 from "../commons/images/backgroundImg1.png";
import backgroundImg2 from "../commons/images/backgroundImg2.png";
import backgroundImg4 from "../commons/images/backgroundImg4.svg";
import despreNoiContact1 from "../commons/images/despreNoiContact1.jpg"
import ReactPlayer from "react-player";
import videoBuildings3 from "../commons/videos/BuildingVideo3.mp4";

export default function DespreNoiContainer() {
    return (

        // Initial:
        // <div>
        //    <h1 className = "desprenoi-header">DESPRE NOI</h1>
        // </div>

        <div className = "despreNoi">



            {/*Parte 1:*/}
            <div>
                {/*Title:*/}
                <div className="despreNoi-divTitle"></div>

                {/*Title:*/}
                <p className="despreNoi-p1"> Informatii ajutatoare  </p>

                {/*Title:*/}
                <div className="despreNoi-divTitleText"></div>

                {/*Text sub:*/}
                <p className="despreNoi-p2"> De ce sa alegi ImobiliareCaCasa ?  </p>

                {/*Text 1:*/}
                <p className="despreNoi-p3">
                    O alegere buna pentru
                    <br></br>
                    cei ce doresc o casa
                    <br></br>
                    de calitate.  </p>

                {/*Text 2:*/}
                <p className="despreNoi-p4">
                    Cei ce nu doresc sa
                    <br></br>
                    cumpere un imobil pot
                    <br></br>
                    inchiria unul la
                    <br></br>
                    preturi mici.
                </p>

                {/*Text 3:*/}
                <p className="despreNoi-p5">
                    De ce sa te complici
                    <br></br>
                    cand poti gasi la noi
                    <br></br>
                    mai usor?
                </p>

                {/*Img 1:*/}
                <img src={backgroundImg1}  alt = "Background Img 1"
                     width = "100%" height = "50%" style = {{opacity : "0.6"}}>
                </img>
            </div>




            {/*Parte 2:*/}
            <div>

                <ReactPlayer
                    url={videoBuildings3}
                    controls={true}
                    onPlay={() => console.log('video is playing!')}
                    onPause={() => console.log('video is paused!')}
                    className = "home-videoPlayer"
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
                </p>


                {/*Imagine upfront:*/}
                <img src={backgroundImg4}
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
                <img src={backgroundImg2}  alt = "Background Img 2"
                     width = "100%" height = "50%"
                     style = {{opacity : "0.4",
                         borderWidth: "0.8vmax 0 0.8vmax 0",
                         borderStyle: "solid",
                         borderColor: "#000000",
                         zIndex: "100",}}>
                </img>
            </div>


            {/*Parte 3:*/}

            {/*Div gol:*/}
            <div style = {{
                // width: "50vmax",
                height: "3vmax"}}>
            </div>

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


        </div>
    );
}





