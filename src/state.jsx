import React from "react";
import './index.css'

class State extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            title: 'Hi Developers',
        };
    }
    render(){
        const plus = () =>{
            if (this.state.count < 100)this.setState({count: this.state.count + 1});
        };
        const minus = () =>{
            if (this.state.count > 0)this.setState({count: this.state.count - 1});
        };
        const onchange = (event) =>{
            this.setState({ title: event.target.value});
        };
        return(
            <div className="btn">
                <button className="btn1" onClick={plus}>+</button>
                <h1>{this.state.count}</h1>
                <button className="btn1" onClick={minus}>-</button>
                <div className="input">
                    <h1>{this.state.title}</h1>
                    <input className="inp"  onChange={onchange} type="text" placeholder="type something" />
                </div>
            </div>
        )
    }
}
export default State;