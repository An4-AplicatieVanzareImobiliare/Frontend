import React, {useContext, useEffect} from 'react';
import './vanzari-container.css';
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
import * as API_VANZARI_CONTAINER from "./api/vanzari-api" //Si noile apis!
// import UserCookie from "../userCookie";
import { useState } from 'react'
import logo from "../commons/images/houseIcon.svg";
import {AppContext} from "../App";
import VanzariAdd from "./components/vanzari-form_add";
import VanzariUpdate from "./components/vanzari-form_update";
import VanzariDelete from "./components/vanzari-form_delete";
import ProgramareAdd from "./components/programare-form_add";
import LocationChartSelected from "./components/chartSelect";


//import { useState } from 'react'
import despreNoiContact1 from "../commons/images/despreNoiContact1.jpg"; //+ toate celelalte, ups;
// import logo from "../commons/images/houseIcon.svg";
import titleScreenLeft from "../commons/images/titleScreenLeft.svg"
// import backgroundImg1 from "../commons/images/backgroundImg1.png";
import vanzare1 from "../commons/images/vanzare1.png";
import backgroundImg2 from "../commons/images/backgroundImg2.png";
import garsonieraBackground from "../commons/images/garsonieraBackground.png"
import apartamentBackground from "../commons/images/apartamentBackground.png"
import casaBackground from "../commons/images/casaBackground.png"
import submeniu1 from "../commons/images/submeniu1.png"
// import backgroundPhoneIcon2 from "../commons/images/phoneIcon.svg";
import battery1 from "../commons/images/battery1.svg"
import battery2 from "../commons/images/battery2.svg"
import battery3 from "../commons/images/battery3.svg"
// import React, { useLayoutEffect, useState } from 'react';

//Importurile iau numele linkurilor:
//- problema, _ nu:

import WhiteBackground from "../commons/images/backgroundWhite.jpeg"

//Apartamente:
import Cluj_Napoca_Cluj1_V from "../commons/images/Cluj_Napoca_Cluj1_V.png"
import Cluj_Napoca_Cluj2_V from "../commons/images/Cluj_Napoca_Cluj2_V.png"
import Cluj_Napoca_Cluj3_V from "../commons/images/Cluj_Napoca_Cluj3_V.png"

//Case:
import Cluj_Napoca_Cluj4_V from "../commons/images/Cluj_Napoca_Cluj4_V.png"
import Cluj_Napoca_Cluj5_V from "../commons/images/Cluj_Napoca_Cluj5_V.png";

//Garsoniere:
import Cluj_Napoca_Cluj6_V from "../commons/images/Cluj_Napoca_Cluj6_V.png"
import Cluj_Napoca_Cluj7_V from "../commons/images/Cluj_Napoca_Cluj7_V.png"
import Cluj_Napoca_Cluj8_V from "../commons/images/Cluj_Napoca_Cluj8_V.png"

import {
    Card,
    Grid,
    Row,
    Col,
    Text
} from "@nextui-org/react";


// let hiddenSideBar = false;
// let hiddenSideBar = true;



//1)
// function useWindowSize() {
//     const [size, setSize] = useState([0, 0]);
//     useLayoutEffect(() => {
//         function updateSize() {
//             setSize([window.innerWidth, window.innerHeight]);
//         }
//         window.addEventListener('resize', updateSize);
//         updateSize();
//         return () => window.removeEventListener('resize', updateSize);
//     }, []);
//     return size;
// }
//
// function ShowWindowDimensions(props) {
//     const [width, height] = useWindowSize();
//     return <span>Window size: {width} x {height}</span>;
//}



