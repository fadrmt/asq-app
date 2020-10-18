import React from 'react';
import './css/App.css';
import { Layout } from 'antd';
import { BrowserRouter } from "react-router-dom";
import Home from './components/Home';
import TopBar from './components/TopBar';

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <TopBar logoText="Asq." />
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
