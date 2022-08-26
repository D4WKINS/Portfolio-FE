import styled from "styled-components"

import { colors } from "../../GlobalStyles.styles.js"

import { Web } from "@styled-icons/material-twotone/Web"

import { WindowDevTools } from "@styled-icons/fluentui-system-filled/WindowDevTools"

import { Server } from "@styled-icons/fa-solid/Server"

import uniqid from "uniqid"

const SkillsContainer = styled.div`
    background-color: #488cb4;
    height: 100%;
    border-radius: 10px;
`

const SkillBlocksContainer = styled.ul`
    display: flex;
    /* justify-content: space-evenly; */
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0;
    padding: 1.5rem 1rem;
`
const SkillBlock = styled.li`
    display: inline-block;
    background-color: ${colors.color1};
    /* padding: 1rem; */
    list-style: none;
    max-height: 50px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;

    & :hover {
        background-color: #62a4ca;
        transition: 0.5s ease-out;
        border-radius: 5px;
    }

    & p {
        /* width: 100px; */
        padding: 1rem;
        margin: 0;
        color: ${colors.color3};
        font-family: arial;
        font-weight: 600;
    }
`

const SkillsNameContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${colors.color1};
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
`
const SkillsName = styled.h3`
    font-size: 1.5rem;
    font-family: "arial";
    color: ${colors.color3};
    font-weight: 600;
    letter-spacing: 2px;
`
const sharedStyles = {
    nameIcons: {
        height: "40px",
        width: "40px",
        marginLeft: ".5rem"
    }
}
const StyledWebIcon = styled(Web)`
    color: white;
    ${sharedStyles.nameIcons}
`
const StyledToolsIcon = styled(WindowDevTools)`
    color: white;
    ${sharedStyles.nameIcons}
`

const StyledServerIcon = styled(Server)`
    color: white;
    ${sharedStyles.nameIcons}
`

const generateIcon = (skillsName) => {
    return skillsName === "Frontend" ? (
        <StyledWebIcon />
    ) : skillsName === "Tools" ? (
        <StyledToolsIcon />
    ) : skillsName === "Backend" ? (
        <StyledServerIcon />
    ) : null
}

const SkillBlocks = ({ skills, skillsName }) => {
    return (
        <SkillsContainer>
            <SkillsNameContainer>
                <SkillsName>
                    {skillsName}
                    {generateIcon(skillsName)}
                </SkillsName>
            </SkillsNameContainer>
            <SkillBlocksContainer>
                {skills.map((skill) => {
                    return (
                        <SkillBlock key={uniqid()}>
                            <p>{skill}</p>
                        </SkillBlock>
                    )
                })}
            </SkillBlocksContainer>
        </SkillsContainer>
    )
}

export default SkillBlocks
