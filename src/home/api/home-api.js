import {HOST} from '../../commons/hosts';
import RestApiClient from "../../commons/api/rest-client";
import axios from "axios"

//Endpoints:
const endpoint = {
    //home: '/home'
    default: ''
};

//1) User role redirect:
// function userRoleRedirect(homeUser, callback){
//     let request = new Request(HOST.backend_api + endpoint.home + "/homeRoleRedirect", {
//         method: 'POST',
//         headers : {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(homeUser)
//     });
//
//     console.log("URL: " + request.url);
//     RestApiClient.performRequest(request, callback);
// }



//2) User login:
function userLogin(homeUserLogin, callback){
    let request = new Request(HOST.backend_api + endpoint.default + "/userLogin", {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        // Stringify:
        body: JSON.stringify(homeUserLogin)
    });

    console.log("URL: " + request.url);
    RestApiClient.performRequest(request, callback);
}



//3) User register:
function userRegister(homeUserRegister, callback){
    let request = new Request(HOST.backend_api + endpoint.default + "/userRegister", {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        // Stringify:
        body: JSON.stringify(homeUserRegister)
    });

    console.log("URL: " + request.url);
    RestApiClient.performRequest(request, callback);
}


//4) User logout:
function userLogout(callback){
    let request = new Request(HOST.backend_api + endpoint.default + "/userLogout", {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        // Stringify:
        body: JSON.stringify()
    });

    console.log("URL: " + request.url);
    RestApiClient.performRequest(request, callback);
}


//5) User get data:
function getUserData(callback) {
    let request = new Request(HOST.backend_api + endpoint.default + "/userData", {
        method: 'GET',
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}



//1) Export RestApixClient:
export {
    // userRoleRedirect,
    userLogin,
    userLogout,
    userRegister,
    getUserData,
};



//2) ExportAxiosCreate:
//With Credentials nu stiu ce reprezinta:
// export default axios.create({
//     withCredentials: true,
// });





