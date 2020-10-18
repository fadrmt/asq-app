import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { Card, Button } from 'antd';
import '../css/QuestionList.css';
import Question from './Question';
import AnswerList from './AnswerList';
import PostAnswer from './PostAnswer';

class QuestionDetailPage extends Component {
    state = {
        question: null,
        answers: null,
    }

    componentDidMount() {
        const { questionId } = this.props.match.params;
        this.getQuestion(questionId);
        this.getAnswers(questionId);
    }

    getQuestion = (questionId) => {
        axios.get('http://localhost:8000/api/questions/' + questionId)
          .then(res => {
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
            this.setState({
              answers: res.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleNewAnswer = () => {
        const { questionId } = this.props.match.params;
        this.getAnswers(questionId);
    }
    
    render() {
        const { questionId } = this.props.match.params;
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
                </>
                : null 
                }

                <PostAnswer questionId={questionId} handleNewAnswer={this.handleNewAnswer} />
                
                { this.state.answers ?
                    <>
                        {this.state.answers.length === 1 
                            ? <h1>{this.state.answers.length} Answer</h1>
                            : <h1>{this.state.answers.length} Answers</h1>
                        }
                        <AnswerList answers={this.state.answers} />
                    </>
                : null
                }

            </>
        )
    }
}

export default withRouter(QuestionDetailPage);