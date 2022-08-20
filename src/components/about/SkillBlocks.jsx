import styled from "styled-components"
import { colors } from "../../GlobalStyles.styles.js"

const SkillsContainer = styled.ul`
    display: flex;
    /* justify-content: space-evenly; */
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
`
const SkillBlock = styled.li`
    display: inline-block;
    background-color: ${colors.color1};
    /* padding: 1rem; */
    list-style: none;
    max-height: 50px;
    text-align: center;

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
`
const SkillsName = styled.h3`
    font-size: 1.5rem;
    font-family: "arial";
    color: ${colors.color3};
    font-weight: 600;
    letter-spacing: 3px;
`

const SkillBlocks = ({ skills, skillsName }) => {
    return (
        <div>
            <SkillsNameContainer>
                <SkillsName>{skillsName}</SkillsName>
            </SkillsNameContainer>
            <SkillsContainer>
                {skills.map((skill) => {
                    return (
                        <SkillBlock>
                            <p>{skill}</p>
                        </SkillBlock>
                    )
                })}
            </SkillsContainer>
        </div>
    )
}

export default SkillBlocks
