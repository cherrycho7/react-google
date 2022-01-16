import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <header className="header">
        <ul>
          <li><a href="/" className="link">Gmail</a></li>
          <li><a href="/" className="link">이미지</a></li>
          <li><a href="/" className="menuBtn">more</a></li>
          <li><a href="/" className="userBtn"><span>아라</span></a></li>
        </ul>
      </header>  
    );
  }
}

export default Header;
