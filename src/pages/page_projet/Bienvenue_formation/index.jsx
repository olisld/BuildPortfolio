
import styled from "styled-components"
// photo
import ScreenBF from "../../../assets/Screen_Projet/Screen_Bienvenue_formation.png"
import LogoPhp from "../../../assets/logo_langage/PHP-logo.svg.png"
import LogoHtml from "../../../assets/logo_langage/HTML5_logo_and_wordmark.svg.png"
import LogoCss from "../../../assets/logo_langage/CSS3_logo_and_wordmark.svg.png"
import LogoVSCode from "../../../assets/logo_langage/visual-studio-code-2019.png"
import LogoMYSql from "../../../assets/logo_langage/png-clipart-mysql-database-graphics-microsoft-access-logo-blue-web-design-thumbnail.png"
import LogoOvh from "../../../assets/logo_langage/OVH.PA-635db442.png"

// Composant
import ExpandableMenu from "../../../componnent/ExpendableMenue"
import ExpandableMenueBDD from "../../../componnent/ExpendableMenue2"
import ExpandableMenuDocumentation from "../../../componnent/ExpandableMenueDocumentation"

// Diagramme UML:USER
import DiagrammeUser from "../../../assets/Diagramme-Uml/DiagrammeUserSignatureAuthent.drawio.svg"
import DiagrammeUserMatiereUser from "../../../assets/Diagramme-Uml/DiagrammeUserMatièreUser.drawio.svg"
import DiagrammeUSerCours from "../../../assets/Diagramme-Uml/DiagrammeUserCours.drawio.svg"
import DiagrammeContext from "../../../assets/Diagramme-Uml/DiagrammeContexte.drawio.svg"
import DiagrammePackage from "../../../assets/Diagramme-Uml/DiagrammePackage.drawio.svg"

// Images Documentation base dedonnée
import DictionnaireDonnée from "../../../assets/Documentation_base_de_donnée/DictionnairedeDonnéeBienvenueFormation.png"
import MCD from "../../../assets/Documentation_base_de_donnée/ModelConceptueldeDonnéeBienvenueFormation.drawio.svg"
import MLD from "../../../assets/Documentation_base_de_donnée/MLDBienvenueFormation.png"
import MPD from "../../../assets/Documentation_base_de_donnée/MPDBienvenueFormation.png"

// Images Documentation globale

import TableauFonctionalité from "../../../assets/Tableau_de_fonctionalité_Bienvenue_formation.png"
import PlanDeTest from "../../../assets/plan_de_test_bienvenue_formation.png"
const Background = styled.div`
    background-color:#34495E;
    color:black;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const StyledParagraph = styled.p`
    color: white;
    text-align: center;
    line-height: 1.6;
    font-size: 16px;
    margin: 20px 0;
    padding: 0 10%;
`;

const ImgBienvenue =styled.img`
    width:50%;
    height:auto;
    border-radius:8px;
    margin-bottom:20px;
`
const Divlangage =styled.div`
    width:50%;
    height:auto;
    padding:10px;
    background-color:white;
    border:2px solid black;
    border-radius:8px;
    display:flex;
    flex-direction:column;
    align-items:center;

`
const DivOutils = styled.div`
    width:50%;
    height:auto;
    padding:10px;
    background-color:white;
    border:2px solid black;
    border-radius:8px;
`

const ContainerDivOutilsLanguage = styled.div`
    display:flex;
    gap:20px;
    width:80%;

`
const LogoLangage =styled.img`
    width:80px;
    height:80px;
    object-fit: contain; /* Maintient les proportions dans un cadre carré */
    background-color: #f9f9f9; /* Optionnel : ajoute un fond clair pour contraste */
    border-radius: 8px; /* Optionnel : coins arrondis */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optionnel : ombrage */
    border: 1px solid #ddd; /* Optionnel : bordure légère */
`
const LogoContainer= styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 10px;
`
const TinyLogo =styled.img`
    width:30px;
    height:auto;
`
const DisplayListe = styled.li`
    display:flex;
    align-items: center; /* Centre les éléments verticalement */
    justify-content: space-between; /* Espace entre les éléments */
    gap: 10px; /* Espace entre les éléments */
    padding: 10px; /* Ajoute de l'espace autour des contenus */
    border-bottom: 1px solid #ddd; /* Optionnel : ajoute une séparation visuelle */
`
const PaddingListe =styled.ul`
    padding:0;
    margin:0;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const ListeTitre = styled.h5`
    flex: 1; /* Permet au titre de prendre l'espace disponible */
    margin: 0; /* Supprime les marges par défaut */
    min-width:160px;
    // white-space: nowrap; /* Empêche le retour à la ligne automatique */
`
const ListeTexte = styled.p`
    flex: 1; /* Permet au texte de prendre tout l'espace disponible */
    margin: 0; /* Supprime les marges par défaut */
    font-size: 14px;
    min-width:60px;
    color: #333;
