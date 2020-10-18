import React, { Component } from 'react';
import { Divider } from 'antd';
import moment from 'moment';
import '../css/QuestionListItem.css';

class Question extends Component {
    render() {
        const { title, author_name, date_posted, body } = this.props.question
        return (
            <>          
                <strong className="question-title">{ title }</strong>
                <Divider className="question-card-divider" />  
                <p>{ body }</p>            
                <Divider className="question-card-divider" />
                <p className="ant-card-meta-description">
                    Posted by <span className="question-author-name ant-typography">{author_name}</span>
                    &nbsp;&nbsp;{ moment(date_posted).fromNow() }
                </p>       
            </>
        );
    }
}

export default Question;