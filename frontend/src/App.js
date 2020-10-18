import React from 'react';
import './css/App.css';
import { Layout } from 'antd';
import { BrowserRouter } from "react-router-dom";

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo-text">Asq.</div>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64, textAlign: 'center' }}>
          <BrowserRouter>
            <p>Content here</p>
          </BrowserRouter>
        </Content>
      </Layout>
      
    </div>
  );
}

export default App;
