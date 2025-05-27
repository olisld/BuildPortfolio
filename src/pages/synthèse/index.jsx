import tableau from '../../assets/8 - BTS SIO - Annexe 8-1 - Tableau de synthèse - Epreuve E4 - BTS SIO 2024-1.png'
import styled from "styled-components"
import colors from "../../outils/color"

const StyledFullPage =styled.div`
    width:100%;

`
const StyledFlexMiddleTitle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:${colors.texte};
    height:100%;
`

const StyledImage=styled.img`
    margin-bottom:30px;
    width:75%;
    height:auto;


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