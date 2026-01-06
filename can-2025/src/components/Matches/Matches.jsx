import React from 'react';
import './Matches.css';

function Matches() {
  const matches = [
    {
      id: 1,
      team1: { name: 'Sénégal', flag: '🇸🇳' },
      team2: { name: 'Égypte', flag: '🇪🇬' },
      score1: 2,
      score2: 1,
      status: 'En cours',
      time: "65'",
      stadium: 'Stade Mohammed V'
    },
    {
      id: 2,
      team1: { name: 'Cameroun', flag: '🇨🇲' },
      team2: { name: 'Nigeria', flag: '🇳🇬' },
      score1: 0,
      score2: 0,
      status: 'Mi-temps',
      time: 'MT',
      stadium: 'Stade Hassan II'
    },
    {
      id: 3,
      team1: { name: 'Maroc', flag: '🇲🇦' },
      team2: { name: 'Algérie', flag: '🇩🇿' },
      score1: null,
      score2: null,
      status: 'À venir',
      time: '20:00',
      stadium: 'Stade Prince Moulay Abdellah'
    }
  ];

  return (
    <section className="matches" id="matchs">
      <div className="container">
        <h2>⚽ Matchs du Jour</h2>
        <div className="matches-grid">
          {matches.map(match => (
            <div key={match.id} className={`match-card ${match.status.toLowerCase().replace(' ', '-')}`}>
              <div className="match-header">
                <span className={`match-status ${match.status.toLowerCase().replace(' ', '-')}`}>
                  {match.status}
                </span>
                <span className="match-time">{match.time}</span>
              </div>
              
              <div className="match-teams">
                <div className="team">
                  <span className="team-flag">{match.team1.flag}</span>
                  <span className="team-name">{match.team1.name}</span>
                  <span className="team-score">
                    {match.score1 !== null ? match.score1 : '-'}
                  </span>
                </div>
                
                <div className="vs">VS</div>
                
                <div className="team">
                  <span className="team-score">
                    {match.score2 !== null ? match.score2 : '-'}
                  </span>
                  <span className="team-name">{match.team2.name}</span>
                  <span className="team-flag">{match.team2.flag}</span>
                </div>
              </div>
              
              <div className="match-footer">
                <span className="stadium">📍 {match.stadium}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Matches;