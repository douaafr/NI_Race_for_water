import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 utilise cette syntaxe
import { BrowserRouter } from 'react-router-dom'; // Import du routeur
import App from './App'; // Import du composant principal
import './index.css'; // Import du fichier de styles (optionnel)

const root = ReactDOM.createRoot(document.getElementById('root')); // Crée la racine React
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
