import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <main className="body-content">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">CAN 2025</h1>
          <p className="hero-subtitle">Coupe d'Afrique des Nations - Maroc 2025</p>
          <button className="cta-button">Voir le Calendrier</button>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="info-cards">
        <div className="container">
          <div className="card">
            <div className="card-icon">🏆</div>
            <h3>Compétition</h3>
            <p>24 équipes participent à la plus grande compétition africaine</p>
          </div>
          
          <div className="card">
            <div className="card-icon">📅</div>
            <h3>Dates</h3>
            <p>Du 21 Décembre 2024 au 18 Janvier 2025</p>
          </div>
          
          <div className="card">
            <div className="card-icon">🇲🇦</div>
            <h3>Pays Hôte</h3>
            <p>Maroc - 6 villes accueillent les matchs</p>
          </div>
        </div>
      </section>

      {/* Featured Matches Section */}
      <section className="featured-matches">
        <div className="container">
          <h2 className="section-title">Matchs à Venir</h2>
          <div className="matches-grid">
            <div className="match-card">
              <div className="match-date">21 Déc 2024 - 20:00</div>
              <div className="match-teams">
                <div className="team">
                  <img src="/images/flag-placeholder.png" alt="Équipe 1" />
                  <span>Équipe 1</span>
                </div>
                <div className="vs">VS</div>
                <div className="team">
                  <img src="/images/flag-placeholder.png" alt="Équipe 2" />
                  <span>Équipe 2</span>
                </div>
              </div>
              <div className="match-stadium">Stade Mohammed V, Casablanca</div>
            </div>

            <div className="match-card">
              <div className="match-date">22 Déc 2024 - 17:00</div>
              <div className="match-teams">
                <div className="team">
                  <img src="/images/flag-placeholder.png" alt="Équipe 3" />
                  <span>Équipe 3</span>
                </div>
                <div className="vs">VS</div>
                <div className="team">
                  <img src="/images/flag-placeholder.png" alt="Équipe 4" />
                  <span>Équipe 4</span>
                </div>
              </div>
              <div className="match-stadium">Stade Prince Moulay Abdellah, Rabat</div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="container">
          <h2 className="section-title">Dernières Actualités</h2>
          <div className="news-grid">
            <article className="news-card">
              <img src="/images/news-placeholder.jpg" alt="Actualité" />
              <div className="news-content">
                <span className="news-date">5 Jan 2025</span>
                <h3>Titre de l'actualité 1</h3>
                <p>Description courte de l'actualité concernant la CAN 2025...</p>
                <a href="#" className="read-more">Lire plus →</a>
              </div>
            </article>

            <article className="news-card">
              <img src="/images/news-placeholder.jpg" alt="Actualité" />
              <div className="news-content">
                <span className="news-date">4 Jan 2025</span>
                <h3>Titre de l'actualité 2</h3>
                <p>Description courte de l'actualité concernant la CAN 2025...</p>
                <a href="#" className="read-more">Lire plus →</a>
              </div>
            </article>

            <article className="news-card">
              <img src="/images/news-placeholder.jpg" alt="Actualité" />
              <div className="news-content">
                <span className="news-date">3 Jan 2025</span>
                <h3>Titre de l'actualité 3</h3>
                <p>Description courte de l'actualité concernant la CAN 2025...</p>
                <a href="#" className="read-more">Lire plus →</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Body;