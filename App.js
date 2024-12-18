import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";




const styleCard= {
    backgroundColor : "0f0f0f"

}






const AppLayout = () => {
    return <div className= "app">
        <Header/>
        <Body/>

    </div>
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
