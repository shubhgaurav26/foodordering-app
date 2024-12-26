import React, { Component } from "react"; // Properly importing Component
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    render() {
        console.log("Parent Render");
        return (
            <div className="max-w-4xl mx-auto p-6 bg-pink-50 rounded-xl shadow-md mt-10">
                <h1 className="text-4xl font-bold text-pink-800 mb-4 text-center">About Class Component</h1>
                <h2 className="text-lg text-pink-600 mb-6 text-center">
                    This is the about page
                </h2>
                <div className="bg-pink-100 p-4 rounded-lg shadow-sm">
                    <UserClass name={"Shubham (class)"} location={"Chandigarh"} />
                </div>
            </div>
        );
    }
}

export default About;
