import React, { Component } from 'react';
import { Comment, Tooltip } from 'antd';
import moment from 'moment';
import '../css/QuestionListItem.css';

class Answer extends Component {
    render() {
        const { body, author_name, date_posted } = this.props.answer
        return (  
            <Comment
                author={ author_name }
                content={ 
                    <p> { body } </p>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment(date_posted).fromNow() }</span>
                    </Tooltip>
                }
            >
            </Comment>
        );
    }
}

export default Answer;