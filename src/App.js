import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitList: [        
        {id:1, title:'React - A JavaScript library for building user interfaces', url:'https://reactjs.org/', img:'ico_react'},
        {id:2, title:'NAVER', url:'https://www.naver.com/', img:'ico_naver'},
        {id:3, title:'GiHub', url:'https://github.com/', img:'ico_github'},
        {id:4, title:'YouTube', url:'https://www.youtube.com/', img:'ico_youtube'},
        {id:5, title:'Vue.js', url:'https://vuejs.org/', img:'ico_vue'},
        {id:6, title:'Notion', url:'https://www.notion.so/', img:'ico_notion'},
        {id:7, title:'Netflix', url:'https://www.netflix.com/', img:'ico_netflix'}
      ]
    }
  }
  render () {
    return (
      <div className="App">
        <Header></Header>
        <Content data={this.state.visitList}></Content>
      </div>
    );
  }
}

export default App;
