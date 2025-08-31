import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Rocket, Sun, Moon } from 'lucide-react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className="container">
      <div className="toggle-wrapper">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="toggle-button"
          title="Toggle theme"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>

      <div className="card">
        <div className="icon-title">
          <div className="icon-circle">
            <Rocket size={24} color="#fff" />
          </div>
          <h1>React + Vite AWS Deployment</h1>
        </div>

        <p>
          This page demonstrates an automated deployment using a <strong>CI/CD pipeline</strong> powered by
          GitHub Actions and <strong>AWS S3 static website hosting</strong>.
        </p>

        <p>Go to my GitHub for more details:</p>

        <a
          className="github-button"
          href="https://github.com/aaryankumar19/devops-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
          <span>GitHub</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}

export default App;
