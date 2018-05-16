import React, { Component } from 'react';
import './Quiz.css';

class Answers extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <a href="#" onClick={() =>this.props.answerQuestion('hello')}>(A) Anwser 11</a>     
                    </div>
                    <div className="col-sm-6">
                        (B) Anwser 2     
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        (C) Anwser 3     
                    </div>
                    <div className="col-sm-6">
                        (D) Anwser 4     
                    </div>
                </div>
            </div>
        );
        
    }
}

export default Answers;