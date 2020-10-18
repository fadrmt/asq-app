import React from 'react';
import { Card } from 'antd';
import '../css/QuestionList.css';
import QuestionListItem from './QuestionListItem';

const QuestionList = (props) => {
  const { questions } = props
  const questionList = questions.map(question => {
    return (
        <Card hoverable key={questions.id} className="question-card">
            <QuestionListItem question={question}/>
        </Card>
    )
  })
  return questionList;
}
 
export default QuestionList;