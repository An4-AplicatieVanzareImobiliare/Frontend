//Pentru cookies:



// import React, { Component } from 'react';
// import { instanceOf } from 'prop-types';
// import { withCookies, Cookies } from 'react-cookie';
// // import {Button} from "reactstrap";
//
//
// class userCookie extends Component
// {
//     static propTypes = {
//         cookies: instanceOf(Cookies).isRequired
//     };
//
//     constructor(props)
//     {
//         super(props);
//
//         this.state = {
//             id: this.props.cookies.get("id") || "noId",
//             name: this.props.cookies.get("name") || "noName",
//             address: this.props.cookies.get("address") || "noAddress",
//             age: this.props.cookies.get("age") || "noAge",
//             email: this.props.cookies.get("email") || "noEmail",
//             password: this.props.cookies.get("password") || "noPassword",
//             role: this.props.cookies.get("role") || "noRole",
//         };
//     }
//
//     handleUserChange(result)
//     {
//         const { cookies } = this.props;
//
//         cookies.set("id", result.id, { path: "/" });
//         cookies.set("name", result.name, { path: "/" });
//         cookies.set("address", result.address, { path: "/" });
//         cookies.set("age", result.age, { path: "/" });
//         cookies.set("email", result.email, { path: "/" });
//         cookies.set("password", result.password, { path: "/" });
//         cookies.set("role", result.role, { path: "/" });
//
//         this.setState({ id: result.id });
//         this.setState({ name: result.name });
//         this.setState({ address: result.address });
//         this.setState({ age: result.age });
//         this.setState({ email: result.email });
//         this.setState({ password: result.password });
//         this.setState({ role: result.role });
//     }
//
//     setAllNull()
//     {
//         const { cookies } = this.props;
//
//         cookies.set("id", "noId", { path: "/" });
//         cookies.set("name", "noName", { path: "/" });
//         cookies.set("address", "noAddress", { path: "/" });
//         cookies.set("age", "noAge", { path: "/" });
//         cookies.set("email", "noEmail", { path: "/" });
//         cookies.set("password", "noPassword", { path: "/" });
//         cookies.set("role", "noRole", { path: "/" });
//
//         this.setState({ id: "noId" });
//         this.setState({ name: "noName" });
//         this.setState({ address: "noAddress" });
//         this.setState({ age: "noAge" });
//         this.setState({ email: "noEmail" });
//         this.setState({ password: "noPassword" });
//         this.setState({ role: "noRole" });
//     }
//
//     render() {
//         return (
//             <div>
//             </div>
//         );
//     }
// }
//
// export default withCookies(userCookie);



