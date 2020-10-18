import React, { Component } from 'react';
import { Comment, Tooltip, Card } from 'antd';
import moment from 'moment';
import '../../css/Answer/Answer.css';

class Answer extends Component {
    render() {
        const { body, author_name, date_posted } = this.props.answer
        return (
            <Card className="answer-card">
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
            </Card>  
            
        );
    }
}

export default Answer;