import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Title from 'antd/lib/typography/Title';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';


class PostQuestion extends Component {
    state = {
        'author_name': '',
        'title': '',
        'body' : '',
    }

    clearState = () => {
        this.setState({
            'author_name': '',
            'title': '',
            'body' : '',
        })
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    postQuestion = () => {
        const data = {
            'author_name': this.state.author_name,
            'title': this.state.title,
            'body': this.state.body,
        }

        axios.post('http://localhost:8000/api/questions/', data)
        .then(res => {
            this.props.history.push('/')
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
        this.postQuestion();
    }

    render() {
        const { author_name, title, body } = this.state
        return (
            <div className="question-form-container">
                <Title>Post a Question</Title>
                <Form className="question-form">
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
                        <Input
                            label="Question Title"
                            name="title"
                            placeholder="What is your question?"
                            value={title}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Item>
                    <Form.Item>
                        <TextArea
                            label="Question Body"
                            name="body"
                            placeholder="Explain your question in further detail."
                            value={body}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Item>
                    { author_name && title && body ? (
                        <Button shape="round" onClick={this.handleSubmit} className="btn-submit">Submit</Button>
                        ) : (
                        <Button shape="round" onClick={this.handleSubmit} className="btn-submit" disabled>Submit</Button>
                    )}
                    &nbsp;<Link to='/'><Button shape="round">Cancel</Button></Link>
                </Form>
            </div>
        )
    }
}

export default withRouter(PostQuestion);