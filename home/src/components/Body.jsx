import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <main className="body-content">
      {/* Quick Stats */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">24</div>
            <div className="stat-label">ÉQUIPES</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">6</div>
            <div className="stat-label">STADES</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">52</div>
            <div className="stat-label">MATCHS</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4</div>
            <div className="stat-label">GROUPES</div>
          </div>
        </div>
      </section>

      {/* Featured Matches */}
      <section className="featured-section">
        <div className="section-header">
          <h2>PROCHAINS MATCHS</h2>
          <div className="header-line"></div>
        </div>
        
        <div className="matches-container">
          <div className="match-card">
            <div className="match-date">
              <span className="date-day">21</span>
              <span className="date-month">DÉC</span>
            </div>
            <div className="match-details">
              <div className="match-teams">
                <div className="team">
                  <div className="team-flag">🇲🇦</div>
                  <span className="team-name">MAROC</span>
                </div>
                <div className="match-vs">VS</div>
                <div className="team">
                  <div className="team-flag">🇹🇿</div>
                  <span className="team-name">TANZANIE</span>
                </div>
              </div>
              <div className="match-info">
                <span className="match-time">20:00</span>
                <span className="match-venue">Stade Mohammed V, Casablanca</span>
              </div>
            </div>
          </div>

          <div className="match-card">
            <div className="match-date">
              <span className="date-day">22</span>
              <span className="date-month">DÉC</span>
            </div>
            <div className="match-details">
              <div className="match-teams">
                <div className="team">
                  <div className="team-flag">🇪🇬</div>
                  <span className="team-name">ÉGYPTE</span>
                </div>
                <div className="match-vs">VS</div>
                <div className="team">
                  <div className="team-flag">🇬🇭</div>
                  <span className="team-name">GHANA</span>
                </div>
              </div>
              <div className="match-info">
                <span className="match-time">17:00</span>
                <span className="match-venue">Stade Prince Moulay Abdellah, Rabat</span>
              </div>
            </div>
          </div>

          <div className="match-card">
            <div className="match-date">
              <span className="date-day">22</span>
              <span className="date-month">DÉC</span>
            </div>
            <div className="match-details">
              <div className="match-teams">
                <div className="team">
                  <div className="team-flag">🇸🇳</div>
                  <span className="team-name">SÉNÉGAL</span>
                </div>
                <div className="match-vs">VS</div>
                <div className="team">
                  <div className="team-flag">🇨🇮</div>
                  <span className="team-name">CÔTE D'IVOIRE</span>
                </div>
              </div>
              <div className="match-info">
                <span className="match-time">20:00</span>
                <span className="match-venue">Stade Adrar, Agadir</span>
              </div>
            </div>
          </div>
        </div>

        <button className="view-all-btn">VOIR TOUS LES MATCHS</button>
      </section>

      {/* News Section */}
      <section className="news-section">
        <div className="section-header">
          <h2>ACTUALITÉS</h2>
          <div className="header-line"></div>
        </div>

        <div className="news-grid">
          <article className="news-card main-news">
            <div className="news-image-wrapper">
              <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800" alt="Match" />
              <div className="news-category">COMPÉTITION</div>
            </div>
            <div className="news-content">
              <span className="news-date">5 JANVIER 2025</span>
              <h3>Le tirage au sort des phases finales dévoilé</h3>
              <p>Les 24 équipes qualifiées connaissent désormais leurs adversaires pour la phase de groupes de la CAN 2025 au Maroc.</p>
              <a href="#" className="read-more">LIRE L'ARTICLE →</a>
            </div>
          </article>

          <article className="news-card">
            <div className="news-image-wrapper">
              <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400" alt="Stade" />
              <div className="news-category">INFRASTRUCTURE</div>
            </div>
            <div className="news-content">
              <span className="news-date">4 JANVIER 2025</span>
              <h3>Les stades marocains prêts</h3>
              <p>Visite des installations ultramodernes qui accueilleront les matchs.</p>
              <a href="#" className="read-more">LIRE L'ARTICLE →</a>
            </div>
          </article>

          <article className="news-card">
            <div className="news-image-wrapper">
              <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=400" alt="Équipe" />
              <div className="news-category">ÉQUIPES</div>
            </div>
            <div className="news-content">
              <span className="news-date">3 JANVIER 2025</span>
              <h3>Les favoris se préparent</h3>
              <p>Analyse des forces en présence pour cette édition 2025.</p>
              <a href="#" className="read-more">LIRE L'ARTICLE →</a>
            </div>
          </article>

          <article className="news-card">
            <div className="news-image-wrapper">
              <img src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400" alt="Fans" />
              <div className="news-category">BILLETTERIE</div>
            </div>
            <div className="news-content">
              <span className="news-date">2 JANVIER 2025</span>
              <h3>Billetterie ouverte</h3>
              <p>Comment acheter vos places pour assister aux matchs.</p>
              <a href="#" className="read-more">LIRE L'ARTICLE →</a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Body;