import React from "react";
import './fruitstyle.css'


class Cards extends React.Component{
    render(){
        return(
            
            <div className="container">
                <img className="img" src={this.props.src} alt="photo" />
                <h3 className="title">{this.props?.title}</h3>
            </div>
        )
    }
}
export default Cards;