import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class PostAnswer extends Component {
    state = {
        'author_name': '',
        'body' : '',
        'question': this.props.questionId
    }

    clearState = () => {
        this.setState({
            'author_name': '',
            'body' : '',
        })
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    postAnswer = (handleNewAnswer) => {
        const data = {
            'author_name': this.state.author_name,
            'body': this.state.body,
            'question': this.state.question,
        }

        axios.post('http://localhost:8000/api/answers/', data)
        .then(res => {
            handleNewAnswer();
        })
        .catch(error => {
            alert(error.response.data.author_name)
        })
        .finally(() => {
            this.clearState()
        })    
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.postAnswer(this.props.handleNewAnswer);
    }

    render() {
        const { author_name, body } = this.state
        return (
            <div className="answer-form-container">
                <h1>Submit an Answer</h1>
                <Form className="answer-form">
                    <Form.Item>
                        <Input
                            label="Your Name"
                            name="author_name"
                            placeholder="Your Name"
                            value={author_name}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Item>
                    <Form.Item>
                        <TextArea
                            label="Answer Body"
                            name="body"
                            placeholder="Type your answer here."
                            value={body}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Item>
                    { author_name && body ? (
                        <Button onClick={this.handleSubmit} className="btn-submit">Submit</Button>
                        ) : (
                        <Button onClick={this.handleSubmit} className="btn-submit" disabled>Submit</Button>
                    )}
                </Form>
            </div>
        )
    }
}

export default withRouter(PostAnswer);