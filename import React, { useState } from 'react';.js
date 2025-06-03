import React, { useState } from 'react';

const GiocoCanzone = () => {
  const [team1Name, setTeam1Name] = useState('');
  const [team2Name, setTeam2Name] = useState('');
  const [startingTeam, setStartingTeam] = useState(null);

  const handleStartGame = () => {
    if (team1Name =="" || team1Name =="") {
      alert('Per favore, inserisci i nomi di entrambe le squadre!');
      return;
    }
    
    if (!startingTeam) {
      alert('Per favore, seleziona quale squadra inizia!');
      return;
    }

    // Reindirizza alla pagina del gioco
    window.location.href = '/canzone-1';
  };

  return (
    <div className="game-container">
      <h1>🎬 Continua la Canzone 🎶</h1>
      
      <div className="setup-screen">
        <div className="team-input">
          <input
            type="text"
            value={team1Name}
            onChange={(e) => setTeam1Name(e.target.value)}
            placeholder="Nome della Squadra 1"
          />
        </div>
        
        <div className="team-input">
          <input
            type="text"
            value={team2Name}
            onChange={(e) => setTeam2Name(e.target.value)}
            placeholder="Nome della Squadra 2"
          />
        </div>

        <div className="starting-team">
          <p>Chi inizia?</p>
          <button 
            onClick={() => setStartingTeam(1)}
            className={startingTeam === 1 ? 'selected' : ''}
          >
            Squadra 1 inizia
          </button>
          <button 
            onClick={() => setStartingTeam(2)}
            className={startingTeam === 2 ? 'selected' : ''}
          >
            Squadra 2 inizia
          </button>
        </div>

        <button 
          className="start-game-button"
          onClick={handleStartGame}
        >
          Inizia il gioco
        </button>
      </div>
    </div>
  );
};

export default GiocoCanzone;
