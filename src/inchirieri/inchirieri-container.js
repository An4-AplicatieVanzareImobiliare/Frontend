import React from 'react';
import './inchirieri-container.css';
// import BackgroundImg from '../commons/images/energy.jpeg';
import {
    Input,
    Button,
    // Card,
    CardHeader,
    // Col,
    Modal,
    ModalBody,
    ModalHeader,
    // Row,
    Container,
    //Jumbotron
} from 'reactstrap';

import APIResponseErrorMessage from "../commons/errorhandling/api-response-error-message";
// import HomeForm from "./components/home-form";
// import * as API_HOME from "./api/home-api"
// import UserCookie from "../userCookie";


import { useState } from 'react'
import despreNoiContact1 from "../commons/images/despreNoiContact1.jpg";
import titleScreenRight from "../commons/images/titleScreenRight.svg"
import inchirieri1 from "../commons/images/vanzare1.png";
// import titleScreenRight from "../commons/images/titleScreenRight.svg";
import garsonieraBackground from "../commons/images/garsonieraBackground.png"
import apartamentBackground from "../commons/images/apartamentBackground.png"
import casaBackground from "../commons/images/casaBackground.png"
import submeniu1 from "../commons/images/submeniu1.png"
import battery1 from "../commons/images/battery1.svg"
import battery2 from "../commons/images/battery2.svg"
import battery3 from "../commons/images/battery3.svg"

//Apartamente:
import Cluj_Napoca_Cluj1_I from "../commons/images/Cluj_Napoca_Cluj1_I.png"

//Case:
import Cluj_Napoca_Cluj2_I from "../commons/images/Cluj_Napoca_Cluj2_I.png"
import Cluj_Napoca_Cluj3_I from "../commons/images/Cluj_Napoca_Cluj3_I.png"

//Garsoniere:
import Cluj_Napoca_Cluj4_I from "../commons/images/Cluj_Napoca_Cluj4_I.png"
import Cluj_Napoca_Cluj5_I from "../commons/images/Cluj_Napoca_Cluj5_I.png"

import {
    Card,
    Grid,
    Row,
    Col,
    Text
} from "@nextui-org/react";


