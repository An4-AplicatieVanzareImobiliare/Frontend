import React, {useContext, useEffect} from 'react';
import {AppContext} from "../../App";
import Button from "react-bootstrap/Button";
import {Col, Row} from "reactstrap";
import { FormGroup, Input, Label} from 'reactstrap';
import { withRouter } from "react-router-dom";
//import validateVanzari from "./validators/vanzari-validators";
import * as API_LOCATION_CHART_SELECTED from "../api/vanzari-api";
import {getAllProgramariForImobil} from "../api/vanzari-api";
import Chart from 'react-apexcharts'


//Chart select:
class LocationChartSelected extends React.Component
{
    constructor(props) {
        super(props);


        //Ramani:
        //this.toggleChart = this.toggleChart.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.reloadHandler = this.props.reloadHandler;
        this.getLocationData = this.getLocationData.bind(this);



        //State:
        this.state = {
            //formIsValid: false,

            //Pentru Chart:
            locationChart : {
                options: {
                    //Titlu:
                    chart: {
                        id: 'Location Chart'
                    },
                    //Zilele: (Ox)
                    xaxis: {
                        categories: []
                    }
                },
                series: [{
                    //Numar de rezervari: (Oy)
                    name: 'NumberOfReservations',
                    data: []
                }]
            }

        };



        //Nu exista change la inputs sau buton de submit:
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        //Pentru Chart:
        this.handleChart = this.handleChart.bind(this);



        //Daca avem data in localstorage, selecteaza pentru ea:
        if(localStorage.getItem("locationChartSelected") !== "No Location")
        {
            //Setare date graf in get:
            //Apel get:
            //Luat data din local storage:
            let locationChartSelected = localStorage.getItem("locationChartSelected");
            this.getLocationData(locationChartSelected);

        }
        else
        {
            //Nothing;
        }
    }


    //Ramane la fel:
    //Toggle: apelat in spate?
    toggleForm() {
        this.setState({collapseForm: !this.state.collapseForm});
    }



    //Pentru Chart:
    //Set la intregul chart:
    handleChart(locationChart) {
        this.setState({
            locationChart: locationChart
        });
    }



    //Verificari pentru change:
    // handleChange = event => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     const updatedControls = this.state.formControls;
    //     const updatedFormElement = updatedControls[name];
    //
    //     updatedFormElement.value = value;
    //     updatedFormElement.touched = true;
    //     updatedFormElement.valid = validateVanzari(value, updatedFormElement.validationRules);
    //     updatedControls[name] = updatedFormElement;
    //
    //     let formIsValid = true;
    //     for (let updatedFormElementName in updatedControls) {
    //         formIsValid = updatedControls[updatedFormElementName].valid && formIsValid;
    //
    //         //console.log(value);
    //         console.log(updatedControls[updatedFormElementName].valid);
    //     }
    //
    //     // Set state:
    //     this.setState({
    //         formControls: updatedControls,
    //         formIsValid: formIsValid
    //     });
    // };



    //Alte submit:
    // handleSubmit(metriPatrati, numarCamere, locatie, pret, tip)
    // {
    //     let updateVanzare = {
    //         metriPatrati: this.state.formControls.metriPatrati.value,
    //         numarCamere: this.state.formControls.numarCamere.value,
    //         locatie: this.state.formControls.locatie.value,
    //         pret: this.state.formControls.pret.value,
    //         tip: this.state.formControls.tip.value,
    //     };
    //
    //     console.log(updateVanzare);
    //
    //     this.vanzariUpdate(updateVanzare, metriPatrati, numarCamere, locatie, pret, tip);
    // }



    //Update vanzare:
    getLocationData(locationChartSelected) {
        //imobilLocation = locationChartSelected;
        return API_LOCATION_CHART_SELECTED .getAllProgramariForImobil(locationChartSelected, (result, status) =>
        {
            //Daca diferit, primim date:
            if (result !== null && (status === 200 || status === 201))
            {
                //Nu trebuie pentru afisare;
                //Cand merge modala, nu trebuie reload; Nu este Post; Nu se apeleaza get-ul la final, ci la inceput;
                //this.reloadHandler();

                //Creare date pentru graf:
                let daysChartOX = [];
                //Incepe de la 0 indexul;
                let numberOfReservationsChartOY = [];

                //I want: August; (Implicit = May cand am trimis)
                //Sunt in 5, dau + 3, deci luna 8;
                let whatIWant =  0; //3;

                //Zilele din luna curenta:
                //De ce merge?
                let numberOfDays =  new Date(new Date().getFullYear(), new Date().getMonth() + whatIWant + 1, 0).getDate();
                //console.log("Number of days: " + numberOfDays + " !");

                //Pentru days:
                let firstDay = 1;
                while(firstDay <= numberOfDays)
                {
                    daysChartOX.push(firstDay);

                    //Dau push 0 de cate ori avem zile in luna:
                    numberOfReservationsChartOY.push(0);

                    firstDay = firstDay + 1;
                }

                //Cate rezultate am: Sunt doar cele diferite de 0!!!
                let resultLength = result.length

                //Data din location: Test:
                for(let i = 0; i < resultLength; i++)
                {
                    //Ma uit la fiecare in parte, si pun in graf datele:
                    //Afiseaza de 2 ori, cand da toggle on and off:
                    console.log("Result location data: " + result[i].date_and_time);


                    //Pus datele unde trebuie:
                    //Pe pozitia 5 si 6 este ziua: (De la 0 la 2x sau 3x):
                    let firstDigit = parseInt(result[i].date_and_time[5], 10);
                    let secondDigit = parseInt(result[i].date_and_time[6], 10);

                    //Este de la 1 la 9:
                    if(firstDigit === 0)
                    {
                        numberOfReservationsChartOY[secondDigit - 1]++;
                    }
                    else
                    {
                        //Puteam din prima;
                        let wholeNumber = firstDigit * 10 + secondDigit;
                        numberOfReservationsChartOY[wholeNumber - 1]++;
                    }
                }

                //Creare graf:
                const newLocationChart = {
                    options: {
                        chart: {
                            id: 'Location Chart'
                        },
                        xaxis: {
                            //Orele gasite:
                            categories: daysChartOX
                        }
                    },
                    series: [{
                        name: 'NumberOfReservations',
                        data: numberOfReservationsChartOY
                    }]
                }

                //Handle apeleaza sett Change:
                this.handleChart(newLocationChart);

                //Pentru verificare date:
                console.log("New Days: " + newLocationChart.options.xaxis.categories); //OX;
                console.log("New Number Of Reservations: " + newLocationChart.series.data); //OY;
            }
            else
            {
                window.alert("Cannot Get Location Data!");
            }
        });
    }



    //Render:
    render()
    {
        return (
            <div>

                {/*Graful cu datele locatiei:*/}
                <Row>
                    <Chart
                        style = {{
                            border:
                                "solid " +
                                "3px " +
                                "#072da4",
                            marginLeft: "1vmax",
                            width: "50vmax",
                            height: "30vmax",
                            backgroundColor: "#cb2b2b",
                    }}

                        options={this.state.locationChart.options}
                        series={this.state.locationChart.series}

                        //? Bar, Donut!
                        type = "bar" //"bar"

                        // Not resize cum trebuie asa:
                        // width={700}
                        // height={500}
                    />
                </Row>

            </div>
        ) ;
    }
}


//Rutare:
export default withRouter(LocationChartSelected);


