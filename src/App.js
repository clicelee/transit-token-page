import React, { useState, useEffect } from 'react';
import './App.css';
import dartLogo from './assets/dart-logo.svg';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const secondsStr = seconds < 10 ? '0' + seconds : seconds;
    return `${hours}:${minutesStr}:${secondsStr} ${ampm}`;
  };

  return (
    <div className="app">
      <div className="ticket-container">
        <div className="header">
          <div className="header-text">
            <h1 className="title">DART</h1>
            <p className="subtitle">Show operator your ticket</p>
          </div>
          <button className="close-button">✕</button>
        </div>

        <div className="token-circle-container">
          <svg className="progress-ring" width="280" height="280">
            <circle
              className="progress-ring-circle"
              stroke="#1e3a8a"
              strokeWidth="32"
              fill="transparent"
              r="124"
              cx="140"
              cy="140"
            />
          </svg>
          <div className="token-logo">
            <img src={dartLogo} alt="DART Logo" />
          </div>
        </div>

        <div className="time-display">
          {formatTime(currentTime)}
        </div>

        <div className="wsu-badge">
          WSU
        </div>

        <div className="ticket-info-card">
          <h2 className="ticket-name">WayneRide Fall 2025 - 4 Hour</h2>
          <p className="ticket-location">Detroit, MI</p>
          <p className="ticket-expiry">Expires Nov 7, 2025 at 1:22 AM</p>
        </div>
      </div>
    </div>
  );
}

export default App;

