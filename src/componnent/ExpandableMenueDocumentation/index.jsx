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
const ArticleTitle = styled.h3`
    margin: 0;
    color: #34495E;
`;

const ExpandableMenuDocumentation = ({title,content,customSection})=>{
const [expanded,setExpanded]= useState(false)
    return(
        <ArticleContainer>
            <ArticleTitle>{title}</ArticleTitle>
            <ArticleText expanded={expanded}>
                {content}
                {expanded && (
                    <>
                        {customSection}
                    </>
                )}
            </ArticleText>
            <ExpandButton onClick={()=>setExpanded(!expanded)}>
                {expanded ? "moins": "plus"}
            </ExpandButton>
        </ArticleContainer>
    )
}
export default ExpandableMenuDocumentation