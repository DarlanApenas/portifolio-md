import './About.css';
import { useNavigate, Link } from 'react-router-dom';


const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <Link to="/" className="back-button">←</Link>
      <div className="about-image">
        <img src="/about-image.webp" alt="Sobre mim" />
      </div>

      <div className="about-text">
        <h1>Hello There</h1>
        <p>
          I'm a Freelance Motion Designer / Developer based in Mamanguape, Brazil with a passion for solving problems.
          I try to challenge myself with every new project. I'm obsessed with timing, details and creative freedom.
        </p>
        <p>
          Feel free to reach out — I’m always looking for fun projects to work on!
        </p>
        <p>Email me at <a href="mailto:oi@seudominio.com">sodarlanapenas@gmail.com</a></p>
      </div>
    </div>
  );
};

export default About;
