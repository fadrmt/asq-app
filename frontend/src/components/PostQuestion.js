import React, { Component } from 'react';
import { Form, Input } from 'antd';
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
                <Form onSubmit={this.handleSubmit} className="question-form">
                    <Form.Item>
                        <Input
                            name="author_name"
                            placeholder="Your Name"
                            value={author_name}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            name="title"
                            placeholder="Question Title"
                            value={title}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Item>
                    <Form.Item>
                        <TextArea
                            name="body"
                            placeholder="Question Body"
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
                </Form>
            </div>
        )
    }
}

export default withRouter(PostQuestion);