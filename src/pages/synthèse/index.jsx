import tableau from '../../assets/tableau.png'
import styled from "styled-components"
import colors from "../../outils/color"

const StyledFullPage =styled.div`
    height:100%;
    width:100%;
    background-color
`
const StyledFlexMiddleTitle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:${colors.texte};
`

const StyledImage=styled.img`
    margin-bottom:30px;
`
const StyledTitledWhite = styled.h1`
    color:white;
`

function Synthèse(){

    return(
        <StyledFullPage>
            <StyledFlexMiddleTitle>    
                <StyledTitledWhite>Tableau de Synthèse</StyledTitledWhite>
                <StyledImage src={tableau} alt='tableau'/>
            </StyledFlexMiddleTitle>    
        </StyledFullPage>
    )
}

export default Synthèse