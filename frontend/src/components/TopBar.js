import React from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <Row type="flex" align="middle" >
            <Col span={13}>
                <div className="logo-text">Asq.</div>
            </Col>
            <Col span={11} align="right">
                <Link to='/post-question'>
                    <Button size="large" type="primary" shape="round">
                        Post a Question
                    </Button>
                </Link>
            </Col>
        </Row>
    );

}

export default TopBar;