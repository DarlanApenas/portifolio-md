import React from 'react';

import { Link } from 'react-router-dom';

function Home() {

  return (
    <>
      <div className="app">
        <header className="header">
          <section className="wrapper">
            <a className="title">DARLAN</a>
            <nav className="subhead">
              <a>Motion Design &amp; Dev</a>
            </nav>
            <nav className="nav menu">
              <Link to="/about">
                <a>about</a>
              </Link>
              <a>contact</a>
            </nav>
            <nav className="nav social mobile-hide">
              <a href="https://github.com/DarlanApenas" target="_blank" rel="noopener noreferrer">github</a>
              <a href="https://instagram.com/darlan.mov" target="_blank" rel="noopener noreferrer">instagram</a>
              <a href="https://twitch.tv/srdarlan_" target="_blank" rel="noopener noreferrer">twitch</a>
              <a href="https://www.youtube.com/@srdarlan_" target="_blank" rel="noopener noreferrer">youtube</a>
            </nav>
            <hr className="divider-big mobile-hide" />
          </section>
        </header>
        <main>
          <section className="wrapper work">
            <Link to="/demoreel" className="work-link">
              <p>video editor</p>
            </Link>
            <Link to="/motion" className="work-link">
              <p>Motion</p>
            </Link>
            <Link to="/frontend" className="work-link">
              <p>dev</p>
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
