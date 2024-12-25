import React, { useState } from 'react';
import './App.css'; // Aqui ficarão os estilos do projeto

const App = () => {
  return (
    <div className="app">
        <header className="header">
          <section class="wrapper">
            <a className='title'>DARLAN</a>
            <nav class="subhead">
              <a href="">Motion Design &amp; Dev</a>
            </nav>
            <nav class="nav menu">
              <a href="">about</a>
              <a href="">contact</a>
            </nav>
            <nav class="nav social mobile-hide">
              <a href="https://github.com/DarlanApenas" target="_blank" rel="noopener noreferrer">github</a>
              <a href="https://instagram.com/darlan.mov" target="_blank" rel="noopener noreferrer">instagram</a>
              <a href="https://twitch.tv/srdarlan_" target="_blank" rel="noopener noreferrer">twitch</a>
              <a href="https://www.youtube.com/@srdarlan_" target="_blank" rel="noopener noreferrer">youtube</a>
            </nav>
            <hr class="divider-big mobile-hide"></hr>
          </section>
      </header>
      <main>
        <section class="wrapper work">
        <a href="#showreel">
          <p>Showreel</p>
        </a>
        <a href="#motion">
          <p>Motion design</p>
        </a>
        <a href="#front">
          <p>front-end</p>
        </a>
        <hr class="divider-big"></hr>
        </section>
      </main>
    </div>
  );
};

export default App;