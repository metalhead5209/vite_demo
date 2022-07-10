import React, { Component } from 'react';
import cats from "../src/cats.png"
class Dog extends Component {
    render(){
        return (
            <div classname="Cat">
                <h1>Cat</h1>
                <img src={cats} />
            </div>
        )
    }
};

export default Dog;