import React, { useState } from 'react';
import './parallels.css';

function Parallels() {
    const [selectedPart, setSelectedPart] = useState(null);

    // Données des parties du corps et parallèles avec l'océan
    const parallels = {
        poumons: "Les océans, comme nos poumons, produisent 70 % de l’oxygène que nous respirons grâce au phytoplancton.",
        coeur: "Tout comme le cœur pompe le sang, les océans absorbent 25 % du CO₂ émis, aidant à réguler le climat.",
        foie: "Les polluants marins, à l’image des toxines dans le foie, peuvent nuire à notre santé via la chaîne alimentaire.",
        peau: "L’océan protège, comme la peau, en influençant la couche d’ozone pour filtrer les rayons UV nocifs.",
        sang: "Comme le sang circule dans notre corps, le cycle de l’eau océanique alimente les précipitations, source d’une grande partie de notre eau.",
        estomac: "À l’instar de l’estomac qui nous nourrit, les océans fournissent environ 3 milliards de repas par jour.",
        systemeNerveux: "Les océans, tout comme notre système nerveux, recèlent des secrets pouvant traiter des maladies neurodégénératives.",
    };

    // Gestion de la sélection
    const handleClick = (part) => {
        setSelectedPart(part);
    };

    return (
        <div className="parallels-container">
            <div className="image-container">
                <img src="/corps_humain.png" alt="Corps humain" className="corps-image" />
                {/* Boutons sur les différentes parties du corps */}
                <button className="btn poumons" onClick={() => handleClick('poumons')}>🌬️</button>
                <button className="btn coeur" onClick={() => handleClick('coeur')}>❤️</button>
                <button className="btn foie" onClick={() => handleClick('foie')}>🧪</button>
                <button className="btn peau" onClick={() => handleClick('peau')}>✨</button>
                <button className="btn sang" onClick={() => handleClick('sang')}>💧</button>
                <button className="btn estomac" onClick={() => handleClick('estomac')}>🍴</button>
                <button className="btn systemeNerveux" onClick={() => handleClick('systemeNerveux')}>🧠</button>
            </div>

            {/* Cadre des informations */}
            <div className="info-container">
                {selectedPart ? (
                    <div>
                        <h2>Informations</h2>
                        <p>{parallels[selectedPart]}</p>
                    </div>
                ) : (
                    <p>Sélectionnez une partie du corps pour afficher les informations correspondantes.</p>
                )}
            </div>
        </div>
    );
}

export default Parallels;
