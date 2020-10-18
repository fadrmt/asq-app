import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import '../../css/Question/QuestionList.css';
import QuestionListItem from './QuestionListItem';

const QuestionList = (props) => {
  const { questions } = props
  const questionList = questions.length ? (
        questions.map(question => {
            const url = '/question/' + question.id
            return (
                <Link to={url} key={question.id}>
                    <Card hoverable className="question-card">
                        <QuestionListItem question={question}/>
                    </Card>
                </Link>
            )
        })
  ) : (
      <div>No questions posted.</div>
  )
  return questionList;
  
}
 
export default QuestionList;