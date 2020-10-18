import React, { Component } from 'react';
import axios from 'axios';
import QuestionList from './Question/QuestionList';
import Title from 'antd/lib/typography/Title';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    state = {
        questions: []
    }

    componentDidMount() {
        this.getQuestionList()
    }

    getQuestionList = () => {
        axios.get('http://localhost:8000/api/questions/')
          .then(res => {
            console.log(res.data)
            this.setState({
              questions: res.data
            })
        })
    }
    
    render() {
        return (
            <>
            <Title>Questions</Title>
            <QuestionList questions={this.state.questions} />
            </>
        )
    }
}

export default withRouter(Home);