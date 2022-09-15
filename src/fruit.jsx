import React from "react";
import Cards from "./cards.jsx";
import './index'

class Fruit extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <h1 className="headtitle">List of Fruits</h1>
            <Cards 
                title='Apple' 
                src='data:image/jpeg;base64,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'/>
            <Cards
                title='Peach' 
                src='https://th.bing.com/th/id/OIP.IddncFU4HhXvXrrdtEBlRQHaFJ?w=276&h=192&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>
            <Cards
                title='Banana' 
                src='data:image/jpeg;base64,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'/>
            <Cards
                title='Lemon' 
                src='https://th.bing.com/th/id/OIP.9_K79iZYP1ntYbCCkHpZhAHaGZ?w=171&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>
            <Cards
                title='Watermelon' 
                src='https://th.bing.com/th/id/OIP.JdXFVGk89AFk-yYL4rd2pQHaHa?w=157&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>
            <Cards
                title='Melon' 
                src='https://th.bing.com/th/id/OIP.JiBg1Z8GPv3GQQFyvpPBIQHaGB?w=204&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>
            <Cards
                title='Avocado' 
                src='https://th.bing.com/th/id/OIP.utBoix4dQfDPBIKc7IV9RQHaE8?w=257&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>
            <Cards
                title='Pineapple' 
                src='https://th.bing.com/th/id/OIP.7oxa96702glq06iV-Xai3gHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>    
            <Cards
                title='Dragonfruit' 
                src='https://th.bing.com/th/id/OIP.Ee6o-FqhzQ9aSWEjv3k5cwHaE7?w=285&h=190&c=7&r=0&o=5&dpr=1.25&pid=1.7'/>
            </div>
        )
    }
}
export default Fruit;