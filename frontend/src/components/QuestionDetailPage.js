import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { Card, Button } from 'antd';
import '../css/QuestionList.css';
import Question from './Question';
import AnswerList from './AnswerList';

class QuestionDetailPage extends Component {
    state = {
        question: null,
        answers: null
    }

    componentDidMount() {
        const { questionId } = this.props.match.params;
        this.getQuestion(questionId);
        this.getAnswers(questionId);
    }

    getQuestion = (questionId) => {
        axios.get('http://localhost:8000/api/questions/' + questionId)
          .then(res => {
            console.log(res.data)
            this.setState({
              question: res.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    getAnswers = (questionId) => {
        axios.get('http://localhost:8000/api/answers/?question=' + questionId)
          .then(res => {
            console.log(res.data)
            this.setState({
              answers: res.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    render() {
        return (
            <>
                <Link to='/'>
                    <Button>Back to Questions List</Button>
                </Link>
                { this.state.question ?
                <>
                    <Card className="question-card">
                        <Question question={this.state.question}/>
                    </Card>
                    {this.state.question.answer_count === 1 
                        ? <h1>{this.state.question.answer_count} Answer</h1>
                        : <h1>{this.state.question.answer_count} Answers</h1>
                    }
                </>
                : null 
                }
                { this.state.answers ?
                    <AnswerList answers={this.state.answers} />
                : null
                }
            </>
        )
    }
}

export default withRouter(QuestionDetailPage);