`;

const DivLink = styled.div`
  width: 50%;
  background-color: white;
  border: 2px solid black;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  h2 {
    font-size: 1.5rem;
    color: #34495E;
    margin-bottom: 1rem;
    text-align: center;
  }

  a {
    font-size: 1rem;
    color: #007BFF;
    text-decoration: none;
    margin: 10px 0;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      color: white;
      background-color: #007BFF;
      border-color: #0056b3;
      transform: scale(1.05);
    }
  }
`;

const StyledCompetenceContainer = styled.div`
  width: 80%;
  background-color: white;
  border: 2px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CompetenceCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  h5 {
    color: #34495E;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      color: #555;
      font-size: 1rem;
      padding: 5px 0;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: none;
      }
    }
  }
`;


function BFProject(){
    const DataBDD =[
        {title:"Dictionnaire de Données",src:DictionnaireDonnée},
        {title:"Model Conceptuel de Données",src:MCD},
        {title:"Model Logique de Données",src:MLD},
        {title:"Model Physique de Données",src:MPD}
        
    ]

    const DocuImages=[
        TableauFonctionalité,
        PlanDeTest
    ]

    return(

        <Background>
            <h1>Bienvenue formation</h1>
            <ImgBienvenue src={ScreenBF} alt="" />
            <StyledParagraph>Bienvenue Formation est un projet académique inspiré de l'application de signature de présence 
                utilisée à My Digital School. L'application offre des fonctionnalités adaptées à trois types 
                d'utilisateurs : administrateurs, élèves et professeurs. Chaque utilisateur a accès à des 
                interfaces spécifiques pour répondre à ses besoins.
            </StyledParagraph>
            <ContainerDivOutilsLanguage>
                <Divlangage>
                    <h2>Langage utilisé</h2>
                    <LogoContainer>
                        <LogoLangage src={LogoPhp} alt="" />
                        <LogoLangage src={LogoHtml}alt=""/>
                        <LogoLangage src={LogoCss}alt=""/>
                    </LogoContainer>
                </Divlangage>
                <DivOutils>
                    <PaddingListe>
                        <DisplayListe>
                            <ListeTitre>IDE:</ListeTitre>
                            <ListeTexte>VS Code</ListeTexte>
                            <TinyLogo src={LogoVSCode} alt="logo" />
                        </DisplayListe>
                        <DisplayListe>
                            <ListeTitre>Base de donnée:</ListeTitre>
                            <ListeTexte>MySql</ListeTexte>
                            <TinyLogo src={LogoMYSql} alt="logo" />
                        </DisplayListe>
                        <DisplayListe>
                            <ListeTitre>Hébergement:</ListeTitre>
                            <ListeTexte>OVH</ListeTexte>
                            <TinyLogo src={LogoOvh} alt="logo" />
                        </DisplayListe>
                    </PaddingListe>
                </DivOutils>
            </ContainerDivOutilsLanguage>
            
            <DivLink>
                <h2>
                    Lien utile
                </h2>
                
                <a href="https://github.com/olisld/Bienvenue_formation.git">Repository Github</a>
                <a href="bienvenueformation.oliviersoulard.com">Site Bienvenue formation</a> 
                
                
            </DivLink>
            
            <StyledCompetenceContainer>
                <h2>Compétences associées</h2>

                <CompetenceCard>
                    <h5>Mettre en place et gérer le patrimoine informatique</h5>
                    <ul>
                        <li>Mettre en place et vérifier les niveaux d’habilitation associés à un service</li>
                    </ul>
                </CompetenceCard>

                <CompetenceCard>
                    <h5>Mettre à disposition des utilisateurs un service informatique</h5>
                    <ul>
                        <li>Déployer un service</li>
                        <li>Réaliser les tests d’intégration et d’acceptation d’un service</li>
                    </ul>
                </CompetenceCard>

                <CompetenceCard>
                    <h5>Organiser son développement personnel</h5>
                    <ul>
                        <li>Mettre en place son environnement d’apprentissage personnel</li>
                        <li>Développer son projet professionnel</li>
                    </ul>
                </CompetenceCard>

                <CompetenceCard>
                    <h5>Travailler en mode projet</h5>
                    <ul>
                        <li>Analyser les objectifs et les modalités d’organisation d’un projet</li>
                    </ul>
                </CompetenceCard>
            </StyledCompetenceContainer>
            

            <ExpandableMenuDocumentation
                title="Documentation"
                content=""
                images={DocuImages}
            />
            <ExpandableMenu
                title="Diagramme UML"
                content="J'ai utilisé la modélisation UML pour la documentation du site,voici les diagrammes:"
                images={[
                    DiagrammeUser,
                    DiagrammeUserMatiereUser,
                    DiagrammeUSerCours
                ]}
                image2={DiagrammeContext}
                image3={DiagrammePackage}
            />
            <ExpandableMenueBDD
           
                title="Modelisation base de donnée"
                content="J'ai realisé la documentation de la base de donnée  en utilisant la methode merise. J'ai utilisé des outils tels que draw io et mysql workbench"
                images={DataBDD}
            
            />
            

            
        </Background>
        
    )
}
export default BFProject