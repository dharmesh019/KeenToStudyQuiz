import React, { Component } from 'react';
import './Quiz.css';
import Question from './Question';
import Answers from './Answers';
import qnaData from '../data/qna.json';

class Quiz extends Component {    

    answerQuestion = (answer) => {
        console.log(answer);
    };

    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
  
    getQuestions(data, numberOfQuestions, order) {
      var questions = [];
      for (var i = 0; i < data.length && i < numberOfQuestions; i++) {          
          if (order === "random") {
            var rndInteger = this.getRandomInteger(0, data.length-1);
            var qna = data[rndInteger];
            questions.push(qna);            
          }
          else {
            questions.push(data[i]);
          }
      }
      return questions;
    }

    render() {
        let data = qnaData;
        let questions = this.getQuestions(data, 2, "");

        return (
            <div className="question">
                <Question questions={this.questions}></Question>
                <Answers answerQuestion={this.answerQuestion}>
                </Answers>
            </div>
        );        
    }
}

export default Quiz;