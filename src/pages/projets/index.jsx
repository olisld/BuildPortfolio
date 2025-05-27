import styled from "styled-components";
import { Link } from "react-router-dom";

// Logos
import LogoApple from "../../assets/logo_projet/Apple-logo.png";
import LogoCalculetteImo from "../../assets/logo_projet/immo-calculette-logo2.png";
import LogoBienvenueFormation from "../../assets/logo_projet/bienvenueformationLogo.png";
import LogoMaisonJungle from "../../assets/logo_projet/Logo_Maison_jungle.png";
import LogoShinyAgency from "../../assets/logo_projet/logo.svg";
import LogoPortfolio from "../../assets/logo_projet/logoPortfolio.png"
import LogoGMAO from "../../assets/logo_projet/logo-aq-manager-gmao.jpg"
import LogoStep from "../../assets/logo_projet/StepLogo.png"
// Screens
import ScreenApple from "../../assets/Screen_Projet/Screen_Apple_Page.png";
import ScreenCalcImmo from "../../assets/Screen_Projet/Screen_calculatrice_immo.png";
import ScreenBienvenueformation from "../../assets/Screen_Projet/Screen_Bienvenue_formation.png";
import ScreenPortfolio from "../../assets/Screen_Projet/ScreenPortfolio.png";
import ScreenLamaisonJungle from "../../assets/Screen_Projet/Screen_la_maison_Jungle.png"
import ScreenShinyAgency from "../../assets/Screen_Projet/Screen_Shiny_agency.png"
import ScreenGmao from "../../assets/Screen_Projet/ScreenGMAO.png"
import ScreenStep from "../../assets/Screen_Projet/Screen-station-epuration.png"

const BackgroundContainer = styled.div`
  background: linear-gradient(to bottom, #0c3e50, #2c3e50);
  min-height: 100vh;
  padding: 40px 20px;
`;

const SectionWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto 60px auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h1`
  color: #ffffff;
  font-size: 2rem;
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
  border-bottom: 2px solid #5fa8ff;
  padding-bottom: 10px;
`;

const SectionDescription = styled.p`
  color: #ccc;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 20px;
`;

const DisplayDivProjet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const DivProjet = styled.div`
  background-color: #ffffff;
  color: #1a1a1a;
  width: 280px;
  height: 250px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  padding: 16px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 10px 18px rgba(0, 0, 0, 0.2);
  }

  h3 {
    text-align: center;
    margin-bottom: 12px;
    font-size: 1.1rem;
  }
`;

const LinkProject = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ImgLogo = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const ScreenProject = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 8px;
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;

  ${DivProjet}:hover & {
    opacity: 1;
    transform: scale(1);
  }
`;

function Projets() {
  const DataProject = [
    { title: "Integration Maquette Apple", src: LogoApple, screen: ScreenApple, link: "/Apple" },
    { title: "Calculette Immobilière", src: LogoCalculetteImo, screen: ScreenCalcImmo, link: "/Calculette" },
    { title: "Bienvenue Formation", src: LogoBienvenueFormation, screen: ScreenBienvenueformation, link: "/Bienvenue_formation" },
    { title: "Portfolio", src:LogoPortfolio ,screen:ScreenPortfolio, link: "/Portfolio" },
  ];

  const DataPersoProject = [
    { title: "Maison Jungle", src: LogoMaisonJungle,link:"/LamaisonJungle",screen:ScreenLamaisonJungle },
    { title: "Shiny agency", src: LogoShinyAgency,link:"/ShinyAgency",screen:ScreenShinyAgency },
  ];
  const DataProProject = [
    {title:"GMAO",src:LogoGMAO,link:"/GMAO",screen:ScreenGmao},
    {title:"Site de la STEP de la Baumette",src:LogoStep,link:"/STEP",screen:ScreenStep}
    
  ]

  return (
    <BackgroundContainer>
      <SectionWrapper>
        <SectionTitle>Projet École</SectionTitle>
        <DisplayDivProjet>
          {DataProject.map((item, index) => (
            <LinkProject to={item.link} key={index}>
              <DivProjet>
                <h3>{item.title}</h3>
                <ImgLogo src={item.src} />
                <ScreenProject src={item.screen} />
              </DivProjet>
            </LinkProject>
          ))}
        </DisplayDivProjet>
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Projet personnel</SectionTitle>
        <SectionDescription>
          J'ai en dehors de la formation suivi un cours sur le langage React JS, ce qui m'a permis de réaliser les deux sites internet suivants :
        </SectionDescription>
        <DisplayDivProjet>
          {DataPersoProject.map((item, index) => (
            <LinkProject to={item.link} key={index}>
              <DivProjet >
                <h3>{item.title}</h3>
                <ImgLogo src={item.src} alt="LOGO" />
                <ScreenProject src={item.screen}/>
              </DivProjet>
            </LinkProject>
            
          ))}
        </DisplayDivProjet>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle>Projet en Entreprise</SectionTitle>
        <SectionDescription>
        Découvrez ici les deux principaux projets que j’ai réalisés lors de mon alternance chez Veolia, au sein de la station d’épuration de la Baumette.</SectionDescription>
        <DisplayDivProjet>
          {DataProProject.map((item, index) => (
            <LinkProject to={item.link} key={index}>
              <DivProjet>
                <h3>{item.title}</h3>
                <ImgLogo src={item.src} alt="LOGO" />
                <ScreenProject src={item.screen}/>
              </DivProjet>
            </LinkProject>
          ))}
        </DisplayDivProjet>
      </SectionWrapper>
    </BackgroundContainer>
  );
}

export default Projets;
