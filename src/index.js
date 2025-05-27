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
// project page
import CalculetteImmoProject from './pages/page_projet/calculette_immo';
import BFProject from './pages/page_projet/Bienvenue_formation';
import ApplePage from './pages/page_projet/Apple';
import Portfolio from './pages/page_projet/Portfolio';
import LamaisonJungle from './pages/page_projet/La_maison_jungle';
import ShinyAgency from './pages/page_projet/ShinyAgency';
import GMAO from './pages/page_projet/GMAO';
import StepSite from './pages/page_projet/STEPsite';

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
        <Route path='Apple'element={<ApplePage/>}/>
        <Route path='Calculette' element={<CalculetteImmoProject/>}/>
        <Route path='Bienvenue_formation' element={<BFProject/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/LamaisonJungle' element={<LamaisonJungle/>}/>
        <Route path='/ShinyAgency' element={<ShinyAgency/>}/>
        <Route path='/GMAO' element={<GMAO/>}/>
        <Route path='/STEP'element={<StepSite/>} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
