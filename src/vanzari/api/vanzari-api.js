import {HOST} from '../../commons/hosts';
import RestApiClient from "../../commons/api/rest-client";
import axios from "axios"

//Endpoints:
const endpoint = {
    //vanzari: '/vanzari'
    default: ''
};



//1) Vanzari get data:
function getVanzariData(callback) {
    let request = new Request(HOST.backend_api + endpoint.default + "/vanzariData", {
        method: 'GET',
    });

    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}



//2) Vanzari Add:
function vanzariAdd(vanzareAdd, callback){
    let request = new Request(HOST.backend_api + endpoint.default + "/vanzariAdd", {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

        // Stringify:
        body: JSON.stringify(vanzareAdd)
    });

    console.log("URL: " + request.url);
    RestApiClient.performRequest(request, callback);
}



//3) Vanzari Update:
function vanzariUpdate(vanzareUpdate, callback){
    let request = new Request(HOST.backend_api + endpoint.default + "/vanzariUpdate", {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

        // Stringify:
        body: JSON.stringify(vanzareUpdate)
    });

    console.log("URL: " + request.url);
    RestApiClient.performRequest(request, callback);
}



//2) Vanzari Delete:
function vanzariDelete(vanzareDelete, callback){
    let request = new Request(HOST.backend_api + endpoint.default + "/vanzariDelete", {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

        // Stringify:
        body: JSON.stringify(vanzareDelete)
    });

    console.log("URL: " + request.url);
    RestApiClient.performRequest(request, callback);
}




//3) Insert programare:
function programareAdd(programareAdd, callback){
    let request = new Request(HOST.backend_api + endpoint.default + "/programareAdd", {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

        // Stringify:
        body: JSON.stringify(programareAdd)
    });

    console.log("URL: " + request.url);
    RestApiClient.performRequest(request, callback);
}




//4) Get programari pentru imobil in luna actuala:
function getAllProgramariForImobil(imobilLocation, callback) {
    let request = new Request(HOST.backend_api + endpoint.default + "/getAllProgramariForImobil/" + imobilLocation, {
        method: 'GET',
    });

    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}





//1) Export RestApixClient:
export {
    getVanzariData,
    vanzariAdd,
    vanzariUpdate,
    vanzariDelete,
    programareAdd,
    getAllProgramariForImobil,
};



//2) ExportAxiosCreate:
//With Credentials nu stiu ce reprezinta:
// export default axios.create({
//     withCredentials: true,
// });



