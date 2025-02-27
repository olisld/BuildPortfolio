import styled from "styled-components"
import { Link } from "react-router-dom"
import colors from "../../outils/color"
import patrimoine from "../../assets/competences_assets/patrimoine_informatique.webp"
import assistance from "../../assets/competences_assets/Répondre_aux_assistances_d_evolution.webp"
import presence_en_ligne from "../../assets/competences_assets/developper_presence_en_ligne_organisation.webp"
import projet from "../../assets/competences_assets/Mode-projet.jpg"
import disposition from "../../assets/competences_assets/disposition_utilisateur.webp"
import développement_professionel from "../../assets/competences_assets/développement_professionel.jpg"
const StyledFullPage =styled.div`
    height:100%;
    width:100%;
`
const StyledFlex = styled.div`
    display:flex;
    justify-content:space-around;
    flex-wrap: wrap; /* Permet de revenir à la ligne */
    gap: 20px; /* Optionnel : Espace entre les éléments */
`

const SyledDivCompétence = styled.div`

    display:flex;
    background-color:${colors.primary};
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:500px;
    height:auto;
    margin-bottom:50px;
    margin-top:50px;
    border-radius:10px;
`
const StyledTitle = styled.h1`
    margin:10px;
    padding:10px;
    color:white;
    text-align:center;
`
const StyledLink =styled(Link)`
    margin:10px;
    padding:10px;
    color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
` 

const StyledImg = styled.img`
    border-radius:40px;
    height:80px;
    width:80px;
    transition: all 0.3s ease-in-out;
    &:hover{
        border-radius:10px;
        height:100px;
        width:100px;
    }
`
const StyledLien = styled.h4`
    display:flex;
    justify-content:center;
`

function Compétences(){

    return(

        <StyledFullPage>

            <StyledFlex>

                <SyledDivCompétence>
                    <StyledTitle>Gérer le Patrimoine Informatique</StyledTitle>
                    
                    <StyledLink>
                        <StyledImg src={patrimoine} alt="patrimoine informatique" />
                        <StyledLien>Projet x</StyledLien>
                    </StyledLink>
                </SyledDivCompétence>

                <SyledDivCompétence>
                    <StyledTitle>
                        Répondre aux incidents et aux demandes d'assistance d'évolution
                    </StyledTitle>
                    <StyledLink>
                        <StyledImg src={assistance} alt="assistance" />
                       <StyledLien>Projet c</StyledLien> 
                    </StyledLink>
                </SyledDivCompétence>

                <SyledDivCompétence>
                    <StyledTitle>   
                        Développer la présence en ligne de l'organisation
                    </StyledTitle>
                    
                    <StyledLink>
                        <StyledImg src={presence_en_ligne} alt="presence_en_ligne" />
                        <StyledLien>Projet y</StyledLien>
                    </StyledLink>
                </SyledDivCompétence>
                                                                                              
                <SyledDivCompétence>
                    <StyledTitle>Travailler en mode projet</StyledTitle>
                                            
                    <StyledLink>
                        <StyledImg src={projet} alt="projet" />
                        <StyledLien>Projet z</StyledLien>
                    </StyledLink>
                </SyledDivCompétence>

                <SyledDivCompétence>
                    <StyledTitle>
                        Mettre à disposition des utilisateurs un servive informatique
                    </StyledTitle>
                    <StyledLink>
                        <StyledImg src={disposition} alt="disposition" />
                        <StyledLien>Projet a</StyledLien>
                    </StyledLink>
                </SyledDivCompétence>

                <SyledDivCompétence>
                    <StyledTitle>
                        Organiser son développement proffessionnel
                    </StyledTitle>
                  
                    <StyledLink>  
                        <StyledImg src={développement_professionel} alt="développement_professionel" />
                        <StyledLien>Projet b</StyledLien>
                    </StyledLink>
                </SyledDivCompétence>

            </StyledFlex>

        </StyledFullPage>
    )
}


export default Compétences