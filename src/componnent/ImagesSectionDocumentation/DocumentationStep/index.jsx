import styled from "styled-components";

const ImageSection = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h5 {
    font-size: 1.2rem;
    color: #34495e;
    margin-bottom: 10px;
    margin-top: 30px;
  }
`;

const StyledDocImage = styled.img`
  width: 100%;
  max-width: ${({ $large }) => ($large ? "1000px" : "600px")};
  height: auto;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-top: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  cursor: default;
`;

const ImageSectionStep = ({ images }) => (
  <ImageSection>
    <h5>Diagramme Gantt</h5>
    <StyledDocImage src={images[0]} alt="Diagramme Gantt" $large />
    <h5>Plan de test</h5>
    <StyledDocImage src={images[1]} alt="Plan de test" $large />
  </ImageSection>
);

export default ImageSectionStep;
