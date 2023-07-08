import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import "./HomeScreen.css";


function HomeScreen() {
    return(
        <div className="homescreen">
            <Nav/>
            <Banner/>

        </div>
    );
}

export default HomeScreen;
