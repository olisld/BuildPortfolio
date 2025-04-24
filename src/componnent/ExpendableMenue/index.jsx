import { useState } from "react";
import styled from "styled-components";

const ArticleContainer = styled.div`
    background-color: white;
    border: 2px solid black;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    width: 100%;
`;

const ArticleTitle = styled.h3`
    margin: 0;
    color: #34495E;
`;

const ArticleText = styled.p`
    margin: 10px 0;
    line-height: 1.6;
    max-height: ${({ expanded }) => (expanded ? "auto" : "60px")};
    overflow: hidden;
    display: flex;
    flex-direction: column;

    transition: max-height 0.3s ease;
`;

const ExpandButton = styled.button`
    background-color: #34495E;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    margin-top: 10px;
    &:hover {
        background-color: #2C3E50;
    }
`;

const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 60%; /* Taille fixe ou proportionnelle pour le conteneur */
    height: 400px; /* Fixe la hauteur du carrousel */
    background-color: #f8f9fa; /* Fond neutre pour mettre en valeur les images */
    border: 2px solid #ddd;
    margin: 0 auto;
    border-radius: 8px;
    overflow: hidden;
`;

const DiagrammeImg = styled.img`
    width: 100%; /* La largeur de l'image s'adapte au conteneur */
    height: 100%; /* La hauteur de l'image s'adapte au conteneur */
    object-fit: contain; /* Conserve les proportions sans découper l'image */
    border-radius: 8px;
    transition: transform 0.3s ease;
`;

const NavButton = styled.button`
    background-color: #34495E;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
    margin: 0 10px;

    &:hover {
        background-color: #2C3E50;
    }
`;
const CarouselWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
`;
const FlexColumnWrapper =styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin-top:30px;
`

const ExpandableMenu = ({ title, content, images , image2,image3 }) => {
    const [expanded, setExpanded] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <ArticleContainer>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleText expanded={expanded}>
                {content}
                {expanded && (
                <>  
                    <FlexColumnWrapper>
                        <h4>Diagramme de contexte</h4>
                        <CarouselWrapper>
                            
                            <CarouselContainer>
                                <DiagrammeImg src={image2} alt="" />
                            </CarouselContainer>
                        </CarouselWrapper>
                    </FlexColumnWrapper>

                    <FlexColumnWrapper>
                        <h4>Diagramme de Paquetage</h4>
                        <CarouselWrapper>
                            
                            <CarouselContainer>
                                <DiagrammeImg src={image3} alt="" />
                            </CarouselContainer>
                        </CarouselWrapper>
                    </FlexColumnWrapper>
                        
                    <FlexColumnWrapper>
                        <h4>Diagramme Utilisateur</h4>
                        <CarouselWrapper>
                            <NavButton position="left" onClick={handlePrev}>
                                {"<"}
                            </NavButton>

                            <CarouselContainer>
                                <DiagrammeImg src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
                            </CarouselContainer>

                            <NavButton position="right" onClick={handleNext}>
                                {">"}
                            </NavButton>
                        </CarouselWrapper>
                        <div>{currentIndex+1}/{images.length}</div>
                    </FlexColumnWrapper>
                    
                </>

                    

                )}
            </ArticleText>
            <ExpandButton onClick={() => setExpanded(!expanded)}>
                {expanded ? "Moins" : "Plus"}
            </ExpandButton>
        </ArticleContainer>
    );
};

export default ExpandableMenu;