export default function VanzariContainer() {


    // let hiddenSideBar = false;
    // let hiddenSideBar = true;

    //2)
    // window.addEventListener('resize', function() {
    //     hiddenSideBar = true;
    // });

    //3)
    // window.addEventListener('resize', function() {
    //          hiddenSideBar = true;
    //     });


    //Pentru modale add, update, delete:
    const [selectAdd, setSelectAdd] = useState(false);
    const [selectUpdate, setSelectUpdate] = useState(false);
    const [selectDelete, setSelectDelete] = useState(false);
    const [selectAddProgramare, setSelectAddProgramare] = useState(false);
    const [selectChart, setSelectChart] = useState(false);

    //Pentru afisarea butoanelor adminului:
    //Tot admin crud folosesc si pentru client, prost nume:
    const [adminCRUD, setAdminCRUD] = useState(<div></div>);
    //const [clientCRUD, setClientCRUD] = useState(<div></div>);


    //Pentru a lua importurile, am nevoie de maparea lor cu stringul, altfel nu merge;
    //Annoying:
    const dictionaryForImports = {
        "Cluj_Napoca_Cluj1_V" : { import: Cluj_Napoca_Cluj1_V },
        "Cluj_Napoca_Cluj2_V" : { import: Cluj_Napoca_Cluj2_V },
        "Cluj_Napoca_Cluj3_V" : { import: Cluj_Napoca_Cluj3_V },
        "Cluj_Napoca_Cluj4_V" : { import: Cluj_Napoca_Cluj4_V },
        "Cluj_Napoca_Cluj5_V" : { import: Cluj_Napoca_Cluj5_V },
        "Cluj_Napoca_Cluj6_V" : { import: Cluj_Napoca_Cluj6_V },
        "Cluj_Napoca_Cluj7_V" : { import: Cluj_Napoca_Cluj7_V },
        "Cluj_Napoca_Cluj8_V" : { import: Cluj_Napoca_Cluj8_V },
    }
    //const ex = dictionary['exI'].image;


    //Pentru afisare luna:
    const monthNames = ["January", "February", "March",
                        "April", "May", "June", "July",
                        "August", "September", "October",
                        "November", "December"];
    //Luat index luna curenta si salvat in variabila de jos;
    let monthIndex = new Date().getMonth();
    let monthName = monthNames[monthIndex];



    //Pentru setare liste:
    const [gList, setGList] = useState([]);
    const [aList, setAList] = useState([]);
    const [cList, setCList] = useState([]);


    // <br/>,
    const garsoniereList = [
        // {
        //     img: garsonieraV1,
        //     text1: ["Garsoniera: 30 m^2 | 1 camera;"],
        //     text2: ["Locatie: Cluj-Napoca | Cluj;"],
        //     text3: ["Pret: 300.000 RON;"],
        // },
        // {
        //     img: garsonieraV2,
        //     text1: ["Garsoniera: 35 m^2 | 1 camera;"],
        //     text2: ["Locatie: Cluj-Napoca | Cluj;"],
        //     text3: ["Pret: 355.000 RON;"],
        // },
        // {
        //     img: garsonieraV3,
        //     text1: ["Garsoniera: 32 m^2 | 1 camera;"],
        //     text2: ["Locatie: Dej | Cluj;"],
        //     text3: ["Pret: 200.000 RON;"],
        // },
    ];



    const apartamenteList = [
        // {
        //     img: apartamentV1,
        //     text1: ["Apt: 50 m^2 | 2 camere;"],
        //     text2: ["Locatie: Cluj-Napoca | Cluj;"],
        //     text3: ["Pret: 450.000 RON;"],
        // },
        // {
        //     img: apartamentV2,
        //     text1: ["Apt: 50 m^2 | 2 camere;"],
        //     text2: ["Locatie: Cluj-Napoca | Cluj;"],
        //     text3: ["Pret: 400.000 RON;"],
        // },
        // {
        //     img: apartamentV3,
        //     text1: ["Apt: 55 m^2 | 3 camere;"],
        //     text2: ["Locatie: Cluj-Napoca | Cluj;"],
        //     text3: ["Pret: 500.000 RON;"],
        // },
    ];



    const caseList = [
        // {
        //     img: casaV1,
        //     text1: ["Casa: 80 m^2 | 3 camere;"],
        //     text2: ["Locatie: Apahida | Cluj;"],
        //     text3: ["Pret: 680.000 RON;"],
        // },
        // {
        //     img: casaV2,
        //     text1: ["Casa: 90 m^2 | 4 camere;"],
        //     text2: ["Locatie: Cluj-Napoca | Cluj;"],
        //     text3: ["Pret: 850.000 RON;"],
        // },
    ];


    //Nu se schimba lista dupa add programare, deci nu trebuie actualizat!!!
    const fetchVanzariData = () => {
        return API_VANZARI_CONTAINER.getVanzariData((result, status) => {

            //Daca avem datele:
            if (result !== null && status === 200)
            {
                //Faci listele sa fie goale pentru ca sa adaugi doar 1 data tot timpul:
                //Asa asiguri consistenta:
                setGList([]);
                setAList([]);
                setCList([]);

                //Pus datele in tabele:
                result.map((sale) =>
                {
                    //Merge aici:
                    //console.log("Sale location: " + sale.locatie + " !");

                    //In functie de tip, add to something:
                    if(sale.tip === "Garsoniera")
                    {
                        //Push in loc de set: Dupa set:
                        garsoniereList.push({

                            img: sale.locatie,
                            text1: ["Garsoniera: " + sale.metriPatrati + " m^2 | " +
                            sale.numarCamere + " camera;"],
                            text2: ["Locatie: " + sale.locatie + ";"],
                            text3: ["Pret: " + sale.pret + " RON;"],
                        });

                        //console.log("Garsoniera location: " + garsoniereList.at(0).text1 + " !");
                        //Set new list:
                        //Doar pentru activare:

                        // gList.push({
                        //     img: sale.locatie,
                        //     text1: ["Garsoniera: " + sale.metriPatrati + " m^2 | " +
                        //     sale.numarCamere + " camera;"],
                        //     text2: ["Locatie: " + sale.locatie + ";"],
                        //     text3: ["Pret: " + sale.pret + " RON;"],
                        // });
                        // console.log("Garsoniera location: " + gList.at(0).text1 + " !");
                        // setGList(gList);

                        //Metoda fara push:
                        //Asa se actualizeaza si pentru render!!!
                        setGList(gList => [...gList,
                            {
                                //img: sale.locatie,
                                img: dictionaryForImports[sale.locatie].import,
                                //Scos - din nume pentru a afisa imaginea corecta:
                                //img: sale.locatie.replace('-', ''),
                                //img: require("../commons/images/" + gList.locatie + ".png"),
                                text1: ["Garsoniera: " + sale.metriPatrati + " m^2 | " +
                                sale.numarCamere + " camera;"],
                                text2: ["Locatie: " + sale.locatie + ";"],
                                text3: ["Pret: " + sale.pret + " RON;"],
                            }
                        ]);

                        //console.log("Imagine: " + gList.at(0).img + " !");
                    }
                    else if(sale.tip === "Apartament")
                    {
                        apartamenteList.push({
                            img: sale.locatie,
                            text1: ["Apt: " + sale.metriPatrati + " m^2 | " +
                            sale.numarCamere + " camera;"],
                            text2: ["Locatie: " + sale.locatie + ";"],
                            text3: ["Pret: " + sale.pret + " RON;"],
                        });

                        //For change:

                        // aList.push({
                        //     img: sale.locatie,
                        //     text1: ["Apt: " + sale.metriPatrati + " m^2 | " +
                        //     sale.numarCamere + " camera;"],
                        //     text2: ["Locatie: " + sale.locatie + ";"],
                        //     text3: ["Pret: " + sale.pret + " RON;"],
                        // });
                        // console.log("Apartament location: " + aList.at(0).text1 + " !");
                        //Set new list:
                        // setAList(aList);

                        //Asa se actualizeaza si pentru render!!!
                        setAList(aList => [...aList,
                            {
                                //img: sale.locatie,
                                img: dictionaryForImports[sale.locatie].import,
                                //img: sale.locatie.replace('-', ''),
                                text1: ["Apt: " + sale.metriPatrati + " m^2 | " +
                                sale.numarCamere + " camera;"],
                                text2: ["Locatie: " + sale.locatie + ";"],
                                text3: ["Pret: " + sale.pret + " RON;"],
                            }
                        ]);
                    }
                    else if(sale.tip === "Casa")
                    {
                        caseList.push({
                            img: sale.locatie,
                            text1: ["Casa: " + sale.metriPatrati + " m^2 | " +
                            sale.numarCamere + " camera;"],
                            text2: ["Locatie: " + sale.locatie + ";"],
                            text3: ["Pret: " + sale.pret + " RON;"],
                        });

                        //For change:

                        // cList.push({
                        //     img: sale.locatie,
                        //     text1: ["Casa: " + sale.metriPatrati + " m^2 | " +
                        //     sale.numarCamere + " camera;"],
                        //     text2: ["Locatie: " + sale.locatie + ";"],
                        //     text3: ["Pret: " + sale.pret + " RON;"],
                        // });
                        // console.log("Casa location: " + cList.at(0).text1 + " !");
                        //Set new list:
                        // setCList(cList);

                        //Asa se actualizeaza si pentru render!!!
                        setCList(cList => [...cList,
                            {
                                //img: sale.locatie,
                                img: dictionaryForImports[sale.locatie].import,
                                //img: sale.locatie.replace('-', ''),
                                text1: ["Casa: " + sale.metriPatrati + " m^2 | " +
                                sale.numarCamere + " camera;"],
                                text2: ["Locatie: " + sale.locatie + ";"],
                                text3: ["Pret: " + sale.pret + " RON;"],
                            }
                        ]);
                    }
                })

            } else {
                //window.alert("No Sales Data!");
            }
        });
    }


    //Din context: Trebuie si Login pentru afisare div corect:
    const {metriPatrati, numarCamere, locatie, pret, tip,
           setMetriPatrati, setNumarCamere, setLocatie, setPret, setTip,
           isClient, setIsClient, isLoggedIn, setIsLoggedIn} = useContext(AppContext);


    //Set modal add:
    const toggleFormAdd = () => {
        setSelectAdd(!selectAdd);
        console.log("Add Form!");
    }

    //Set modal update:
    const toggleFormUpdate = () => {
        setSelectUpdate(!selectUpdate);
        console.log("Update Form!");
    }

    //Set modal add:
    const toggleFormDelete = () => {
        setSelectDelete(!selectDelete);
        console.log("Delete Form!");
    }

    //Set modal add programare:
    const toggleFormAddProgramare = () => {
        setSelectAddProgramare(!selectAddProgramare);
        console.log("Add Reservation Form!");
    }

    //Set modal see chart:
    const toggleFormChart = (location) => {
        setSelectChart(!selectChart);
        console.log("See Chart Form!");

        //Doar cand se deschide trimit, in rest nu apelez:
        if(selectChart === false)
        {
            //Test:
            //let locationName = location.split('/ ').pop().split(' .');
            let locationName = location.substr(14, 19);
            //let locationName = location;
            console.log("Current location: " + locationName + " !");

            //Pentru folosirea locatiei:
            //Nu exista in local storage inainte de asta:
            localStorage.setItem("locationChartSelected", locationName);
        }
        else if(selectChart === true)
        {
            //localStorage.getItem("isLoggedIn");
            localStorage.setItem("locationChartSelected", "No Location");
        }
    }

    //Pentru reload: Doar 1 din cele 3 o data!!!
    const reload = (addOrUpdateOrDelete) =>
    {
        //Pentru admin C, U, D vanzari:
        if(addOrUpdateOrDelete === 1)
        {
            toggleFormAdd();
        }
        else if(addOrUpdateOrDelete === 2)
        {
            toggleFormUpdate();
        }
        else if(addOrUpdateOrDelete === 3)
        {
            toggleFormDelete();
        }

        //Pentru client add program:
        else if(addOrUpdateOrDelete === 4)
        {
            toggleFormAddProgramare();
        }

        //Pentru oricine, chart modala:
        else if(addOrUpdateOrDelete === 5)
        {
            toggleFormChart();
        }
    }


    //Si la admin, Si la client:
    const getLastSelected = (gac, tipCurrent) =>
    {
        //La apelare onclick, se selecteaza data:

        //Doar daca este logged in se selecteaza ceva:
        if(isLoggedIn === "true")
        {
            //Stip din texte:
            //Inapoi convertit: Din lista in String:
            setMetriPatrati(parseInt(gac.text1.toString().split(': ').pop().split(' m')[0]));
            setNumarCamere(parseInt(gac.text1.toString().split('| ').pop().split(' c')[0]));
            setLocatie(gac.text2.toString().split(': ').pop().split(' ;')[0].toString());
            setPret(parseInt(gac.text3.toString().split(': ').pop().split(' R')[0]));
            setTip(tipCurrent);

            //Exemplu:
            // text1: ["Casa: " + sale.metriPatrati + " m^2 | " +
            // sale.numarCamere + " camera;"],
            //     text2: ["Locatie: " + sale.locatie + ";"],
            // text3: ["Pret: " + sale.pret + " RON;"],

            //Salvat in local storage:
            //Trebuie pus din resultat nu din context!
            localStorage.setItem("metriPatrati", parseInt(gac.text1.toString().split(': ').pop().split(' m')[0]));
            localStorage.setItem("numarCamere", parseInt(gac.text1.toString().split('| ').pop().split(' c')[0]));
            localStorage.setItem("locatie", gac.text2.toString().split(': ').pop().split(';')[0].toString());
            localStorage.setItem("pret", parseInt(gac.text3.toString().split(': ').pop().split(' R')[0]));
            localStorage.setItem("tip", tipCurrent);

            // console.log("Testul: " +
            //     localStorage.getItem("metriPatrati") + ",  " +
            // localStorage.getItem("numarCamere") + ",  " +
            // localStorage.getItem("locatie") + ",  " +
            // localStorage.getItem("pret") + ",  " +
            // localStorage.getItem("tip") + " ;"
            // );
        }
    }


    //Get pentru date: Ca si Use Effect!
    useEffect(() => {
        //Add to lists:

        //Set data for vanzari: Reset kinda!
            setMetriPatrati(localStorage.getItem("metriPatrati"));
            setNumarCamere(localStorage.getItem("numarCamere"));
            setLocatie(localStorage.getItem("locatie"));
            setPret(localStorage.getItem("pret"));
            setTip(localStorage.getItem("tip"));

        //Daca suntem admin, atunci vedem butoanele de crud!!!
        //Daca este admin + logat:
        if(isClient === "false" && isLoggedIn === "true")
        {
            //Atunci nu afisez Update: Daca este egal, nu afisez:
            if(localStorage.getItem("locatie") !== "-")
            {
                setAdminCRUD(
                    <div>
                        <p className="vanzari-location"> Selected Location: {locatie} ; </p>

                        {/*Add:*/}
                        <Button
                            className = "vanzari-addStyle"
                            onClick={toggleFormAdd}
                        >
                            Add Location
                        </Button>

                        {/*Update:*/}
                        <Button
                            className = "vanzari-updateStyle"
                            onClick={toggleFormUpdate}
                        >
                            Update Location
                        </Button>

                        {/*Delete:*/}
                        <Button
                            className = "vanzari-deleteStyle"
                            onClick={toggleFormDelete}
                        >
                            Delete Location
                        </Button>

                        {/*Pentru ca butoanele sa se vada:*/}
                        <div>
                            <img src={WhiteBackground}  alt = "White Background Img"
                                 width = "100%"
                                 height = "20%"
                                 style = {{
                                     borderStyle: "solid",
                                     borderColor: "#000000",
                                     zIndex: "100"
                                     ,}}>
                            </img>
                        </div>
                    </div>);
            }
            else if(localStorage.getItem("locatie") === "-")
            {
                setAdminCRUD(
                    <div>
                        <p className="vanzari-location"> Selected Location: {locatie} ; </p>

                        {/*Add:*/}
                        <Button
                            className = "vanzari-addStyle"
                            onClick={toggleFormAdd}
                        >
                            Add Location
                        </Button>

                        {/*Pentru ca butoanele sa se vada:*/}
                        <div>
                            <img src={WhiteBackground}  alt = "White Background Img"
                                 width = "100%"
                                 height = "20%"
                                 style = {{
                                     borderStyle: "solid",
                                     borderColor: "#000000",
                                     zIndex: "100"
                                     ,}}>
                            </img>
                        </div>
                    </div>);
            }
        }
        //Daca este client + logat:
        else if(isClient === "true" && isLoggedIn === "true")
        {
            if(localStorage.getItem("locatie") !== "-")
            {
                setAdminCRUD(
                    <div>

                        {/*Exact la fel:*/}
                        <p className="vanzari-location"> Selected Location: {locatie} ; </p>

                        {/*Ca update, sa fie pe mijloc:*/}
                        {/*Add Programare:*/}
                        <Button
                            className = "programare-addStyle"
                            onClick={toggleFormAddProgramare}
                        >
                            Add Reservation
                        </Button>

                        {/*Pentru ca butoanele sa se vada: La fel ca la admin, same ideea:*/}
                        <div>
                            <img src={WhiteBackground}  alt = "White Background Img"
                                 width = "100%"
                                 height = "20%"
                                 style = {{
                                     borderStyle: "solid",
                                     borderColor: "#000000",
                                     zIndex: "100"
                                     ,}}>
                            </img>
                        </div>

                    </div>);
            }
            else if(localStorage.getItem("locatie") === "-")
            {
                setAdminCRUD(
                    <div>

                        {/*Exact la fel:*/}
                        <p className="vanzari-location"> Selected Location: {locatie} ; </p>

                        {/*Pentru ca butoanele sa se vada: La fel ca la admin, same ideea:*/}
                        <div>
                            <img src={WhiteBackground}  alt = "White Background Img"
                                 width = "100%"
                                 height = "20%"
                                 style = {{
                                     borderStyle: "solid",
                                     borderColor: "#000000",
                                     zIndex: "100"
                                     ,}}>
                            </img>
                        </div>

                    </div>);
            }
        }
        //Daca nu este logat: Nu conteaza ce rol are:
        else if(isLoggedIn === "false")
        {
            setAdminCRUD(
                <div>
                </div>);
        }

        fetchVanzariData();
    }
    // Nu si logare; Ajuta toggle pentru ca dupa toggle off vrei refresh la pagina!
    //, [gList, aList, cList]);
    , [selectAdd, selectUpdate, selectDelete, selectAddProgramare, selectChart, isClient, isLoggedIn, locatie]); //Merge doar o data;
    // , );


    return (
        // Initial:
        // <div>
        //    <h1 className = "vanzari-header">VANZARI</h1>
        // </div>

        <div className = "vanzari">



            {/*Parte 0:*/}
            {/*Despre navbar:*/}
            <div
            className = "vanzari-subMeniu"
            // hidden={hiddenSideBar}
            // hidden="true"
            >

                {/*Buton 1:*/}
                <Button
                    className = "vanzari-navbarButon1"
                    onClick =  {() =>
                        document.getElementById('garsoniere').scrollIntoView({behavior: "smooth"})
                }
                >
                    Garsoniere
                </Button>

                {/*Icon 1:*/}
                <img src={battery1} className = "vanzari-navbarIcon1"/>

                {/*Buton 2:*/}
                <Button
                    className = "vanzari-navbarButon2"
                    onClick =  {() =>
                        document.getElementById('apartamente').scrollIntoView({behavior: "smooth"})
                    }
                >
                    Apartamente
                </Button>

                {/*Icon 2:*/}
                <img src={battery2} className = "vanzari-navbarIcon2"/>

                {/*Buton 3:*/}
                <Button
                    className = "vanzari-navbarButon3"
                    onClick =  {() =>
                        document.getElementById('case').scrollIntoView({behavior: "smooth"})
                    }
                >
                    Case
                </Button>

                {/*Icon 3:*/}
                <img src={battery3} className = "vanzari-navbarIcon3"/>

                {/*Image:*/}
                <img
                    src={submeniu1}  alt = "Background Submeniu"
                    width = "100%" height = "100%"
                    style = {{
                        // opacity : "0.6",
                        zIndex: "110",
                        marginBottom: "100vmax",
                        // marginLeft: "60vmax",
                        // marginRight: "5vmax",
                    }}>
                </img>

            </div>



            {/*Parte 1:*/}
            <div>

                {/*Title text:*/}
                <p className="vanzari-p1"> De vanzare:  </p>

                {/*Title background:*/}
                <div className="vanzari-divTitle"></div>

                {/*Title icon:*/}
                <img
                    src={titleScreenLeft}
                    width={"20vmax"}
                    height={"20vmax"}
                    className = "vanzari-iconTitle"
                />

                {/*Image:*/}
                <img src={vanzare1}  alt = "Background Img 1"
                     width = "100%" height = "50%"
                     style = {{
                         opacity : "0.6",
                     }}>
                </img>
            </div>



            {/*Partea cu butoane admin: Daca este admin!!!*/}
            <div>

                {/*Add modala:*/}
                <Modal
                    isOpen={selectAdd}
                    toggle={toggleFormAdd}
                    size="lg"
                    style = {{borderRadius: "20% !important"}}
                >
                    <ModalHeader
                        style={{backgroundColor: '#98b9ec',
                            textAlign: "center",
                            paddingLeft: "45%",}}
                        toggle={toggleFormAdd}>
                        <strong>
                            Add Location:
                        </strong>
                    </ModalHeader>

                    <ModalBody
                        style={{backgroundColor: '#98b9ec'}}
                    >
                        <VanzariAdd
                            reloadHandler={() => reload(1)}
                        />
                    </ModalBody>
                </Modal>


                {/*Update modala:*/}
                <Modal
                    isOpen={selectUpdate}
                    toggle={toggleFormUpdate}
                    size="lg"
                    style = {{borderRadius: "20% !important"}}
                >
                    <ModalHeader
                        style={{backgroundColor: '#98b9ec',
                            textAlign: "center",
                            paddingLeft: "45%",}}
                        toggle={toggleFormUpdate}>
                        <strong>
                            Update Location:
                        </strong>
                    </ModalHeader>

                    <ModalBody
                        style={{backgroundColor: '#98b9ec'}}
                    >
                        <VanzariUpdate
                            reloadHandler={() => reload(2)}
                        />
                    </ModalBody>
                </Modal>


                {/*Delete modala:*/}
                <Modal
                    isOpen={selectDelete}
                    toggle={toggleFormDelete}
                    size="lg"
                    style = {{borderRadius: "20% !important"}}
                >
                    <ModalHeader
                        style={{backgroundColor: '#98b9ec',
                            textAlign: "center",
                            paddingLeft: "45%",}}
                        toggle={toggleFormDelete}>
                        <strong>
                            Delete Location:
                        </strong>
                    </ModalHeader>

                    <ModalBody
                        style={{backgroundColor: '#98b9ec'}}
                    >
                        <VanzariDelete
                            reloadHandler={() => reload(3)}
                        />
                    </ModalBody>
                </Modal>


                {/*Add programare:*/}
                <Modal
                    isOpen={selectAddProgramare}
                    toggle={toggleFormAddProgramare}
                    size="lg"
                    style = {{borderRadius: "20% !important"}}
                >
                    <ModalHeader
                        style={{backgroundColor: '#98b9ec',
                            textAlign: "center",
                            paddingLeft: "45%",
                        }}
                        toggle={toggleFormAddProgramare}>
                        <strong>
                            Add Reservation:
                        </strong>
                    </ModalHeader>

                    <ModalBody
                        style={{
                            backgroundColor: '#98b9ec',
                            paddingBottom: "2vmax",
                    }}
                    >
                        <ProgramareAdd
                            reloadHandler={() => reload(4)}
                        />
                    </ModalBody>
                </Modal>


                {/*Chart modala:*/}
                <Modal
                    isOpen={selectChart}
                    toggle={toggleFormChart}
                    size="lg"
                    style = {{borderRadius: "20% !important"}}
                >
                    <ModalHeader
                        style={{backgroundColor: '#98b9ec',
                            textAlign: "center",
                            paddingLeft: "30%",
                            fontSize: "2vmax",
                        }}
                        toggle={toggleFormChart}>
                        <strong>
                            Chart For Location: ( For month {monthName} ! )
                        </strong>
                    </ModalHeader>

                    <ModalBody
                        style={{backgroundColor: '#98b9ec'}}
                    >
                        <LocationChartSelected
                            reloadHandler={() => reload(5)}
                        />
                    </ModalBody>
                </Modal>

                {/*Si pentru client, si pentru admin, gol daca nu esti logat:*/}
                {adminCRUD}

            </div>




            {/*Parte 2:*/}
            <div id = "garsoniere">





                {/*Lista de carduri:*/}
                <Grid.Container
                    // gap={2}
                    // justify="flex-start"
                    style = {{
                        position: "absolute",
                        zIndex: "10",
                        // marginLeft: "1.5vmax",
                        // marginTop: "4vmax",
                    }}
                >
                    {gList.map((garsoniera, index) => (
                        <Grid
                            // Nu stiu ce fac, merge fara:
                        // xs={6}
                        // sm={3}
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
                                  // onClick={() => alert("Mesaj 1 Test pentru Card!")}
                                onClick = {() => getLastSelected(garsoniera, "Garsoniera")}
                            >
                                <Card.Body
                                    css = {{
                                        // color: "black",
                                        // borderRadius: "6vmax 0vmax 0vmax 6vmax",
                                        // backgroundColor: "rgba(20, 75, 182, 0.6)",
                                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                                        // backggroundColor: "black",
                                        // opacity: "0.4",
                                        padding: "0",
                                    }}
                                >
                                    <Row
                                        // css = {{
                                        //     width: "100%",
                                        //     height: "100%",
                                        // }}
                                    >
                                        <Col
                                            // xs={10}
                                            css = {{
                                                // marginTop: "1.25vmax",
                                            }}
                                        >
                                            <Card.Image
                                                src={garsoniera.img}
                                                objectFit = "cover"
                                                // width="100% !important"
                                                // height="100% !important"
                                                style = {{
                                                    // height: "150%",
                                                    // display: "inline-block",
                                                    // float: "right",
                                                }}
                                                alt={garsoniera.title}
                                            />
                                        </Col>

                                        <Col
                                            xs={3}
                                            css = {{
                                                // backgroundColor: "rgba(0, 0, 0, 0.4)",
                                                // backgroundColor: "black",
                                                // opacity: "0.4",
                                                // borderWidth: "1vmax 1vmax 1vmax 1vmax",
                                                // borderStyle: "solid",
                                                // borderColor: "black",
                                            }}
                                        >
                                            <Row
                                                wrap="wrap" justify="space-between" align="center"
                                                style= {{
                                                    // borderWidth: "1vmax 1vmax 1vmax 1vmax !important",
                                                    // borderStyle: "solid !important",
                                                    // borderColor: "black !important",
                                                    borderWidth: "0.5vmax 0.5vmax 0.25vmax 0.5vmax",
                                                    borderStyle: "solid",
                                                    borderColor: "black",
                                                    // border: "solid black",
                                                    borderRadius: "0.5vmax",
                                                    // opacity: "1 !important"
                                                    // marginTop: "1vmax",
                                                    // height: "fit-content",
                                                    // height: "100%",
                                                }}
                                            >
                                            {/*<Row>*/}
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
                                                    // marginTop: "0.2vmax",
                                                    // height: "fit-content",
                                                    // height: "100%",
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
                                                    // marginTop: "0.2vmax",
                                                    // height: "fit-content",
                                                    // height: "100%",
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
                                {/*<br></br>*/}
                            </Card>

                            {/*<br></br>*/}

                            {/*Acum pentru buton:*/}
                            {/*Pot apela orice din garsoniera, de exemplu locatia! Aici este salvata ca imd!!!*/}
                            <Button
                                className = "programare-chartOnLocation"
                                onClick =  {() => toggleFormChart(garsoniera.img)
                                }
                            >
                                See Location Reservations
                            </Button>

                        </Grid>
                        ))}
                    {/*<br></br>*/}
                </Grid.Container>





                {/*Input search text field:*/}
                <Input
                    className = "vanzari-searchTextField"
                    placeholder = "Search Here!"
                >
                    {/*Nothing*/}
                </Input>


                {/*Buton de search:*/}
                <Button
                    className = "vanzari-searchButon"
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
                         // borderColor: "red",
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
                    {aList.map((apartament, index) => (
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
                                  // onClick={() => alert("Mesaj 2 Test pentru Card!")}
                                  onClick = {() => getLastSelected(apartament, "Apartament")}
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

                            {/*Second button:*/}
                            <Button
                                className = "programare-chartOnLocation"
                                onClick =  {() => toggleFormChart(apartament.img)
                                }
                            >
                                See Location Reservations
                            </Button>

                        </Grid>
                    ))}
                </Grid.Container>



                {/*Input search text field:*/}
                <Input
                    className = "vanzari-searchTextField"
                    placeholder = "Search Here!"
                >
                    {/*Nothing*/}
                </Input>


                {/*Buton de search:*/}
                <Button
                    className = "vanzari-searchButon"
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
                    {cList.map((casa, index) => (
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
                                  // onClick={() => alert("Mesaj 3 Test pentru Card!")}
                                  onClick = {() => getLastSelected(casa, "Casa")}
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

                            {/*Third button:*/}
                            <Button
                                className = "programare-chartOnLocation"
                                onClick =  {() => toggleFormChart(casa.img)
                                }
                            >
                                See Location Reservations
                            </Button>

                        </Grid>
                    ))}
                </Grid.Container>



                {/*Input search text field:*/}
                <Input
                    className = "vanzari-searchTextField"
                    placeholder = "Search Here!"
                >
                    {/*Nothing*/}
                </Input>


                {/*Buton de search:*/}
                <Button
                    className = "vanzari-searchButon"
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





