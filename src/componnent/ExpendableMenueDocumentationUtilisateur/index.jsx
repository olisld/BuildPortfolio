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

const ArticleText = styled.div`
    margin: 10px 0;
    line-height: 1.6;
    max-height: ${({ expanded }) => (expanded ? "auto" : "60px")};
    overflow: hidden;
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

const ArticleTitle = styled.h3`
    margin: 0;
    color: #34495E;
`;

const FlexColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 30px;
`;

const CarouselWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 60%;
    background-color: #f8f9fa;
    border: 2px solid #ddd;
    margin: 0 auto;
    border-radius: 8px;
    overflow: hidden;
`;

const DiagrammeImg = styled.img`
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
    transition: transform 0.3s ease;
`;

const ExpandableMenueDocumentationUtilisateur = ({ title, content, images }) => {
    const [expanded, setExpanded] = useState(false);


    return (
        <ArticleContainer>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleText expanded={expanded}>
                {content}
                {expanded && (
                    <>
                        {images.map((image, index) => (
                            <FlexColumnWrapper key={index}>
                                <CarouselWrapper>
                                    {image.content}
                                    <CarouselContainer>
                                        <DiagrammeImg src={image.src} alt="" />
                                    </CarouselContainer>
                                </CarouselWrapper>
                            </FlexColumnWrapper>
                        ))}
                    </>
                )}
            </ArticleText>
            <ExpandButton onClick={() => setExpanded(!expanded)}>
                {expanded ? "Moins" : "Plus"}
            </ExpandButton>
        </ArticleContainer>
    );
};

export default ExpandableMenueDocumentationUtilisateur;
