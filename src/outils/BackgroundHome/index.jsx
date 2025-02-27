// import colors from "../color"
import styled from "styled-components"
import { useState,useEffect,useRef } from "react"
// import lottie from 'lottie-web';
import Picture from '../../assets/gif/main_4.gif'
import colors from "../color"
//il faut eveidemment changer l'animation car utilisé depuis le portfolio d'une autre personne pr essayer de remplacer le fond d'écran par une animation
const BackgroundColor=styled.div`
    width:100%;
    height:120vh;
    Background:url(${Picture})no-repeat center center ;
    background-size:cover;
    display:flex;
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
    background-color:#BBBBBB;
    width:60vh;
    border-radius:10px;
    padding:20px;
    margin-right:50px;
    border:2px solid black;
`

const DescriptionStyle=styled.p`
    color:${colors.secondary}

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
            <ContainerTitle>
                <TitleName>{TitleContainer}</TitleName>
                <TitleContent>Bienvenue sur Mon portfolio</TitleContent>
            </ContainerTitle>
            <ContainerDescription>
                <DescriptionStyle> 
                    J'ai 22 ans et étudie depuis 2 ans à l'ESPL dans la formation de BTS SIO avec l'option SLAM.<br/><br/>
                    Je m'intéresse beaucoup à l'informatique et aux nouvelles technologies qui je pense et je l'espère permettront  d'optimiser nos niveaux de vie à l'avenir.<br/><br/> 
                    J'effectue ma formation en Alternance à Veolia eau Angers.<br/><br/>
                    Je vais sur ce site vous présenter les différentes missions et différents projets sur lesquelles j'ai pu travailler ces dernières années.
                </DescriptionStyle>
            </ContainerDescription>
        </BackgroundColor>

    )

}
export default Background