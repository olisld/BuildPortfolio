import styled from "styled-components";
// Photo
import ScreenApple from "../../../assets/Screen_Projet/Screen_Apple_Page.png"
import LogoHtml from "../../../assets/logo_langage/HTML5_logo_and_wordmark.svg.png"
import LogoCss from "../../../assets/logo_langage/CSS3_logo_and_wordmark.svg.png"
import LogoVSCode from "../../../assets/logo_langage/visual-studio-code-2019.png"
import LogoOvh from "../../../assets/logo_langage/OVH.PA-635db442.png"
import FigmaLogo from "../../../assets/logo_langage/Figma-logo.svg"
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

const ImgApple = styled.img`
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

function ApplePage() {
    return (
        <Background>
            <Title>Intégration de la page Apple</Title>
            <ImgApple src={ScreenApple} alt="Capture de la page intégrée" />
            <StyledParagraph>
                L’intégration de la page du site Apple.com a été réalisée en début de formation afin de s'exercer à la pratique du HTML et du CSS.
                Ce projet s'est appuyé sur une maquette conçue sur Figma pour guider le développement.
            </StyledParagraph>
            <ContainerDivOutilsLanguage>
                <DivSection>
                    <SectionTitle>Langages utilisés</SectionTitle>
                    <LogoContainer>
                        <LogoLangage src={LogoHtml} alt="HTML5" />
                        <LogoLangage src={LogoCss} alt="CSS3" />
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
                            <ListeTitre>Maquette:</ListeTitre>
                            <ListeTexte>Figma</ListeTexte>
                            <TinyLogo src={FigmaLogo} alt="OVH" />
                        </DisplayListe>
                    </PaddingListe>
                </DivSection>
            </ContainerDivOutilsLanguage>
            <DivLink>
                <h2>
                    Lien utile
                </h2>
                
                <a href="https://github.com/olisld/Bienvenue_formation.git" target="blank">Repository Github</a>
                <a href="https://bienvenueformation.oliviersoulard.com" target="blank">Site Apple-tv</a>
                <a href="https://www.figma.com/file/LXQk71R8iZqpP8GlRaj9Mk" target="blank">Maquette figma</a> 
                
                
            </DivLink>
        </Background>
    );
}

export default ApplePage;
