import React from 'react';
import { Link } from 'react-router-dom';
import './Showreel.css';

function Showreel() {
  return (
    <main className="demo-page">
      <Link to="/" className="back-button">←</Link>

      <section className="demo-content">
        <h1 className="demo-title">video editor</h1>
        <p className="demo-description">
          Aqui você pode ver os vídeos que eu atuei como editor.
        </p>
        <section className="video-section">
          <h2 className='title-section'>Gameplay</h2>
          <div className="video-grid">
            <iframe
              src="https://www.youtube.com/embed/_6DO9TX1kec?si=5BJNY2tQ8nDV_uTL"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/0By2WA96mNQ?si=Ey5gn9UJi8dNXfHf"
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
          </div>
        </section>
        <section className="video-section">
          <h2 className='title-section'>Educativos</h2>
          <div className="video-grid">
            <iframe
              src="https://www.youtube.com/embed/sB_VINGFuxU?si=3x0GPKgp_q_1TOXN"
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            <iframe
              src="https://www.youtube.com/embed/aMDSKtiGYRM?si=ZA_77AGdD4jfxTw6"
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
          </div>
        </section>
        <section className="video-section">
          <h2 className='title-section'>Visualizers</h2>
          <div className="video-grid">
            <iframe 
            src="https://www.youtube.com/embed/ptqTh7-IS2k?si=2FaljYOuX4dLXSBT" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
            <iframe src="https://www.youtube.com/embed/iwz0OebTQ9k?si=Yg_Am_wZK4uad9x8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
          </div>
        </section>
      </section>
    </main >
  );
}

export default Showreel;
