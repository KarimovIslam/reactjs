import React from "react";
import Cards from "./cards.jsx";
import './stylefruits'

class fruit extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <Cards/>
            </div>
        )
    }
}
export default fruit;