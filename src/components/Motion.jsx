import React from 'react';
import './Motion.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: '4AM Records',
    description: 'Animação da logo da gravadora 4AM.',
    gif: './src/gifs/4am-logo.gif',
  },
  {
    title: 'São João - Capim',
    description: 'Animação para campanha publicitária do São João em Capim - PB.',
    gif: '/src/gifs/São João - Capim.gif',
  },
  {
    title: 'Pomodoro.fy',
    description: 'Motion design para um projeto pessoal chamado Pomodoro.fy.',
    gif: '/src/gifs/Pomodoro.gif',
  },
    {
    title: 'Logo Gessimar',
    description: 'Motion design simples para um candidato a vereador da região.',
    gif: '/src/gifs/Gessimar.gif',
  }
];

const Motion = () => {
  return (
    <div className="motion-container">
      <Link to="/" className="back-button">←</Link>
      <h1 className="motion-title">Motion Design</h1>
      <div className="motion-grid">
        {projects.map((project, index) => (
          <div key={index} className="motion-item">
            <img src={project.gif} alt={project.title} />
            <h2 className="motion-name">{project.title}</h2>
            <p className="motion-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Motion;
