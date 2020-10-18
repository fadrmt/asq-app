import React, { Component } from 'react';
import { Divider, Row, Col } from 'antd';
import moment from 'moment';
import '../css/QuestionListItem.css';

class QuestionListItem extends Component {
    render() {
        const { title, author_name, date_posted, answer_count} = this.props.question
        return (
            <>
            <Row type="flex" align="middle" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col span={20} className="question-title-container">
                    <p className="question-title">{ title }</p>
                </Col>
                <Col span={4} align="center" className="answer-count-container">
                    <h1 className="answer-count">{ answer_count }</h1>
                    <span className="ant-card-meta ant-card-meta-description">
                        { (answer_count === 1)
                            ? <span> Answer </span>
                            : <span> Answers </span> 
                        }
                    </span>
                </Col>
            </Row>
            
            <Divider className="question-card-divider" />
            <p className="ant-card-meta-description">
                Posted by <span className="question-author-name ant-typography">{author_name}</span>
                &nbsp;&nbsp;{ moment(date_posted).fromNow() }
            </p>       
          </>
        );
    }
}

export default QuestionListItem;