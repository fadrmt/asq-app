import React from 'react';
import './css/App.css';
import { Layout } from 'antd';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import TopBar from './components/TopBar';
import PostQuestion from './components/PostQuestion';

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
            <Route exact path="/" component={Home} />
            <Route path="/post-question" component={PostQuestion} />
          </BrowserRouter>
        </Content>
      </Layout>
      
    </div>
  );
}

export default App;
