import styled from "styled-components"

// photo
import ScreenStep from "../../../assets/Screen_Projet/Screen-station-epuration.png"
import LogoHtml from "../../../assets/logo_langage/HTML5_logo_and_wordmark.svg.png"
import LogoCss from "../../../assets/logo_langage/CSS3_logo_and_wordmark.svg.png"
import LogoVSCode from "../../../assets/logo_langage/visual-studio-code-2019.png"
import LogoOvh from "../../../assets/logo_langage/OVH.PA-635db442.png"
import LogoReactJS from "../../../assets/logo_langage/React-icon.svg.png"
import LogoFirebase from "../../../assets/logo_langage/logoFirebase.png"
//image documentation
import GanttStep from "../../../assets/DiagrammeGannt/DIagrammeGant.png"
import PlandeTest from "../../../assets/PlandeTestStep.png"

// composant
import ExpandableMenuDocumentation from "../../../componnent/ExpandableMenueDocumentation" 
import ExpandableMenueBDD from "../../../componnent/ExpendableMenue2"

// documentation
import TaskSectionStep from "../../../componnent/TaskSection/TaskStep"
import CahierDesChargesBaumette from "../../../componnent/CahhierDesCharges/CahierStep"
import ImageSectionStep from "../../../componnent/ImagesSectionDocumentation/DocumentationStep"

// Documentation UML

import UMLContext from "../../../assets/Diagramme-Uml/Step/DiagrammedecontexteStep.drawio.png"
import UMLClasse from "../../../assets/Diagramme-Uml/Step/DiagrammeClasseStep.drawio.png"
import UMLUser from "../../../assets/Diagramme-Uml/Step/UseCaseStepAngers.drawio.png"

// Documentation Base de donnée
import DictionnairedeDonnée from "../../../assets/Documentation_base_de_donnée/Step/DictionnairedeDonnéeStep.png"
import MCDStep from "../../../assets/Documentation_base_de_donnée/Step/MCDStep.drawio.png"
import MLDStep from "../../../assets/Documentation_base_de_donnée/Step/MLDStep.png"

const Background = styled.div`
    background-color: #2C3E50;
    color: black;
    width: 100%;
    min-height: 100vh; /* Garantit que le fond couvre toute la page */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;
const ImgCalculette = styled.img`
    width: 60%; /* Légèrement plus grand */
    height: auto;
    border-radius: 12px;
    margin-bottom: 30px;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 20px;
`;

const StyledParagraph = styled.p`
    color: white;
    text-align: center;
    line-height: 1.8;
    font-size: 18px;
    margin: 20px 0 40px;
    padding: 0 15%;
`;
const ContainerDivOutilsLanguage = styled.div`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
`;

const DivSection = styled.div`
    width: 45%; /* Ajustable selon la taille des sections */
    background-color: white;
    border: 1px solid #bdc3c7;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SectionTitle = styled.h2`
    font-size: 1.5rem;
    color: #34495E;
    margin-bottom: 20px;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-top:30px;
`;

const LogoLangage = styled.img`
    width: 90px;
    height: 90px;
    object-fit: contain;
    background-color: #f1f1f1;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PaddingListe = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    width: 100%;
`;
const DisplayListe = styled.li`
    display:flex;
    align-items: center; /* Centre les éléments verticalement */
    justify-content: space-between; /* Espace entre les éléments */
    gap: 10px; /* Espace entre les éléments */
    padding: 10px; /* Ajoute de l'espace autour des contenus */
    border-bottom: 1px solid #ddd; /* Optionnel : ajoute une séparation visuelle */
`;

const ListeTitre = styled.h5`
    flex: 1; /* Permet au titre de prendre l'espace disponible */
    margin: 0; /* Supprime les marges par défaut */
    min-width:160px;
    // white-space: nowrap; /* Empêche le retour à la ligne automatique */
`;

const ListeTexte = styled.p`
    flex: 1; /* Permet au texte de prendre tout l'espace disponible */
    margin: 0; /* Supprime les marges par défaut */
    font-size: 14px;
    min-width:60px;
    color: #333;
