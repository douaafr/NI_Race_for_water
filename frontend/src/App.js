import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Parallels from './components/parallels';
import Podcast from './components/podcast';

function App() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/parallels">Parallèles</Link></li>
                    <li><Link to="/podcast">Podcast</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/parallels" element={<Parallels />} />
                <Route path="/podcast" element={<Podcast />} />
            </Routes>
        </div>
    );
}

export default App;
