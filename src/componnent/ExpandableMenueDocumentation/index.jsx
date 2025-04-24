import { useState } from "react";
import styled from "styled-components";
const ArticleContainer = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    width: 100%;
`;
const ArticleText = styled.p`
    margin: 10px 0;
    line-height: 1.6;
    max-height: ${({ expanded }) => (expanded ? "auto" : "60px")};
    overflow: hidden;
    display: flex;
    flex-direction: column;

    transition: max-height 0.3s ease;
`;
const ExpandButton = styled.button`
    background-color: #34495E;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        background-color: #2C3E50;
    }
`;
const ArticleTitle = styled.h3`
    margin: 0;
    color: #34495E;
`;
const ImageSection = styled.div`
    margin-top: 20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    h5 {
        font-size: 1.2rem;
        color: #34495e;
        margin-bottom: 10px;
        margin-top:30px;
    }

    img {
        width: 100%;
        max-width: 600px;
        height: auto;
        border-radius: 8px;
        border: 1px solid #ddd;
        margin-top: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    img:last-child {
        max-width: 1000px; /* Proportions plus grandes pour la dernière image */
    }
`;
const TaskSection = styled.div`
    margin-top: 20px;

    h5 {
        color: #34495e;
        font-size: 1.2rem;
        margin-bottom: 10px;
        border-left: 4px solid #34495e;
        padding-left: 8px;
    }

    ul {
        margin: 0;
        padding: 0 0 0 20px;
        list-style-type: disc;

        li {
            margin: 6px 0;
            font-size: 1rem;
            line-height: 1.5;
            color: #555;
        }
    }
`;
const ExpandableMenuDocumentation = ({title,content,images})=>{
const [expanded,setExpanded]= useState(false)
return(
    <ArticleContainer>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleText expanded={expanded}>
            {content}
            {expanded && (
                <>
                        <TaskSection>
                            <h5>Tâches</h5>
                            <ul>
                                <li>Mise en place d'une authentification utilisateur</li>
                                <li>Création de comptes utilisateur</li>
                                <li>Gestion des sessions en fonction du rôle de l'utilisateur</li>
                                <li>Sécurisation des mots de passe avec une méthode de hachage</li>
                                <li>Fonctionnalités administratives : création, modification et suppression des utilisateurs, classes, matières, et cours</li>
                                <li>Affectation des cours aux emplois du temps</li>
                                <li>Possibilité de signer les cours</li>
                            </ul>
                            <ul>
                                <li>Documentation de la base de données avec la méthode Merise</li>
                                <li>Documentation globale : diagrammes UML, tableau des fonctionnalités, plan de test, documentation utilisateur</li>
                            </ul>
                        </TaskSection>
                        <ImageSection>
                            <h5>Tableau des fonctionnalités</h5>
                            <img src={images[0]} alt="Tableau des fonctionnalités" />
                            <h5>Plan de test</h5>
                            <img src={images[1]} alt="Plan de test" />
                        </ImageSection>
                        <div>
                            <h5>Documentation Utilisateur</h5>
                            
                        </div>
                </>
            )}
        </ArticleText>
        <ExpandButton onClick={()=>setExpanded(!expanded)}>
            {expanded ? "moins": "plus"}
        </ExpandButton>
    </ArticleContainer>
)

}

export default ExpandableMenuDocumentation