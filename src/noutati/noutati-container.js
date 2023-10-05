import React from 'react';
import './noutati-container.css';
// import BackgroundImg from '../commons/images/energy.jpeg';

// Card si Row este acum la celalalt card;
import {
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



// First Card:
// import {
//     MDBCard,
//     MDBCardBody,
//     MDBCardTitle,
//     MDBCardText,
//     MDBCardImage,
//     MDBBtn
// } from 'mdb-react-ui-kit';

// Second Card:
//

//Third Card:
import {
    Card,
    Grid,
    Row,
    Col,
    Text
} from "@nextui-org/react";


import { useState } from 'react'
import backgroundImg1 from "../commons/images/backgroundImg1.png";
import noutati1 from "../commons/images/noutati1.png"; //Ups; noutati!!!
import noutati2 from "../commons/images/noutati2.png";
import noutati3 from "../commons/images/noutati3.png";
import noutati4 from "../commons/images/noutati4.png";
import despreNoiContact1 from "../commons/images/despreNoiContact1.jpg";





export default function NoutatiContainer() {


    const cardItem1 =
        {
            title: ["     Martie 2023:"],
            img: noutati2,
            text: [
                <br/>,
                "       - Titlu: Apartament modern de 2 camere în zona centrală",
                <br/>, <br/>,
                "      - Descriere: Vă oferim spre vânzare un apartament modern de" +
                "2 camere situat într-o zonă privilegiată din centrul orașului." +
                "Apartamentul a fost recent renovat și dispune de finisaje" +
                "de calitate superioară.",
                <br/>, <br/>,
               "       - Apartamentul are o suprafață utilă de 60 de metri pătrați și este" +
                "compartimentat astfel: living, bucătărie, dormitor și baie." +
                "Livingul și dormitorul sunt luminoase și spațioase, cu geamuri mari" +
                "și vedere spre stradă. Bucătăria este complet utilată și mobilată, iar baia" +
                "are toate dotările necesare.",
                <br/>, <br/>,
                "      - Imobilul se află într-o zonă liniștită, cu acces facil la transportul în" +
                "comun, magazine, restaurante și alte facilități. Apartamentul este disponibil" +
                "imediat și este ideal pentru o familie sau pentru un cuplu tânăr care caută" +
                "un loc modern și confortabil de locuit.",
                <br/>, <br/>,
                "      - Prețul este de 120.000 de euro negociabil.",]
        };


    const cardItem2 =
        {
            title: ["     Februarie 2023:",],
            img: noutati3,
            text: [<br/>,
                "       - Apartament cu 2 camere, situat în cartierul Gheorgheni din Cluj-Napoca. " +
                "Proprietatea este situată la etajul 3 al unui bloc de 4 etaje și are o suprafață utilă " +
                "de 55 de metri pătrați. Apartamentul este complet mobilat și utilat și este perfect " +
                "pentru o familie sau pentru cei care doresc să locuiască într-o zonă liniștită și sigură.",
                <br/>, <br/>,
                "      - Apartamentul este compus dintr-un living spațios cu bucătărie deschisă, un dormitor " +
                "confortabil, o baie modernă și o terasă generoasă cu vedere panoramică. În plus," +
                " proprietatea dispune de o parcare subterană și o boxă de depozitare.",
                <br/>, <br/>,
                "       - Cartierul Gheorgheni este una dintre cele mai căutate zone din Cluj-Napoca, cu " +
                "acces facil la mijloacele de transport în comun, magazine, restaurante, școli și grădinițe." +
                " Prețul de vânzare este de 120.000 de euro negociabil.", ,]
        };


    const cardItem3 =
        {
            title: ["     Ianuarie 2023:"],
            img: noutati4,
            text: [<br/>,
                "       - Apartament nou, complet mobilat și utilat, disponibil pentru " +
                "închiriere în zona centrală a orașului Cluj-Napoca. Apartamentul este situat la " +
                "etajul 4 al unui bloc modern și beneficiază de o priveliște panoramică asupra orașului." +
                " Dispune de o cameră spațioasă cu pat dublu, o baie modernă cu cadă, un living generos " +
                "cu bucătărie open-space și balcon. Apartamentul este dotat cu aer condiționat, mașină" +
                " de spălat rufe, mașină de spălat vase și TV cu ecran plat. În prețul chiriei este" +
                " inclusă și o parcare subterană.",
                <br/>, <br/>,
                "       - Prețul lunar al chiriei este de 2000 lei, cu o garanție de două luni.",]
        };



    return (
        // Initial:
        // <div>
        //    <h1 className = "noutati-header">NOUTATI</h1>
        // </div>

        <div className = "noutati">



            {/*Parte 1:*/}
            <div>
                {/*Titlul:*/}
                <div className="noutati-divTitle"></div>

                <p className="noutati-p1"> Anunturi noi:  </p>

                {/*Text dreapta:*/}
                <p className = "noutati-p2">
                    &emsp;Anunturile sunt organizate in functie de luna,
                    pentru o mai usoara vizualizare a informatiilor actuale
                    <br></br>
                </p>

                <div className = "noutati-polygon1"></div>

                <div className = "noutati-polygon2"></div>

                <div className = "noutati-polygon3"></div>

                {/*Imaginea de fundal:*/}
                <img src={noutati1}  alt = "Background Img 1"
                     width = "100%" height = "50%" style = {{opacity : "0.6"}}>
                </img>
            </div>


            {/*Parte 2:*/}
            <div>

                <div style = {{
                    // width: "50vmax",
                    height: "3vmax"}}>
                </div>

                {/*Primul card:*/}

                {/*1)*/}
                {/*<MDBCard>*/}
                {/*    <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />*/}
                {/*    <MDBCardBody>*/}
                {/*        <MDBCardTitle>Card title</MDBCardTitle>*/}
                {/*        <MDBCardText>*/}
                {/*            Some quick example text to build on the card title and make up the bulk of the card's content.*/}
                {/*        </MDBCardText>*/}
                {/*        <MDBBtn href='#'>Button</MDBBtn>*/}
                {/*    </MDBCardBody>*/}
                {/*</MDBCard>*/}

                {/*2)*/}
                {/*<CCard className="mb-3" style={{ maxWidth: '540px' }}>*/}
                {/*    <CRow className="g-0">*/}
                {/*        <CCol md={4}>*/}
                {/*            <CCardImage src={React400Img} />*/}
                {/*        </CCol>*/}
                {/*        <CCol md={8}>*/}
                {/*            <CCardBody>*/}
                {/*                <CCardTitle>Card title</CCardTitle>*/}
                {/*                <CCardText>*/}
                {/*                    This is a wider card with supporting text below as a natural lead-in to additional*/}
                {/*                    content. This content is a little bit longer.*/}
                {/*                </CCardText>*/}
                {/*                <CCardText>*/}
                {/*                    <small className="text-medium-emphasis">Last updated 3 mins ago</small>*/}
                {/*                </CCardText>*/}
                {/*            </CCardBody>*/}
                {/*        </CCol>*/}
                {/*    </CRow>*/}
                {/*</CCard>*/}

                <div className="noutati-divAnunt1"></div>

                {/*3)*/}
                <Card isPressable
                      style = {{
                          borderRadius: "6vmax 0vmax 0vmax 6vmax",
                      }}
                      onClick={() => alert("Mesaj 1 Test pentru Card!")}
                >

                    {/*Header:*/}
                    {/*<Card.Header*/}
                    {/*    className = "noutati-cardHeader1">*/}
                    {/*</Card.Header>*/}

                    {/*Body:*/}
                    <Card.Body
                        // className = "noutati-cardBody1"
                        css = {{
                            color: "black",
                            borderRadius: "6vmax 0vmax 0vmax 6vmax",
                            backgroundColor: "rgba(20, 75, 182, 0.6)",
                            padding: "0",
                            // backgroundColor: "#144BB6",
                            // opacity: "0.6",
                        }}
                    >
                        {/*<Row wrap="wrap" justify="space-between" align="center">*/}
                        <Row>

                            <Col xs={10}>

                                <Row wrap="wrap" justify="space-between" align="center">
                                {/*<Row>*/}
                                    {/*Titlu:*/}
                                    <Text
                                        css = {{
                                            color: "black",
                                            fontFamily: "Paprika",
                                            fontSize: "3.5vmax",
                                            zIndex: "2 !important",
                                            // whiteSpace: "nowrap",
                                            // whiteSpace: "wrap",
                                            whiteSpace: "pre-wrap",
                                        }}
                                    >
                                        {cardItem1.title}
                                    </Text>
                                </Row>

                                <Row wrap="wrap" justify="space-between" align="center">
                                {/*<Row>*/}
                                    {/*Text:*/}
                                    <Text
                                        css = {{
                                            color: "black",
                                            fontFamily: "Paprika",
                                            fontSize: "1.1vmax",
                                            width: "40vmax",
                                            // whiteSpace: "nowrap",
                                            // whiteSpace: "wrap",
                                            whiteSpace: "pre-wrap",
                                            marginLeft: "3vmax",
                                        }}
                                        // className = "noutati-cardText1"
                                    >
                                        {cardItem1.text}
                                    </Text>
                                </Row>
                            </Col>

                            <Col
                                xs={10}
                                css = {{
                                    marginTop: "3.3vmax",
                                    // height: "100%",
                                    // marginBottom: "2.75vmax",
                                    // position: "fixed",
                                    // alignContent: "center",
                                    // marginTop: "2.75vmax",
                                    // top: "2vmax",
                                    // bottom: "2vmax",
                                    // top: "20%",
                                    // bottom: "20%",
                                }}
                            >
                                <Card.Image
                                    src={cardItem1.img}
                                    // height={1000}
                                    objectFit = "cover"
                                    // objectFit = "fill"
                                    // objectFit = "contain"
                                    width="100%"
                                    height="100%"
                                    // height="inherit"
                                    // height="150%"
                                    // padding="0 !important"
                                    alt={cardItem1.title}
                                />
                            </Col>

                        </Row>

                    </Card.Body>

                </Card>

            </div>


            {/*Parte 3:*/}
            <div>

                <div style = {{
                    // width: "50vmax",
                    height: "3vmax"}}>
                </div>

                {/*Al doilea card:*/}


                <div className="noutati-divAnunt2"></div>

                <Card isPressable
                      style = {{
                          borderRadius: "0vmax 6vmax 6vmax 0vmax",
                      }}
                    onClick={() => alert("Mesaj 2 Test pentru Card!")}
                >
                    <Card.Body
                        css = {{
                            color: "black",
                            borderRadius: "0vmax 6vmax 6vmax 0vmax",
                            backgroundColor: "rgba(20, 75, 182, 0.6)",
                            padding: "0",
                        }}
                    >
                        <Row>
                            <Col
                                xs={10}
                                css = {{
                                    marginTop: "0.7vmax",
                                }}
                            >
                                <Card.Image
                                    src={cardItem2.img}
                                    objectFit = "cover"
                                    width="100%"
                                    height="100%"
                                    alt={cardItem2.title}
                                />
                            </Col>

                            <Col xs={10}>
                                <Row wrap="wrap" justify="space-between" align="center">
                                    <Text
                                        css = {{
                                            color: "black",
                                            fontFamily: "Paprika",
                                            fontSize: "3.5vmax",
                                            zIndex: "2 !important",
                                            whiteSpace: "pre-wrap",
                                        }}
                                    >
                                        {cardItem2.title}
                                    </Text>
                                </Row>

                                <Row wrap="wrap" justify="space-between" align="center">
                                    <Text
                                        css = {{
                                            color: "black",
                                            fontFamily: "Paprika",
                                            fontSize: "1.1vmax",
                                            width: "40vmax",
                                            whiteSpace: "pre-wrap",
                                            marginLeft: "3vmax",
                                        }}
                                    >
                                        {cardItem2.text}
                                    </Text>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>


            </div>


            {/*Parte 4:*/}
            <div>

                <div style = {{
                    // width: "50vmax",
                    height: "3vmax"}}>
                </div>

                {/*Al treilea card:*/}



                <div className="noutati-divAnunt3"></div>

                <Card isPressable
                    style = {{
                        borderRadius: "6vmax 0vmax 0vmax 6vmax",
                    }}
                    onClick={() => alert("Mesaj 3 Test pentru Card!")}
                >
                    <Card.Body
                        css = {{
                            color: "black",
                            borderRadius: "6vmax 0vmax 0vmax 6vmax",
                            backgroundColor: "rgba(20, 75, 182, 0.6)",
                            padding: "0",
                        }}
                    >
                        <Row>
                            <Col xs={10}>
                                <Row wrap="wrap" justify="space-between" align="center">
                                    <Text
                                        css = {{
                                            color: "black",
                                            fontFamily: "Paprika",
                                            fontSize: "3.5vmax",
                                            zIndex: "2 !important",
                                            whiteSpace: "pre-wrap",
                                        }}
                                    >
                                        {cardItem3.title}
                                    </Text>
                                </Row>

                                <Row wrap="wrap" justify="space-between" align="center">
                                    <Text
                                        css = {{
                                            color: "black",
                                            fontFamily: "Paprika",
                                            fontSize: "1.1vmax",
                                            width: "40vmax",
                                            whiteSpace: "pre-wrap",
                                            marginLeft: "3vmax",
                                        }}
                                    >
                                        {cardItem3.text}
                                    </Text>
                                </Row>
                            </Col>

                            <Col
                                xs={10}
                                css = {{
                                    // marginTop: "2.75vmax",
                                }}
                            >
                                <Card.Image
                                    src={cardItem3.img}
                                    objectFit = "cover"
                                    width="100%"
                                    height="100%"
                                    alt={cardItem3.title}
                                />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>



            </div>


            {/*Parte 5:*/}
            <div>
                {/*Imagine:*/}

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


        </div>
    );
}





