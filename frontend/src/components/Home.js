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

    // Load questions on mount
    componentDidMount() {
        this.getQuestionList()
    }

    // Retrieves the list of questions
    // handles the case of no filter (get all) and filter by title
    // in the case of an error, logs it to console
    getQuestionList = (search = false) => {
        let url = 'http://localhost:8000/api/questions/';
        if(search) {
            url = 'http://localhost:8000/api/questions?search=' + this.state.search;
        }
        axios.get(url)
        .then(res => {
            this.setState({
            questions: res.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    // updates state when search box input is changed
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }

    // handles search event
    // re-retrieve list of questions based on input
    handleSearch = (value, event) => {
        this.getQuestionList(true);
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
                            onSearch={(value, event) => {
                                this.handleSearch(value, event)
                            }}
                            onChange={this.handleChange}
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