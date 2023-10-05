// import logo from './logo.svg';
import './App.css';
import React, {createContext, useEffect, useRef, useState} from 'react' //useEffect,
import NavigationBar from './navigation-bar'
import HomeContainer from './home/home-container'
import NoutatiContainer from './noutati/noutati-container'
import DespreNoiContainer from './desprenoi/desprenoi-container'
import InchirieriContainer from './inchirieri/inchirieri-container'
import VanzariContainer from './vanzari/vanzari-container'
import ContactContainer from './contact/contact-container'
import ErrorPage from './commons/errorhandling/error-page';
import styles from './commons/styles/project-style.css';
//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//Routes in loc de Switch; Routes;
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import {AppState, StyleSheet, Text, View} from 'react-native';

//App?
//Const vs Let, Batut in cuie sau nu:
//Gol la inceput, dupa care dai valori cu provider:
//export const AppContext = createContext(App());
export const AppContext = React.createContext(true);


//Not a class;
function App() {



    //Pentru AppContext:
    //Folosesti in componente aceste variabile globale!!!
    //For login:
    //When you login: Initial False;
    // const [isLoggedIn, setIsLoggedIn] = useState("false");
    // const [isLoggedIn, setIsLoggedIn] = useState("Horse");
    //For client / admin:
    //Role is client, or Role is administrator;
    // const [isClient, setIsClient] = useState("true");

    // Good data:
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isClient, setIsClient] = useState(true);
    const [clientEmail, setClientEmail] = useState("Email");

    //Pentru pastrare ultima selectata:
    const [metriPatrati, setMetriPatrati] = useState(0);
    const [numarCamere, setNumarCamere] = useState(0);
    const [locatie, setLocatie] = useState("");
    const [pret, setPret] = useState(0);
    const [tip, setTip] = useState("");

    //Pentru state aplicatie:
    //const appState = useRef(AppState.currentState);
    //const [appStateVisible, setAppStateVisible] = useState(appState.current);

    //Pentru persistare data:
    useEffect(() => {
        //Repunerea datelor:
        //User:
        setIsLoggedIn(localStorage.getItem("isLoggedIn"));
        setIsClient(localStorage.getItem("isClient"));
        setClientEmail(localStorage.getItem("clientEmail"));

        //Vanzari:
        setMetriPatrati(localStorage.getItem("metriPatrati"));
        setNumarCamere(localStorage.getItem("numarCamere"));
        setLocatie(localStorage.getItem("locatie"));
        setPret(localStorage.getItem("pret"));
        setTip(localStorage.getItem("tip"));

        //Pentru close tab!!!
        // const handleBrowserClose = event => {
        //     event.preventDefault();
        //     console.log('BeforeUnload event triggered!');
        //
        //     //Set data to none:
        //     // const [isLoggedIn, setIsLoggedIn] = useState(false);
        //     // const [isClient, setIsClient] = useState(true);
        //     // const [clientEmail, setClientEmail] = useState("email");
        //
        //     //Context:
        //     setIsLoggedIn(false);
        //     setIsClient(true);
        //     setClientEmail("email");
        //
        //     //Local Storage:
        //     setIsLoggedIn(localStorage.setItem("isLoggedIn", false));
        //     setIsClient(localStorage.setItem("isClient", true));
        //     setClientEmail(localStorage.setItem("clientEmail", "email"));
        //
        //     return (event.returnValue = 'Are you sure you want to exit?');
        // };
        //
        // window.addEventListener('beforeunload', handleBrowserClose);
        //
        // return () => {
        //     window.removeEventListener('beforeunload', handleBrowserClose);
        // };
    })
        // , [])


  return (
      // Is + Set la toate variabilele: Si da la toti children:
      // <AppContext.Provider value = {{"isLoggedIn", "setIsLoggedIn", "isClient", "setIsClient"}}>
      <AppContext.Provider value = {{
          isLoggedIn, setIsLoggedIn, isClient,
          setIsClient, clientEmail, setClientEmail,
          metriPatrati, setMetriPatrati,
          numarCamere, setNumarCamere,
          locatie, setLocatie,
          pret, setPret,
          tip, setTip,
      }}>
          <div className="App">

              {/*<header className="App-header">*/}
              {/*  <img src={logo} className="App-logo" alt="logo" />*/}
              {/*  <p>*/}
              {/*    Schimba again <code>src/App.js</code> and save to reload.*/}
              {/*  </p>*/}
              {/*  <a*/}
              {/*    className="App-link"*/}
              {/*    href="https://reactjs.org"*/}
              {/*    target="_blank"*/}
              {/*    rel="noopener noreferrer"*/}
              {/*  >*/}
              {/*    Learn React*/}
              {/*  </a>*/}
              {/*</header>*/}

              <Router>
                  <div>
                      <Switch>
                          {/*Home Page:  */}
                          <Route
                              exact
                              path='/'
                              render={() =>
                                  //element={
                                  <div>
                                      <NavigationBar/>
                                      <HomeContainer/>
                                  </div>
                              }/>
                          />

                          {/*Noutati:  */}
                          <Route
                              exact
                              path='/noutati'
                              render={() =>
                                  <div>
                                      <NavigationBar/>
                                      <NoutatiContainer/>
                                  </div>
                              }/>

                          {/*/!*Despre noi:  *!/*/}
                          <Route
                              exact
                              path='/desprenoi'
                              render={() =>
                                  <div>
                                      <NavigationBar/>
                                      <DespreNoiContainer/>
                                  </div>
                              }/>
                          />

                          {/*/!*Inchirieri:  *!/*/}
                          <Route
                              exact
                              path='/inchirieri'
                              render={() =>
                                  <div>
                                      <NavigationBar/>
                                      <InchirieriContainer/>
                                  </div>
                              }/>

                          {/*/!*Vanzari:  *!/*/}
                          <Route
                              exact
                              path='/vanzari'
                              render={() =>
                                  <div>
                                      <NavigationBar/>
                                      <VanzariContainer/>
                                  </div>
                              }/>

                          {/*  /!*Contact:  *!/*/}
                          <Route
                              exact
                              path='/contact'
                              render={() =>
                                  <div>
                                      <NavigationBar/>
                                      <ContactContainer/>
                                  </div>
                              }/>

                          {/*Error Page:  */}
                          <Route
                              exact
                              path='/error'
                              render={() => <ErrorPage/>}
                          />
                          <Route render={() =><ErrorPage/>} />
                      </Switch>
                  </div>
              </Router>
          </div>
      </AppContext.Provider>
  );
}


//Same:
export default App;



/*
Comentarii:
-Nu mai trebuie docker sau nginx;
-Nu mai trebuie serviceWorker;
-
-
-
*/