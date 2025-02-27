//divers
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
//pages
import Home from './pages/home';
import BTS from './pages/BTS_sio';
import Compétences from './pages/competences';
import Entreprise from './pages/entreprise';
import MentionLégal from './pages/mention_legal';
import Missions from './pages/missions';
import Projets from './pages/projets';
import Synthèse from './pages/synthèse';
import Veille from './pages/veille';
//componnent
import Header from './componnent/header';
import Footer from './componnent/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/entreprise' element={<Entreprise/>}/>
        <Route path='/veille' element={<Veille/>}/>
        <Route path='/BTS_sio' element={<BTS/>}/>
        <Route path='/mention_legal' element={<MentionLégal/>}/>
        <Route path='/missions' element={<Missions/>}/>
        <Route path='/projets' element={<Projets/>}/>
        <Route path='/competence' element={<Compétences/>}/>
        <Route path='/synthese' element={<Synthèse/>}/>
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
