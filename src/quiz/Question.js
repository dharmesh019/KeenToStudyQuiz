import React, { Component } from 'react';
import './Quiz.css';

class Question extends Component {
    render() {
        return (
            <div className="question">
                <div>{this.props.question}</div>

                <hr/>

                <div className="definition">
                    Defenition 1
                </div>
            </div>
        );
        
    }
}

export default Question;