export default function InchirieriContainer() {


    const dictionaryForImports = {
        "Cluj_Napoca_Cluj1_I" : { import: Cluj_Napoca_Cluj1_I },
        "Cluj_Napoca_Cluj2_I" : { import: Cluj_Napoca_Cluj2_I },
        "Cluj_Napoca_Cluj3_I" : { import: Cluj_Napoca_Cluj3_I },
        "Cluj_Napoca_Cluj4_I" : { import: Cluj_Napoca_Cluj4_I },
        "Cluj_Napoca_Cluj5_I" : { import: Cluj_Napoca_Cluj5_I },
    }


    const garsoniereList = [
        // {
        //     img: garsonieraI1,
        //     text1: ["Garsoniera: 20 m^2 | 1 camera;"],
        //     text2: ["Locatie: Cluj-Napoca | Cluj;"],
        //     text3: ["Pret: 1500 RON / Luna;"],
        // },
        // {
        //     img: garsonieraI2,
        //     text1: ["Garsoniera: 25 m^2 | 1 camera;"],
        //     text2: ["Locatie: Cluj-Napoca | Cluj;"],
        //     text3: ["Pret: 2000 RON / Luna;"],
        // },
    ];




    const apartamenteList = [
        // {
        //     img: apartamentI1,
        //     text1: ["Apt: 45 m^2 | 1 camera;"],
        //     text2: ["Locatie: Dej | Cluj;"],
        //     text3: ["Pret: 1800 RON / Luna;"],
        // },
    ];




    const caseList = [
        // {
        //     img: casaI1,
        //     text1: ["Casa: 85 m^2 | 3 camere;"],
        //     text2: ["Locatie: Cluj-Napoca | Cluj;"],
        //     text3: ["Pret: 3500 RON / Luna;"],
        // },
        // {
        //     img: casaI2,
        //     text1: ["Casa: 76 m^2 | 2 camere;"],
        //     text2: ["Locatie: Cluj-Napoca | Cluj;"],
        //     text3: ["Pret: 2400 RON / Luna;"],
        // },
    ];




    return (
        // Initial:
        // <div>
        //    <h1 className = "inchirieri-header">INCHIRIERI</h1>
        // </div>

        <div className = "inchirieri">




            {/*Parte 0:*/}
            {/*Despre navbar:*/}
            <div
                className = "inchirieri-subMeniu"
            >

                {/*Buton 1:*/}
                <Button
                    className = "inchirieri-navbarButon1"
                    onClick =  {() =>
                        document.getElementById('garsoniere').scrollIntoView({behavior: "smooth"})
                    }
                >
                    Garsoniere
                </Button>

                {/*Icon 1:*/}
                <img src={battery1} className = "inchirieri-navbarIcon1"/>

                {/*Buton 2:*/}
                <Button
                    className = "inchirieri-navbarButon2"
                    onClick =  {() =>
                        document.getElementById('apartamente').scrollIntoView({behavior: "smooth"})
                    }
                >
                    Apartamente
                </Button>

                {/*Icon 2:*/}
                <img src={battery2} className = "inchirieri-navbarIcon2"/>

                {/*Buton 3:*/}
                <Button
                    className = "inchirieri-navbarButon3"
                    onClick =  {() =>
                        document.getElementById('case').scrollIntoView({behavior: "smooth"})
                    }
                >
                    Case
                </Button>

                {/*Icon 3:*/}
                <img src={battery3} className = "inchirieri-navbarIcon3"/>

                {/*Image:*/}
                <img
                    src={submeniu1}  alt = "Background Submeniu"
                    width = "100%" height = "100%"
                    style = {{
                        zIndex: "110",
                        marginBottom: "100vmax",
                    }}>
                </img>

            </div>




            {/*Parte 1:*/}
            <div>

                {/*Title text:*/}
                <p className="inchirieri-p1"> De inchiriat:  </p>

                {/*Title background:*/}
                <div className="inchirieri-divTitle"></div>

                {/*Title icon:*/}
                <img
                    src={titleScreenRight}
                    width={"20vmax"}
                    height={"20vmax"}
                    className = "inchirieri-iconTitle"
                />

                {/*Image:*/}
                <img src={inchirieri1}  alt = "Background Img 1"
                     width = "100%" height = "50%"
                     style = {{
                         opacity : "0.6",
                     }}>
                </img>
            </div>



            {/*Parte 2:*/}
            <div id = "garsoniere">




                {/*Lista de carduri:*/}
                <Grid.Container
                    style = {{
                        position: "absolute",
                        zIndex: "10",
                    }}
                >
                    {garsoniereList.map((garsoniera, index) => (
                        <Grid
                            key={index}>

                            <Card isPressable
                                  style = {{
                                      borderRadius: "6vmax 1vmax 1vmax 6vmax",
                                      width: "75vmax",
                                      height: "20.5vmax",
                                      marginLeft: "2vmax",
                                      marginTop: "5vmax",
                                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                                  }}
                                  onClick={() => alert("Mesaj 1 Test pentru Card!")}
                            >
                                <Card.Body
                                    css = {{
                                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                                        padding: "0",
                                    }}
                                >
                                    <Row
                                    >
                                        <Col
                                            css = {{
                                            }}
                                        >
                                            <Card.Image
                                                src={garsoniera.img}
                                                objectFit = "cover"
                                                style = {{
                                                }}
                                                alt={garsoniera.title} //Ups!
                                            />
                                        </Col>

                                        <Col
                                            xs={3}
                                            css = {{
                                            }}
                                        >
                                            <Row
                                                wrap="wrap" justify="space-between" align="center"
                                                style= {{
                                                    borderWidth: "0.5vmax 0.5vmax 0.25vmax 0.5vmax",
                                                    borderStyle: "solid",
                                                    borderColor: "black",
                                                    borderRadius: "0.5vmax",
                                                }}
                                            >
                                                <Text
                                                    css = {{
                                                        color: "white",
                                                        fontFamily: "Paprika",
                                                        fontSize: "2.25vmax",
                                                        zIndex: "2 !important",
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    {garsoniera.text1}
                                                </Text>
                                            </Row>

                                            <Row
                                                wrap="wrap" justify="space-between" align="center"
                                                style= {{
                                                    borderWidth: "0.25vmax 0.5vmax 0.25vmax 0.5vmax",
                                                    borderStyle: "solid",
                                                    borderColor: "black",
                                                    borderRadius: "0.5vmax",
                                                }}
                                            >
                                                <Text
                                                    css = {{
                                                        color: "white",
                                                        fontFamily: "Paprika",
                                                        fontSize: "2.25vmax",
                                                        zIndex: "2 !important",
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    {garsoniera.text2}
                                                </Text>
                                            </Row>

                                            <Row
                                                wrap="wrap" justify="space-between" align="center"
                                                style= {{
                                                    borderWidth: "0.25vmax 0.5vmax 0.5vmax 0.5vmax",
                                                    borderStyle: "solid",
                                                    borderColor: "black",
                                                    borderRadius: "0.5vmax",
                                                }}
                                            >
                                                <Text
                                                    css = {{
                                                        color: "white",
                                                        fontFamily: "Paprika",
                                                        fontSize: "2.25vmax",
                                                        zIndex: "2 !important",
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    {garsoniera.text3}
                                                </Text>
                                            </Row>
                                        </Col>

                                    </Row>
                                </Card.Body>
                            </Card>
                        </Grid>
                    ))}
                </Grid.Container>




                {/*Input search text field:*/}
                <Input
                    className = "inchirieri-searchTextField"
                    placeholder = "Search Here!"
                >
                    {/*Nothing*/}
                </Input>


                {/*Buton de search:*/}
                <Button
                    className = "inchirieri-searchButon"
                >
                    Search
                </Button>


                {/*Imaginea:*/}
                <img src={garsonieraBackground}  alt = "Background Garsoniera"
                     width = "100%" height = "50%"
                     style = {{
                         opacity: "0.8",
                         borderWidth: "0.8vmax 0 0.8vmax 0",
                         borderStyle: "solid",
                         borderColor: "#000000",
                         zIndex: "100",
                     }}>
                </img>
            </div>



            {/*Parte 3:*/}
            <div id = "apartamente">



                {/*Lista de carduri:*/}
                <Grid.Container
                    style = {{
                        position: "absolute",
                        zIndex: "10",
                    }}
                >
                    {apartamenteList.map((apartament, index) => (
                        <Grid
                            key={index}>

                            <Card isPressable
                                  style = {{
                                      borderRadius: "6vmax 1vmax 1vmax 6vmax",
                                      width: "75vmax",
                                      height: "20.5vmax",
                                      marginLeft: "2vmax",
                                      marginTop: "5vmax",
                                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                                  }}
                                  onClick={() => alert("Mesaj 2 Test pentru Card!")}
                            >
                                <Card.Body
                                    css = {{
                                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                                        padding: "0",
                                    }}
                                >
                                    <Row
                                    >
                                        <Col
                                            css = {{
                                            }}
                                        >
                                            <Card.Image
                                                src={apartament.img}
                                                objectFit = "cover"
                                                style = {{
                                                }}
                                                alt={apartament.title} //Ups!
                                            />
                                        </Col>

                                        <Col
                                            xs={3}
                                            css = {{
                                            }}
                                        >
                                            <Row
                                                wrap="wrap" justify="space-between" align="center"
                                                style= {{
                                                    borderWidth: "0.5vmax 0.5vmax 0.25vmax 0.5vmax",
                                                    borderStyle: "solid",
                                                    borderColor: "black",
                                                    borderRadius: "0.5vmax",
                                                }}
                                            >
                                                <Text
                                                    css = {{
                                                        color: "white",
                                                        fontFamily: "Paprika",
                                                        fontSize: "2.25vmax",
                                                        zIndex: "2 !important",
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    {apartament.text1}
                                                </Text>
                                            </Row>

                                            <Row
                                                wrap="wrap" justify="space-between" align="center"
                                                style= {{
                                                    borderWidth: "0.25vmax 0.5vmax 0.25vmax 0.5vmax",
                                                    borderStyle: "solid",
                                                    borderColor: "black",
                                                    borderRadius: "0.5vmax",
                                                }}
                                            >
                                                <Text
                                                    css = {{
                                                        color: "white",
                                                        fontFamily: "Paprika",
                                                        fontSize: "2.25vmax",
                                                        zIndex: "2 !important",
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    {apartament.text2}
                                                </Text>
                                            </Row>

                                            <Row
                                                wrap="wrap" justify="space-between" align="center"
                                                style= {{
                                                    borderWidth: "0.25vmax 0.5vmax 0.5vmax 0.5vmax",
                                                    borderStyle: "solid",
                                                    borderColor: "black",
                                                    borderRadius: "0.5vmax",
                                                }}
                                            >
                                                <Text
                                                    css = {{
                                                        color: "white",
                                                        fontFamily: "Paprika",
                                                        fontSize: "2.25vmax",
                                                        zIndex: "2 !important",
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    {apartament.text3}
                                                </Text>
                                            </Row>
                                        </Col>

                                    </Row>
                                </Card.Body>
                            </Card>
                        </Grid>
                    ))}
                </Grid.Container>



                {/*Input search text field:*/}
                <Input
                    className = "inchirieri-searchTextField"
                    placeholder = "Search Here!"
                >
                    {/*Nothing*/}
                </Input>


                {/*Buton de search:*/}
                <Button
                    className = "inchirieri-searchButon"
                >
                    Search
                </Button>

                {/*Imaginea:*/}
                <img src={apartamentBackground}  alt = "Background Apartament"
                     width = "100%" height = "50%"
                     style = {{
                         opacity: "0.8",
                         borderWidth: "0.8vmax 0 0.8vmax 0",
                         borderStyle: "solid",
                         borderColor: "#000000",
                         zIndex: "100",
                     }}>
                </img>
            </div>



            {/*Parte 4:*/}
            <div id = "case">





                {/*Lista de carduri:*/}
                <Grid.Container
                    style = {{
                        position: "absolute",
                        zIndex: "10",
                    }}
                >
                    {caseList.map((casa, index) => (
                        <Grid
                            key={index}>

                            <Card isPressable
                                  style = {{
                                      borderRadius: "6vmax 1vmax 1vmax 6vmax",
                                      width: "75vmax",
                                      height: "20.5vmax",
                                      marginLeft: "2vmax",
                                      marginTop: "5vmax",
                                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                                  }}
                                  onClick={() => alert("Mesaj 3 Test pentru Card!")}
                            >
                                <Card.Body
                                    css = {{
                                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                                        padding: "0",
                                    }}
                                >
                                    <Row
                                    >
                                        <Col
                                            css = {{
                                            }}
                                        >
                                            <Card.Image
                                                src={casa.img}
                                                objectFit = "cover"
                                                style = {{
                                                }}
                                                alt={casa.title} //Ups!
                                            />
                                        </Col>

                                        <Col
                                            xs={3}
                                            css = {{
                                            }}
                                        >
                                            <Row
                                                wrap="wrap" justify="space-between" align="center"
                                                style= {{
                                                    borderWidth: "0.5vmax 0.5vmax 0.25vmax 0.5vmax",
                                                    borderStyle: "solid",
                                                    borderColor: "black",
                                                    borderRadius: "0.5vmax",
                                                }}
                                            >
                                                <Text
                                                    css = {{
                                                        color: "white",
                                                        fontFamily: "Paprika",
                                                        fontSize: "2.25vmax",
                                                        zIndex: "2 !important",
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    {casa.text1}
                                                </Text>
                                            </Row>

                                            <Row
                                                wrap="wrap" justify="space-between" align="center"
                                                style= {{
                                                    borderWidth: "0.25vmax 0.5vmax 0.25vmax 0.5vmax",
                                                    borderStyle: "solid",
                                                    borderColor: "black",
                                                    borderRadius: "0.5vmax",
                                                }}
                                            >
                                                <Text
                                                    css = {{
                                                        color: "white",
                                                        fontFamily: "Paprika",
                                                        fontSize: "2.25vmax",
                                                        zIndex: "2 !important",
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    {casa.text2}
                                                </Text>
                                            </Row>

                                            <Row
                                                wrap="wrap" justify="space-between" align="center"
                                                style= {{
                                                    borderWidth: "0.25vmax 0.5vmax 0.5vmax 0.5vmax",
                                                    borderStyle: "solid",
                                                    borderColor: "black",
                                                    borderRadius: "0.5vmax",
                                                }}
                                            >
                                                <Text
                                                    css = {{
                                                        color: "white",
                                                        fontFamily: "Paprika",
                                                        fontSize: "2.25vmax",
                                                        zIndex: "2 !important",
                                                        whiteSpace: "pre-wrap",
                                                    }}
                                                >
                                                    {casa.text3}
                                                </Text>
                                            </Row>
                                        </Col>

                                    </Row>
                                </Card.Body>
                            </Card>
                        </Grid>
                    ))}
                </Grid.Container>




                {/*Input search text field:*/}
                <Input
                    className = "inchirieri-searchTextField"
                    placeholder = "Search Here!"
                >
                    {/*Nothing*/}
                </Input>


                {/*Buton de search:*/}
                <Button
                    className = "inchirieri-searchButon"
                >
                    Search
                </Button>

                {/*Imaginea:*/}
                <img src={casaBackground}  alt = "Background Casa"
                     width = "100%" height = "50%"
                     style = {{
                         opacity: "0.8",
                         borderWidth: "0.8vmax 0 0.8vmax 0",
                         borderStyle: "solid",
                         borderColor: "#000000",
                         zIndex: "100",
                     }}>
                </img>
            </div>



            {/*Parte 5:*/}
            <div>

                {/*Image:*/}

                <div style = {{
                    // width: "50vmax",
                    height: "3vmax"}}>
                </div>

                <div>
                    <img src={despreNoiContact1}  alt = "Despre Noi Img"
                         width = "100%"
                         height = "20%"
                         style = {{
                             borderStyle: "solid",
                             borderColor: "#000000",
                             zIndex: "100"
                             ,}}>
                    </img>
                </div>

            </div>



        </div>
    );
}





