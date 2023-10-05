import React from 'react'
import logo from './commons/images/houseIcon.svg';
import './navigation-bar.css';
import {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap'; //Ca un bootstrap;

// const dropdownItems = {}



//Il pun in CSS!!!
// const textStyleFirst = {
//     // marginTop: "1%",
//     // marginLeft: "65%",
//     marginLeft: "27vmax",
//     color: 'black',
//     textDecoration: 'none',
//     fontSize: "2vmax", //"150%",
//     backgroundColor: '#144BB6',
//     paddingLeft: "3vmax", //"10%",
//     paddingRight: "3vmax", //"10%",
//     borderRadius: "0px 0px 0px 30px"
// };

//Il pun in CSS: !!!
// const textStyle = {
//     // marginTop: "1%"
//     marginLeft: "0.2vmax", //"0.5%",
//     color: 'black', //'white',
//     textDecoration: 'none',
//     fontSize: "2vmax", //"150%",
//     backgroundColor: '#144BB6',
//     paddingLeft: "1.5vmax", // "10%",
//     paddingRight: "1.5vmax", //"10%",
//
//     // ":hover": { background: "grey" }
//     // ":hover": { color: "#8062ba" }
// };



const NavigationBar = () => (
    <div
    style = {{
        display: "unset",
    }}
    >
        {/*extra-large*/}
        {/*Cum fac sa fie in afara divului:*/}
        <Navbar color="dark" expand="md"
        style = {{
            // position: "absolute",
            // position: "fixed",
            // position: "sticky !important",
            position: "sticky",
            zIndex: "120",
            width: "100%",
            top: "0vmax",
            borderStyle: "solid",
            borderWidth: "0vmax 0vmax 0.5vmax 0vmax",
            borderColor: "black",
            // top: "-5vmax",
            // alignSelf: "stretch",
            //"auto",
            // marginBottom: "30vmax",
            // paddingBottom: "10vmax",
            // background: #ffffff;
            // marginBottom: "-20%",
        }}
        >
            {/*style = {{marginLeft: "10%"}}*/}
            <NavbarBrand href="/">
                <img src={logo} width={"50"}
                     height={"50"}/>
            </NavbarBrand>
            {/*className="mr-auto"*/}
            {/*style = {{float : "right"}}*/}
            <Nav className="mr-auto" navbar>

                {/*<div className="border-right">*/}
                {/*style={textStyleFirst}*/}
            {/*    style={({ isActive, isPending }) => {*/}
            {/*    return {*/}
            {/*        fontWeight: isActive ? "bold" : "",*/}
            {/*        color: isPending ? "red" : "black",*/}
            {/*    };*/}
            {/*}*/}
            {/*    activeStyle={{ color: "grey" }}*/}
                <NavLink
                    // style={({ isActive }) => ({
                    //     color: isActive ? '#fff' : '#545e6f',
                    //     background: isActive ? '#7600dc' : '#f0f0f0',
                    // })}
                    className = "nav-bar-link1"
                    // style={textStyleFirst}
                    href="/">Home</NavLink>

                {/*1)*/}
                {/*<NavLink className = "nav-bar-link" style={textStyle} href="/noutati">Noutati</NavLink>*/}
                {/*<NavLink style={textStyle} href="/desprenoi">Despre Noi</NavLink>*/}
                {/*<NavLink style={textStyle} href="/inchirieri">Inchirieri</NavLink>*/}
                {/*<NavLink style={textStyle} href="/vanzari">Vanzari</NavLink>*/}
                {/*<NavLink style={textStyle} href="/contact">Contact</NavLink>*/}

                {/*2)*/}
                <NavLink className = "nav-bar-link2" href="/noutati">Noutati</NavLink>
                <NavLink className = "nav-bar-link2" href="/desprenoi">Despre Noi</NavLink>
                <NavLink className = "nav-bar-link2" href="/inchirieri">Inchirieri</NavLink>
                <NavLink className = "nav-bar-link2" href="/vanzari">Vanzari</NavLink>
                <NavLink className = "nav-bar-link2" href="/contact">Contact</NavLink>

                {/*</div>*/}

                {/*<UncontrolledDropdown nav inNavbar>*/}
                {/*    <DropdownToggle style={textStyle} nav caret>*/}
                {/*       Menu*/}
                {/*    </DropdownToggle>*/}
                {/*    <DropdownMenu right >*/}

                {/*        /!*<NavLink href="/">Home</NavLink>*!/*/}

                {/*        <DropdownItem style = {{color: "#d01010"}}>*/}
                {/*            <NavLink href="/">Home</NavLink>*/}
                {/*        </DropdownItem>*/}

                {/*        <DropdownItem style = {{color: "#d01010"}}>*/}
                {/*            <NavLink href="/noutati">Noutati</NavLink>*/}
                {/*        </DropdownItem>*/}

                {/*        <DropdownItem style = {{color: "#d01010"}}>*/}
                {/*            <NavLink href="/desprenoi">Despre Noi</NavLink>*/}
                {/*        </DropdownItem>*/}

                {/*        <DropdownItem style = {{color: "#d01010"}}>*/}
                {/*            <NavLink href="/inchirieri">Inchirieri</NavLink>*/}
                {/*        </DropdownItem>*/}

                {/*        <DropdownItem style = {{color: "#d01010"}}>*/}
                {/*            <NavLink href="/vanzari">Vanzari</NavLink>*/}
                {/*        </DropdownItem>*/}

                {/*        <DropdownItem style = {{color: "#d01010"}}>*/}
                {/*            <NavLink href="/contact">Contact</NavLink>*/}
                {/*        </DropdownItem>*/}

                {/*        /!*<DropdownItem style = {{color: "#1c3b9f"}}>*!/*/}
                {/*        /!*    <NavLink href="/admin/device">Device</NavLink>*!/*/}
                {/*        /!*</DropdownItem>*!/*/}

                {/*    </DropdownMenu>*/}
                {/*</UncontrolledDropdown>*/}

            </Nav>
        </Navbar>
    </div>
);

export default NavigationBar

//"@testing-library/jest-dom": "^5.16.5", "@testing-library/react": "^13.4.0", "@testing-library/user-event": "^13.5.0",
