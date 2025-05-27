import styled from "styled-components"

// Photo
import ScreenLaMaisonJungle from "../../../assets/Screen_Projet/Screen_la_maison_Jungle.png"
import LogoHtml from "../../../assets/logo_langage/HTML5_logo_and_wordmark.svg.png"
import LogoCss from "../../../assets/logo_langage/CSS3_logo_and_wordmark.svg.png"
import LogoVSCode from "../../../assets/logo_langage/visual-studio-code-2019.png"
import LogoOvh from "../../../assets/logo_langage/OVH.PA-635db442.png"
import LogoReactJS from "../../../assets/logo_langage/React-icon.svg.png"
// componnent
import ExpandableMenuDocumentation from "../../../componnent/ExpandableMenueDocumentation"

// documentation
import TaskSectionLaMaisonJungle from "../../../componnent/TaskSection/TaskLaMaisonJungle"
import DocumentationUtilisateurMaisonJungle from "../../../componnent/DocumentaionUtilisateur/DocumentationUtilisateurLaMaisonJungle"

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
function LamaisonJungle(){
    return(

        <Background>
            <Title>La maison Jungle</Title>
            <ImgCalculette src={ScreenLaMaisonJungle} alt=""/>
            <StyledParagraph>
                Le projet La Maison Jungle a été réalisé en dehors de ma formation, en m'appuyant sur les cours React JS proposés par OpenClassrooms. Ce projet m’a permis de renforcer mes compétences en React et de me familiariser avec la gestion des composants, des états et des props.
                
                L’application, qui simule une boutique de plantes, propose une liste d’articles avec un système de panier interactif, offrant ainsi une expérience utilisateur fluide et dynamique.
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
                    </PaddingListe>
                </DivSection>
            </ContainerDivOutilsLanguage>

            <DivLink>
                <h2>
                    Lien utile
                </h2>
                
                <a href="https://github.com/olisld/La-maison-jungle.git" target="blank">Repository Github</a>
                 
                
                
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
                    </ul>
                </CompetenceCard>
            </StyledCompetenceContainer>
            <ExpandableMenuDocumentation
                title="Documentation"
                content=""
                customSection={
                    <>
                        <TaskSectionLaMaisonJungle/>
                        <DocumentationUtilisateurMaisonJungle/>
                    </>

                }
            
            />
        </Background>

    )
}
export default LamaisonJungle
