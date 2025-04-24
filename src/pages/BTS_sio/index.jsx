import { useState,useEffect,useRef } from "react";
import { InfoBts } from "../Data";
import styled from "styled-components";
import colors from "../../outils/color";
import flechegauche from "../../assets/arrow-left-square-fill.svg";
import flechedroite from "../../assets/arrow-right-square-fill.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const StyleContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.HomeBackground};
  padding: 20px;
  transition: height 0.3s ease-in-out; /* Animation fluide pour les changements de hauteur */
`;

const StyleSlides = styled.div`
  background-color: ${colors.primary};
  color: ${colors.textLight};
  border-radius: 15px;
  height: auto;
  padding: 40px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 90%;
  max-width: 600px;
`;

const StyledControls = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  margin-top: 20px;
`;

const StyledFleche = styled.img`
  height: 45px;
  width: 45px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyleBTSDIV = styled.div`
  width: 100%;
`;

const StyleTitle = styled.h1`
  color: white;
  font-size: 1.8rem;
  margin-bottom: 15px;
`;

const StyleParagraphe = styled.p`
  color: white;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
`;

const StyledPagination = styled.div`
  background-color: ${colors.secondary};
  color: ${colors.textLight};
  padding: 10px 20px;
  border-radius: 25px;
  margin: 15px 0;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;
function BTS() {
  const [currentSlide, setSlide] = useState(1);
  
  function FindInfo(idNumber) {
    return InfoBts.find((item) => item.id === idNumber.toString());
  }

  function prevSlide() {
    setSlide((prevSlide) => (prevSlide > 1 ? prevSlide - 1 : InfoBts.length));
  }

  function nextSlide() {
    setSlide((prevSlide) =>
      prevSlide < InfoBts.length ? prevSlide + 1 : 1
    );
  }


  const currentOption = FindInfo(currentSlide);

  return (
    <StyleContainer>
      <StyleSlides>
        {currentOption && (
          <StyleBTSDIV>
            <StyleTitle>{currentOption.title}</StyleTitle>
            <StyleParagraphe>{currentOption.content}</StyleParagraphe>
          </StyleBTSDIV>
        )}
      </StyleSlides>
      <StyledPagination>
            Page {currentSlide}/{InfoBts.length}
      </StyledPagination>
      <StyledControls>
        <StyledFleche src={flechegauche} alt="Précédent" onClick={prevSlide} />
        <StyledFleche src={flechedroite} alt="Suivant" onClick={nextSlide} />
      </StyledControls>
    </StyleContainer>
  );
}

export default BTS;