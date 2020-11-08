import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cat from './images/cat.jpeg'
import './search.less';

class Search extends Component {
  render() {
    return (
      <div className="search-text">
        福星高照, 大吉大利，今晚吃鸡
        <img src={cat} alt=""/>
      </div>
    )
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)
