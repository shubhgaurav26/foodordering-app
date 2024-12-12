import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (<h1 id = "heading">Hello world using jsx</h1>);
console.log(jsxHeading);


const HeadingComponent =()=>{
    return<h1> Namaste React Functional Component </h1>
};

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(jsxHeading);

/*
Test 2
*/




