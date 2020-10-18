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