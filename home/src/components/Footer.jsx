import React, { useState } from 'react'
import './footer.css'

export default function Footer() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        setMessage("Merci ! Vous êtes inscrit(e) à la newsletter.")
        setEmail('')
        setTimeout(() => setMessage(''), 5000)
    }

    return (
        <footer className="site-footer" role="contentinfo">
            <div className="footer-container">
                <div className="footer-brand">
                    <div>
                        <h2>Coupe d'Afrique des Nations</h2>
                        <p className="muted">Toute l'actualité, les résultats et l'histoire de la CAN.</p>
                    </div>
                </div>

                <nav className="footer-nav" aria-label="Liens rapides">
                    <ul>
                        <li><a href="/news">New</a></li>
                        <li><a href="/videos">Calendrier</a></li>
                        <li><a href="/calenrier">Calendrier</a></li>
                        <li><a href="/equipes">Équipes</a></li>
                    </ul>
                </nav>

                <div className="newsletter">
                    <h3>Newsletter</h3>
                    <p className="muted">Recevez les dernières informations sur la CAN.</p>
                    <form className="newsletter-form" onSubmit={handleSubmit} aria-label="Formulaire d'abonnement">
                        <label htmlFor="email" className="sr-only">Adresse e-mail</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="votre@exemple.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">S'abonner</button>
                    </form>
                    {message && <p className="message" role="status">{message}</p>}
                </div>

                <div className="social">
                    <h3>Suivez-nous</h3>
                    <ul className="social-list">
                        <li>
                            <a href="#" aria-label="Twitter" title="Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 5.92c-.6.27-1.3.45-2 .53.72-.43 1.28-1.12 1.54-1.94-.67.4-1.4.7-2.18.86C18.3 4.4 17.04 4 15.7 4c-2.2 0-3.98 1.78-3.98 3.98 0 .31.04.62.1.91C8.1 8.7 5.34 7.1 3.46 4.8c-.34.58-.54 1.25-.54 1.96 0 1.36.7 2.56 1.76 3.27-.65-.02-1.25-.2-1.78-.5v.05c0 1.9 1.35 3.48 3.14 3.84-.33.09-.67.14-1.02.14-.25 0-.5-.02-.74-.07.5 1.57 1.95 2.7 3.67 2.73-1.35 1.05-3.05 1.67-4.9 1.67-.32 0-.63-.02-.94-.06C6.9 20.6 8.6 21 10.4 21c6.84 0 10.58-5.66 10.58-10.57v-.48c.72-.52 1.3-1.18 1.78-1.93-.66.29-1.36.49-2.09.58.75-.45 1.32-1.15 1.59-1.98z" fill="#fff" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="Facebook" title="Facebook">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.3c0-2.2 1.3-3.4 3.3-3.4.96 0 1.96.17 1.96.17v2.2h-1.13c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.9h-2.1v7A10 10 0 0022 12z" fill="#fff"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="Instagram" title="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.2A4.8 4.8 0 1016.8 13 4.8 4.8 0 0012 8.2zm6.4-3.6a1.2 1.2 0 11-1.2-1.2 1.2 1.2 0 011.2 1.2z" fill="#fff" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Coupe d'Afrique des Nations — Tous droits réservés.</p>
                <p className="muted-links"><a href="/mentions">Mentions légales</a> · <a href="/contact">Contact</a></p>
            </div>
        </footer>
    )
}
