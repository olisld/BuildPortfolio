import styled from "styled-components"
import { Link } from "react-router-dom"


function Projets(){

    return(
        <div>
            <h1>Projets</h1>
            <ul>
                <li>Intégration apple tv</li>
                <li><a href="https://github.com/olisld/projet.git">Apple page</a>
                </li>
                <li>Calculatrice immobilière</li>
                <li><a href="https://github.com/olisld/calculatrice_de_pr-t_immobilier.git">Calculatrice immobilière</a></li>    
                <li>Projet Bienvenue formation</li>
                <li><a href="https://github.com/olisld/Bienvenue_formation.git">Bienvenue formation</a>
                </li>
                <li>Projet Laravel</li>
                <li>Aprentissage de react js en développant un site de vente de plante en react</li>
                <li><a href="https://github.com/olisld/La-maison-jungle.git">La maison jungle</a></li>
                <li>Approfondissement de react js en dévelopant un site de prospect une shiny agency</li>
                <li><a href="https://github.com/olisld/Shiny-agency.git">Shiny agency</a></li>
            </ul>
            <h1>Side Projets</h1>
            <ul>
                <li>Tour de hanoi</li>
                <li><a href="https://github.com/olisld/Tour_de_hanoi.git">Tour de hanoi</a></li>
                <li>petits projet javascript microlead</li>
                <li>Projet gestion d'un menu en fonction des utilisateurs</li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}
export default Projets