import React, { Component } from 'react';
import axios from 'axios';
import QuestionList from './Question/QuestionList';
import Title from 'antd/lib/typography/Title';
import { withRouter } from 'react-router-dom';
import { Row, Col, Input } from 'antd';

const { Search } = Input;

class Home extends Component {
    state = {
        questions: [],
        search: null
    }

    componentDidMount() {
        this.getQuestionList()
    }

    getQuestionList = (search = null) => {
        let url = 'http://localhost:8000/api/questions/';
        if(search) {
            url = 'http://localhost:8000/api/questions?search=' + this.state.search;
        }
        console.log(url);
        axios.get(url)
        .then(res => {
            console.log(res.data)
            this.setState({
            questions: res.data
            })
        })
    }

    handleSearch = (value) => {
        this.setState({
            search: value,
        })
        this.getQuestionList(value);
    }
    
    render() {
        return (
            <>
                <Title level={2}>Questions</Title>
                <Row type="flex">                    
                    <Col span={24} align="right">
                        <Search
                            name="search"
                            placeholder="Search Question"
                            onSearch={value => {
                                this.handleSearch(value)
                            }}
                            size="large"
                            className="question-search-box"
                        />
                    </Col>
                </Row>            
                <QuestionList questions={this.state.questions} />
            </>
        )
    }
}

export default withRouter(Home);