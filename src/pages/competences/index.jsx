import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

import LogoBienvenue from "../../assets/logo_projet/bienvenueformationLogo.png";
import LogoPortfolio from "../../assets/logo_projet/logoPortfolio.png";
import LogoLamaisonJungle from "../../assets/logo_projet/Logo_Maison_jungle.png";
import LogoShinyAgency from "../../assets/logo_projet/logo.svg";
import LogoGMAO from "../../assets/logo_projet/logo-aq-manager-gmao.jpg";
import LogoStep from "../../assets/logo_projet/StepLogo.png";

const Background = styled.div`
  background-color: #0c3e50;
  color: white;
  min-height: 100vh;
  padding: 40px 20px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start; /* <- IMPORTANT : évite la hauteur alignée entre cartes */
  gap: 30px;
  align-items: center;
`;

const CompetenceCard = styled.div`
  background-color: ${({ index }) => {
    const colors = ["#ccdef4", "#fde8e1", "#ccebd6", "#f9f1d8", "#e8d5f7", "#ffe2f0"];
    return colors[index % colors.length];
  }};
  color: #34495e;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 320px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 15px;
`;

const ToggleButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProjectLink = styled(Link)`
  color: #34495e;
  text-decoration: none;
  margin: 8px 0;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
    height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`;

const Compétences = () => {
  const [states, setStates] = useState([false, false, false, false, false, false]);

  const toggleSection = (index) => {
    const newStates = [...states];
    newStates[index] = !newStates[index];
    setStates(newStates);
  };

  const sections = [
    {
      title: "Gérer le Patrimoine Informatique",
      links: [
        { to: "/Bienvenue_formation", label: "Bienvenue formation", img: LogoBienvenue },
        { to: "/GMAO", label: "GMAO", img: LogoGMAO },
      ],
    },
    {
      title: "Répondre aux incidents et aux demandes d'assistance d'évolution",
      links: [
        { to: "/GMAO", label: "GMAO", img: LogoGMAO },
        { to: "/STEP", label: "Site de la STEP", img: LogoStep },
      ],
    },
    {
      title: "Développer la présence en ligne de l'organisation",
      links: [
        { to: "/STEP", label: "Site de la STEP", img: LogoStep },
      ],
    },
    {
      title: "Travailler en mode projet",
      links: [
        { to: "/Bienvenue_formation", label: "Bienvenue formation", img: LogoBienvenue },
        { to: "/Portfolio", label: "Portfolio", img: LogoPortfolio },
        { to: "/STEP", label: "Site de la STEP", img: LogoStep },
      ],
    },
    {
      title: "Mettre à disposition des utilisateurs un service informatique",
      links: [
        { to: "/Bienvenue_formation", label: "Bienvenue formation", img: LogoBienvenue },
        { to: "/Portfolio", label: "Portfolio", img: LogoPortfolio },
        { to: "/LamaisonJungle", label: "La maison Jungle", img: LogoLamaisonJungle },
        { to: "/ShinyAgency", label: "Shiny Agency", img: LogoShinyAgency },
        { to: "/GMAO", label: "GMAO", img: LogoGMAO },
        { to: "/STEP", label: "Site de la STEP", img: LogoStep },
      ],
    },
    {
      title: "Organiser son développement professionnel",
      links: [
        { to: "/Bienvenue_formation", label: "Bienvenue formation", img: LogoBienvenue },
        { to: "/Portfolio", label: "Portfolio", img: LogoPortfolio },
        { to: "/LamaisonJungle", label: "La maison Jungle", img: LogoLamaisonJungle },
        { to: "/ShinyAgency", label: "Shiny Agency", img: LogoShinyAgency },
        { to: "/STEP", label: "Site de la STEP", img: LogoStep },
      ],
    },
  ];

  return (
    <Background>
      <FlexWrapper>
        {sections.map((section, index) => (
          <CompetenceCard key={index} index={index}>
            <Title>{section.title}</Title>
            <ToggleButton onClick={() => toggleSection(index)}>
              {states[index] ? "Moins" : "Plus"}
            </ToggleButton>
            {states[index] && (
              <div>
                {section.links.map((link, i) => (
                  <ProjectLink key={i} to={link.to} target="_blank">
                    <Logo src={link.img} alt={link.label} />
                    {link.label}
                  </ProjectLink>
                ))}
              </div>
            )}
          </CompetenceCard>
        ))}
      </FlexWrapper>
    </Background>
  );
};

export default Compétences;