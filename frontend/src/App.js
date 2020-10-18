import React from 'react';
import './css/App.css';
import { Layout } from 'antd';
import { BrowserRouter } from "react-router-dom";
import Home from './components/Home';

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo-text">Asq.</div>
        </Header>
        <Content className="content">
          <BrowserRouter>
            < Home />
          </BrowserRouter>
        </Content>
      </Layout>
      
    </div>
  );
}

export default App;
