import React, { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    render() {
        console.log("Parent Render");
        return (
            <div className="max-w-6xl mx-auto p-10 mt-12">
                {/* Card Wrapper */}
                <div className="bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 p-12 rounded-3xl shadow-2xl">
                    <h1 className="text-5xl font-extrabold text-pink-900 mb-8 text-center">
                        About Us
                    </h1>

                    {/* UserClass Component Wrapper */}
                    <div className="relative bg-white p-10 rounded-2xl shadow-2xl border-4 border-pink-300">
                        <div className="absolute -top-5 -left-5 bg-pink-500 w-12 h-12 rounded-full shadow-lg"></div>
                        <div className="absolute -bottom-5 -right-5 bg-pink-400 w-12 h-12 rounded-full shadow-lg"></div>
                        
                        {/* UserClass Component */}
                        <UserClass name={"Shubham (class)"} location={"Chandigarh"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
