import React from 'react';
import './home.css'; // On ajoutera des styles spécifiques

function Home() {
    return (
        <div className="home-container">
            {/* Titre principal */}
            <header className="home-header">
                <h1>Bienvenue sur <span>Océan & Corps Humain</span></h1>
                <p>
                    Découvrez les parallèles fascinants entre les systèmes océaniques et les fonctions vitales de notre corps.
                </p>
                <a href="/parallels" className="start-button">Explorer maintenant</a>
            </header>

            {/* Section d'information */}
            <section className="home-info">
                <div className="info-card">
                    <h2>70% de l’oxygène</h2>
                    <p>Les océans produisent la majorité de l'oxygène grâce au phytoplancton.</p>
                </div>
                <div className="info-card">
                    <h2>3 milliards de repas</h2>
                    <p>Les océans nourrissent des milliards de personnes chaque jour.</p>
                </div>
                <div className="info-card">
                    <h2>Innovation médicale</h2>
                    <p>De nombreux médicaments proviennent des ressources océaniques.</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
