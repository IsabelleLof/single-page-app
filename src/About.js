import React from 'react';
import illustration from './assets/illustration.jpg';
import './About.css';

function About() {
  return (
    <div>
      <div>
      <a href="illustration">
        <img className="illustration" src={illustration} alt="big"/></a>
      </div>
     <h1>Welcome!</h1>
     <p>This my new single page app!</p>
    </div>
  );
}

export default About;
