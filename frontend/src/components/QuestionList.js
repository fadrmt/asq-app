import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import '../css/QuestionList.css';
import QuestionListItem from './QuestionListItem';

const QuestionList = (props) => {
  const { questions } = props
  const questionList = questions.length ? (
        questions.map(question => {
            const url = '/question/' + question.id
            return (
                <Link to={url}>
                    <Card hoverable key={question.id} className="question-card">
                        <QuestionListItem question={question}/>
                    </Card>
                </Link>
            )
        })
  ) : (
      <p>No questions posted.</p>
  )
  return questionList;
  
}
 
export default QuestionList;