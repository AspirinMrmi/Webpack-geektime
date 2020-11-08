import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cat from './images/cat.jpeg'
import './search.less';

class Search extends Component {
  render() {
    return (
      <div className="search-text">
        Search Text
        <img src={cat} alt=""/>
      </div>
    )
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)
