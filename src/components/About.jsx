import React, { Component } from "react"; // Properly importing Component
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is about page</h2>
                <UserClass name={"Shubham(class)"} location={"Chandigarh"} />
            </div>
        );
    }
}

export default About;
