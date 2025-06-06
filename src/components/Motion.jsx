import React from 'react';
import './Motion.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: '4AM Records',
    description: 'Animação da logo da gravadora 4AM.',
    gif: '/4am-logo.gif',
  },
  {
    title: 'São João - Capim',
    description: 'Animação para campanha publicitária do São João em Capim - PB.',
    gif: '/São João - Capim.gif',
  },
  {
    title: 'Pomodoro.fy',
    description: 'Motion design para um projeto pessoal chamado Pomodoro.fy.',
    gif: '/Pomodoro.gif',
  },
    {
    title: 'Logo Gessimar',
    description: 'Animação para campanha publicitária para um candidato a vereador da região.',
    gif: '/Gessimar.gif',
  },
      {
    title: 'Tea Animation',
    description: 'Animação pessoal para um projeto de chá.',
    gif: '/Tea.gif',
  },
      {
    title: 'Verificado',
    description: 'Animação simples do emoji verificado.',
    gif: '/Verificado.gif',
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
