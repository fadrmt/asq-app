import React from 'react';
import './css/App.css';
import { Layout } from 'antd';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import TopBar from './components/TopBar';
import PostQuestion from './components/Question/PostQuestion';
import QuestionDetailPage from './components/Question/QuestionDetailPage';

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout className="layout">
          <Header>
            <TopBar />
          </Header>
          <Content className="content">            
            <Route exact path="/" component={Home} />
            <Route path="/post-question" component={PostQuestion} />
            <Route path="/question/:questionId" component={QuestionDetailPage} />               
          </Content>
        </Layout>
      </BrowserRouter>      
    </div>
  );
}

export default App;