`;

const TinyLogo = styled.img`
    width: 35px;
    height: auto;
    max-height:35px;
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
function StepSite(){

    const DataUML=[
        {title:"Diagramme de contexte",src:UMLContext},
        {title:"Diagramme de classe",src:UMLClasse},
        {title:"Diagramme utilisateur",src:UMLUser}
    ]

    const DataBDD=[
        {title:"Dictionnaire de données",src:DictionnairedeDonnée},
        {title:"Model Conceptuel de données ",src:MCDStep},
        {title:"Model Logique de données ",src:MLDStep}
    ]
    const DocuImages=[
        GanttStep,
        PlandeTest
    ]
        
    

    return(
        <Background>
            <Title>Site de la station d’épuration de la Baumette</Title>
            <ImgCalculette src={ScreenStep} alt=""/>
            <StyledParagraph>
                Cette application web, développée avec React.js, a été réalisée dans le cadre de mon alternance chez Veolia pour le client Angers Loire Métropole. 
                Elle a pour but d'informer sur la station d'épuration de la Baumette et de proposer un espace de discussion dédié aux visiteurs et professionnels. 
                Conçue en autonomie avec l'appui de mon tuteur et de l'équipe communication, l'application associe clarté, accessibilité et interaction.
            </StyledParagraph>
            <ContainerDivOutilsLanguage>
                <DivSection>
                    <SectionTitle>Langages utilisés</SectionTitle>
                    <LogoContainer>
                        <LogoLangage src={LogoHtml} alt="HTML5" />
                        <LogoLangage src={LogoCss} alt="CSS3" />
                        <LogoLangage src={LogoReactJS} alt="JavaScript"/>
                    </LogoContainer>
                </DivSection>
                <DivSection>
                    <SectionTitle>Outils</SectionTitle>
                    <PaddingListe>
                        <DisplayListe>
                            <ListeTitre>IDE:</ListeTitre>
                            <ListeTexte>VS Code</ListeTexte>
                            <TinyLogo src={LogoVSCode} alt="VS Code" />
                        </DisplayListe>
                        <DisplayListe>
                            <ListeTitre>Hébergement:</ListeTitre>
                            <ListeTexte>OVH</ListeTexte>
                            <TinyLogo src={LogoOvh} alt="OVH" />
                        </DisplayListe>
                        <DisplayListe>
                            <ListeTitre>Base de donnée:</ListeTitre>
                            <ListeTexte>Firebase</ListeTexte>
                            <TinyLogo src={LogoFirebase} alt="OVH" />
                        </DisplayListe>
                    </PaddingListe>
                </DivSection>
            </ContainerDivOutilsLanguage>

            <DivLink>
                <h2>
                    Lien utile
                </h2>
                
                <a href="https://github.com/olisld/STEPLaBaumetteAngers.git" target="blank">Repository Github</a>
                <a href="https://steplabaumetteangers.oliviersoulard.com." target="blank">Site en ligne</a>
                 
                
                
            </DivLink>
            <StyledCompetenceContainer>
                <h2>Compétences associées</h2>
                <CompetenceCard>
                    <h5>Mettre à disposition des utilisateurs un service informatique</h5>
                    <ul>
                        <li>Déployer un service</li>
                    </ul>
                </CompetenceCard>

                <CompetenceCard>
                    <h5>Organiser son développement professionnel</h5>
                    <ul>
                        <li>Mettre en place son environnement d’apprentissage personnel</li>
                        <li>Développer son projet professionnel</li>
                    </ul>
                </CompetenceCard>
                <CompetenceCard>
                    <h5>Répondre aux incidents et aux demandes d’assistance et d’évolution :</h5>
                    <ul>
                        <li>Collecter, suivre et orienter des demande</li>
                        <li>Traiter des demandes concernant les applications</li>
                    </ul>
                </CompetenceCard>
                <CompetenceCard>
                    <h5>Développer la présence en ligne de l’organisation :</h5>
                    <ul>
                        <li>Participer à l’évolution d’un site Web exploitant les données de l’organisation.</li>
                    </ul>
                </CompetenceCard>
                <CompetenceCard>
                    <h5>Travailler en mode projet :</h5>
                    <ul>
                        <li>Analyser les objectifs et les modalités d’organisation d’un projet</li>
                        <li>Planifier les activités</li>
                    </ul>
                </CompetenceCard>
            </StyledCompetenceContainer>
            <ExpandableMenuDocumentation
                title="Documentation"
                content=""
                customSection={
                    <>
                        <TaskSectionStep/>
                        <CahierDesChargesBaumette/>
                        <ImageSectionStep images={DocuImages}/>
                    </>

                }
            
            />
            <ExpandableMenueBDD
                title="Diagramme UML"
                content="J'ai utilisé la modélisation UML pour la documentation du site,voici les diagrammes:"
                images={DataUML}
            />
            <ExpandableMenueBDD
                title="Modelisation base de donnée"
                content="J'ai realisé la documentation de la base de donnée  en utilisant la methode merise. J'ai utilisé des outils tels que draw io et mysql workbench"
                images={DataBDD}
            />
        </Background>

    )
}
export default StepSite