import React from 'react';
import '../css/QuestionList.css';
import Answer from './Answer';

const AnswerList = (props) => {
  const { answers } = props
  const answerList = answers.length ? (
    answers.map(answer => {
        return (
            <div key={answer.id}>
                <Answer answer={answer}/>
            </div>
        )
    })
    ) : (
        null
    )
  return answerList;
  
}
 
export default AnswerList;