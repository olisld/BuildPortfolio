import { Link } from "react-router-dom"
import styled from "styled-components"
import Linkedin from '../../assets/linkedin-alt.svg'
import Github from '../../assets/github.svg'
import colors from "../../outils/color"

const ContainerFooter=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    // background: linear-gradient(180deg, #666666 1%, #555555 8%, #444444 16%, #333333 32%, #222222 60%, #111111 100%);
    background-color:${colors.primary};
    opacity:0.8;
    backdrop-filter:blur(4px);
    border-top:2px solid black;
    position:absolute;
    width:100vw;
`
const StyleList=styled.ul`
    list-style-type: none;
    padding-left: 0; /* Facultatif : enlève le retrait gauche par défaut */
    // margin: 0; /* Facultatif : ajuste la marge */

`
const LinkedinStyle=styled.img`
    height:40px;
    width:40px;

`
const GitubStyle=styled.img`
    height:40px;
    width:40px;
    // background-color:white;
    border-radius:25px;
`
const ContainerReseau=styled.div`
    display:flex;
    align-items:center;

`
const Containerinofrmation=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:30vh;
`
const StyledLi=styled.li`
    display:flex;
    justify-content: center;
    white-space:nowrap;
    color:white;
`
const StyledLink=styled(Link)`
    margin-right:10px

`
function Footer(){


    return(
        //div information
        <ContainerFooter>
            <Containerinofrmation>
                <StyleList>
                    <StyledLi>Olivier Soulard</StyledLi>
                    <StyledLi>07 68 35 66 45</StyledLi>
                    <StyledLi>olivier.soulard4@gmail.com</StyledLi>
                    <StyledLi>3 rue François Cevert, Angers</StyledLi>
                </StyleList>
            </Containerinofrmation>
            <ContainerReseau>
                <StyledLink to='https://www.linkedin.com/in/olivier-soulard-b56a87281/'><LinkedinStyle src={Linkedin} alt="logo"/></StyledLink>
                <StyledLink to='https://github.com/olisld/projet'><GitubStyle src={Github} alt="logo"/></StyledLink>
                <StyledLink to='/CV'>CV</StyledLink>
            </ContainerReseau>
            <div>
                <StyleList>
                    <StyledLi>Designed By Olivier Soulard</StyledLi>
                    <StyledLi>mention légal</StyledLi>
                </StyleList>
            </div>
        </ContainerFooter>
    )
}

export default Footer