import React, { Component } from 'react';
import QuestionList from './QuestionList';

class Home extends Component {
    state = {
        questions: [
            {
                "id": 1,
                "answer_count": 1,
                "title": "What is the answer to life, the universe, and everything?",
                "body": "Someone asked me this, and I'm stumped. Please help.",
                "author_name": "Arthur Dent",
                "date_posted": "2020-10-17T19:51:07.609614+08:00"
            },
            {
                "id": 2,
                "answer_count": 1,
                "title": "What is the answer to life, the universe, and everything?",
                "body": "Someone asked me this, and I'm stumped. Please help.",
                "author_name": "Arthur Dent",
                "date_posted": "2020-10-17T19:51:07.609614+08:00"
            }
        ]
    }
    render() {
        return (
            <>
            <QuestionList questions={this.state.questions} />
            </>
        )
    }
}

export default Home;