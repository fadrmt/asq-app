import React, { Component } from 'react';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { Card, Button, Divider } from 'antd';
import '../../css/Question/QuestionDetail.css';
import Question from './Question';
import AnswerList from '../Answer/AnswerList';
import PostAnswer from '../Answer/PostAnswer';
import { ArrowLeftOutlined } from '@ant-design/icons';

class QuestionDetailPage extends Component {
    state = {
        question: null,
        answers: null,
    }

    // Load values on mount
    componentDidMount() {
        const { questionId } = this.props.match.params;
        this.getQuestion(questionId);
        this.getAnswers(questionId);
    }

    // Retrieves a single question based on ID
    // in the case of an error, logs it to console
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

    // Retrieves all the answers linked to a question
    // in the case of an error, logs it to console
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

    // handles refreshing of page upon posting of new answer
    handleNewAnswer = () => {
        const { questionId } = this.props.match.params;
        this.getAnswers(questionId);
    }
    
    render() {
        const { questionId } = this.props.match.params;
        return (
            <>
                <Link to='/'>
                    <Button shape="round" icon={<ArrowLeftOutlined  style={{color: "#FFF"}}/>}>
                        Back to Questions List
                    </Button>
                </Link>
                { this.state.question ?
                <>
                    <Card className="question-detail-card">
                        <Question question={this.state.question}/>
                    </Card>
                </>
                : null 
                }
                <Divider />
                <PostAnswer questionId={questionId} handleNewAnswer={this.handleNewAnswer} />                
                { this.state.answers ?
                    <>
                        <Divider />
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