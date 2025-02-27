import { useState } from "react"
import  {InfoBts}  from "../Data"
import styled from "styled-components"
import colors from "../../outils/color"
import flechegauche from "../../assets/arrow-left-square-fill.svg"
import flechedroite from '../../assets/arrow-right-square-fill.svg'
import 'bootstrap/dist/css/bootstrap.min.css';



const StyleContainer=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    background-color:${colors.HomeBackground}
`

const StyleSlides=styled.div`
    margin-top:30px;
    background-color:black;
    opacity:0.6;
    border-radius:10px;
    height:auto;
    padding: 30px;
    margin-bottom:20px;
`

const StyledButtobn=styled.div`
    display:flex;
    justify-content:space-around;
    width:300px;
`

const StyledFleche=styled.img`
    background-size:contain;
    // border-radius:25px;
    height:50px;
    width:55px;
`

const StyledButton=styled.button`
    border-radius:50px;
    width:auto;
    height:auto;
    background-color:${colors.HomeBackground};
    border:0;
`
const StyleBTSDIV=styled.div`
    height:auto;
    width:400px;
`
const StyleTitle=styled.h1`
    color:white;

`
const StyleParagraphe=styled.p`
    color:white;
`
function BTS(){
const [currentSlide,setSlide]=useState(1)
// const sisrOption3 = InfoBts.find(item => item.id === '3');

    function FindInfo(idNumber){
        return InfoBts.find(item=>item.id===idNumber.toString())
    }

    function prevSlide(){
        setSlide(prevSlide=>prevSlide>1 ? prevSlide-1: InfoBts.length)

    }

    function nextSlide(){
        setSlide(prevSlide=>prevSlide<InfoBts.length ? prevSlide+1:1)

    }
const currentOption= FindInfo(currentSlide)
    return(
        
        <StyleContainer>
            <StyleSlides>
                {currentOption&&(
                    <StyleBTSDIV>
                        <StyleTitle>{currentOption.title}</StyleTitle>
                        <StyleParagraphe>{currentOption.content}</StyleParagraphe>
                    </StyleBTSDIV>
                )}
                
            </StyleSlides>
            <StyledButtobn>
                <StyledButton onClick={prevSlide}><StyledFleche src={flechegauche} alt="flecheG" /></StyledButton>
                <StyledButton onClick={nextSlide}><StyledFleche src={flechedroite} alt="flecheD"/></StyledButton>
            </StyledButtobn>
        </StyleContainer>
    
    )
}
export default BTS