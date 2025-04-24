import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import colors from "../../outils/color"
// import { useState, useEffect,useRef } from "react"

const StyledNav= styled.div`
    display:flex;
    justify-content:space-around;
    width:100%;
`
const StyledContainer=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:${colors.primary};
    height:70px;
`
const StyledLink=styled(Link)`
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    height:45px;
    width:140px;
    border-radius:15px;
    // background-color:${colors.secondary};
    white-space:nowrap;
    text-decoration:none;
    font-family: "Nerko One", cursive;
    &:hover{
        filter:brightness(1.5)
    }
`
const StyledLinkActive=styled(Link)`
    display:flex;
    align-items:center;
    justify-content:center;
    color:${colors.tertiary};
    height:50px;
    width:140px;
    border-radius:5px;
    // background-color:${colors.tertiary};
    white-space:nowrap;
    text-decoration:none;
    font-family: "Nerko One", cursive;
    border-bottom:2px solid white;
    &:hover{
        filter:brightness(1.5)
    }
`


function Header(){
    const location=useLocation()
    const routes = [
            { path: '/', 
              label: 'Accueil' },

            { path: '/synthese',
              label: 'Tableau de Synthèse' },

            { path: '/competence', 
              label: 'Compétences' },

            { path: '/entreprise', 
              label: 'Entreprise' },

            // { path: '/missions', 
            //   label: 'Missions' },

            { path: '/projets', 
              label: 'Réalisation' },

            { path: '/veille', 
              label: 'Veille' },
          ];
          
    return(
            <StyledContainer>
              <StyledNav>
                {routes.map((route) => (
                  location.pathname === route.path ? (
                    <StyledLinkActive key={route.path} to={route.path}>
                      {route.label}
                    </StyledLinkActive>
                  ) : (
                    <StyledLink key={route.path} to={route.path}>
                      {route.label}
                    </StyledLink>
                  )
                ))}
              </StyledNav>
            </StyledContainer>
          );

}
export default Header