// import colors from "../color"
import styled from "styled-components"
// import { Link } from "react-router-dom"
import { useState,useEffect,useRef } from "react"
// import lottie from 'lottie-web';
import Picture from '../../assets/gif/main_4.gif'
import colors from "../color"
import Anssi from "../../assets/cyber_certif/ANSSI_Logo.svg.png"
import RGPD from "../../assets/cyber_certif/Rgpd-removebg-preview.png"
import CVLogo from "../../assets/cyber_certif/logoCV-removebg-preview.png"
import CertifAnssi from "../../assets/cyber_certif/cyber_pdf/Attestation_Anssi.pdf"
import CertifRgpd from "../../assets/cyber_certif/cyber_pdf/ilovepdf_merged.pdf"
import CV from "../../assets/CV_en_anglais.pdf"
//il faut eveidemment changer l'animation car utilisé depuis le portfolio d'une autre personne pr essayer de remplacer le fond d'écran par une animation
const BackgroundColor=styled.div`
    width:100%;
    height:140vh;
    Background:url(${Picture})no-repeat center center ;
    background-size:cover;
    // display:flex;
    // align-items:center;
    // justify-content:space-between;
`

const DisplayBackgroundcolor= styled.div`
    display:flex;
    height:80%;
    align-items:center;
    justify-content:space-between;

`

const TitleName=styled.h1`
    margin:0;
    color:white;
    font-size:80px;
`

const ContainerTitle= styled.div`
    margin-left:50px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const TitleContent=styled.h2`
    color:white;
    font-family: "Nerko One", cursive;
`

const ContainerDescription=styled.div`
    background-color:#444444;
    width:60vh;
    border-radius:10px;
    padding:20px;
    margin-right:50px;
    border:2px solid black;
`

const DescriptionStyle=styled.p`
    color:${colors.secondary}

`
const Logo=styled.img`
    height:50px;
    width:auto;
    flex-shrink:0;
    align-self: center;
`

const DisplayLogo=styled.div`
    display:flex;
    justify-content:center;

`

const DisplayTitleLogo=styled.h3`
    color:white;
`
const LinkLogo=styled.a`
    background-color:rgba(0, 0, 139, 1);
    border-radius:10px;
    text-decoration:none;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:10px;
    margin:20px;
`




function Background(){
    const Text = 'Ollivier Soulard';
    const SplitText = Text.split('');
    const [TitleContainer, setTitleContainer] = useState('');
    const indexRef = useRef(0); // Use useRef for the index

    useEffect(() => {
        const intervalId = setInterval(() => {
        if (indexRef.current < SplitText.length-1) {
            setTitleContainer((prev) => prev + SplitText[indexRef.current]);
            indexRef.current++;
        } else {
            clearInterval(intervalId); // Stop the interval when done
        }
        }, 100); // Adjust speed here

        // Cleanup on component unmount
        return () => clearInterval(intervalId);
    }, [SplitText]); // Include SplitText in dependencies

    return(

        <BackgroundColor>
            <DisplayBackgroundcolor>
                <ContainerTitle>
                    <TitleName>{TitleContainer}</TitleName>
                    <TitleContent>Bienvenue sur Mon portfolio</TitleContent>
                </ContainerTitle>
                <div>
                    <ContainerDescription>
                        <DescriptionStyle> 
                            J'ai 22 ans et étudie depuis 2 ans à l'ESPL dans la formation de BTS SIO avec l'option SLAM.<br/><br/>
                            Je m'intéresse beaucoup à l'informatique et aux nouvelles technologies qui je pense et je l'espère permettront  d'optimiser nos niveaux de vie à l'avenir.<br/><br/> 
                            J'effectue ma formation en Alternance à Veolia eau Angers.<br/><br/>
                            Je vais sur ce site vous présenter les différentes missions et différents projets sur lesquelles j'ai pu travailler ces dernières années.
                        </DescriptionStyle>
                        
                    </ContainerDescription>
                </div>
            </DisplayBackgroundcolor>
            <DisplayLogo>
                <LinkLogo href={CertifAnssi} target="blank">
                <DisplayTitleLogo>Certificat Anssi</DisplayTitleLogo>
                    <Logo src={Anssi} alt="" />
                </LinkLogo>
                <LinkLogo href={CertifRgpd} target="blank">
                    <DisplayTitleLogo>Certificat Rgpd</DisplayTitleLogo>
                    <Logo src={RGPD} alt="" />
                </LinkLogo>
                <LinkLogo href={CV} target="blank">
                    <DisplayTitleLogo>Curriculum Vitae</DisplayTitleLogo>
                    <Logo src={CVLogo} alt="" />
                </LinkLogo>
            </DisplayLogo>
        </BackgroundColor>

    )

}
export default Background