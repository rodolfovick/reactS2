import React, { Component } from 'react';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';
import axios from 'axios';

var baseUrl = 'data/';

export default class App extends Component {
  state = {
    json: {}
  }

  componentDidMount() {
    axios.get(baseUrl+'pageDocument.json')
      .then(res => this.setState({json: res.data}));
  }

  render() {
    return (
      <div style={{
          backgroundColor: this.state.json.backgroundColor,
          color: this.state.json.color
        }}>
        <header>
          <Header header={this.state.json.header}/>
        </header>
        
        <div style={{
          backgroundColor: "#ffffff",
          color: '#000000',
          margin: '15px',
          overflow: 'hidden'
        }}>
            <Page page={this.state.json.page}/>
        </div>
        
        <footer>
          <Footer footer={this.state.json.footer}/>
        </footer>
      </div>
    )
  }
}
