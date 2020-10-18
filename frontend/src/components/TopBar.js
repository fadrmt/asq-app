import React from 'react';
import { Row, Col, Button } from 'antd';

const TopBar = (props) => {
    return (
        <Row type="flex" align="middle" >
            <Col span={13}>
                <div className="logo-text">{props.logoText}</div>
            </Col>
            <Col span={11} align="right">
                <Button size="large" type="primary" shape="round">
                    Post a Question
                </Button>
            </Col>
        </Row>
    );

}

export default TopBar;