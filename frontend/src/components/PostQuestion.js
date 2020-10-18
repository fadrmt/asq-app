import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import Title from 'antd/lib/typography/Title';
import { withRouter } from 'react-router-dom';


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

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        const { author_name, title, body } = this.state
        return (
            <div className="question-form-container">
                <Title>Post a Question</Title>
                <Form onSubmit={this.handleSubmit} className="question-form">
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
                        <Button htmlType="submit" className="btn-submit">Submit</Button>
                        ) : (
                        <Button htmlType="submit" className="btn-submit" disabled>Submit</Button>
                    )}
                    &nbsp;<Button>Cancel</Button>
                </Form>
            </div>
        )
    }
}

export default withRouter(PostQuestion);