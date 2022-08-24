import styled from "styled-components"

import { colors } from "../../GlobalStyles.styles.js"

import { size } from "../../GlobalStyles.styles.js"

import Text from "./Text.jsx"

import Picture from "./Picture.jsx"

import SkillBlocks from "./SkillBlocks.jsx"

const sharedStyles = {
    gridCells: {
        display: "flex",
        justifyContent: "center"
    }
}

const AboutContainer = styled.section`
    display: flex;
    justify-content: center;
    padding: 3rem 0px;

    @media only screen and (min-width: ${size.tablet}) {
        padding-top: 4rem;
    }
`
const AboutGrid = styled.div`
    display: grid;
    gap: 5rem;
    max-width: 1440px;
    width: 100%;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(150px, auto);
    padding: 0px 1rem;
    grid-template-areas:
        "picture"
        "text"
        "skills1"
        "skills2"
        "skills3";

    @media only screen and (min-width: ${size.tablet}) {
        gap: 5rem 2rem;

        grid-template-areas:
            "text text text text text text"
            "picture picture picture picture picture picture"
            "skills1 skills1 skills2 skills2 skills3 skills3";
        grid-template-columns: repeat(6, 1fr);
    }
    @media only screen and (min-width: ${size.laptop}) {
        grid-template-areas:
            "text text text picture picture picture"
            "skills1 skills1 skills2 skills2 skills3 skills3";
        grid-template-columns: repeat(6, 1fr);
    }
`
const AboutGridCell = styled.div`
    /* display: flex;
    height: 100%; */

    @media only screen and (min-width: ${size.laptop}) {
        padding-bottom: 0;
    } ;
`

const TextCell = styled.div`
    ${sharedStyles.gridCells}
    grid-area: text;
`

const PictureCell = styled.div`
    ${sharedStyles.gridCells}
    grid-area: picture;
`

const SkillsCell1 = styled.div`
    ${sharedStyles.gridCells}
    grid-area: skills1;
`

const SkillsCell2 = styled.div`
    ${sharedStyles.gridCells}
    grid-area: skills2;
`

const SkillsCell3 = styled.div`
    ${sharedStyles.gridCells}
    grid-area: skills3;
`

const About = () => {
    return (
        <AboutContainer>
            <AboutGrid>
                <TextCell>
                    <Text />
                </TextCell>
                <PictureCell>
                    <Picture />
                </PictureCell>
                <SkillsCell1>
                    <SkillBlocks
                        skillsName='Frontend'
                        skills={["HTML", "CSS", "Redux", "Vanilla JS", "Bootstrap", "React", "Styled-components"]}
                    />
                </SkillsCell1>
                <SkillsCell2>
                    <SkillBlocks
                        skillsName='Tools'
                        skills={["Github", "Heroku", "Figma", "Vercel", "OAuth", "REST API's"]}
                    />
                </SkillsCell2>
                <SkillsCell3>
                    <SkillBlocks skillsName='Backend' skills={["Node.js", "Express.js", "Mongoose", "Postgres SQL"]} />
                </SkillsCell3>
            </AboutGrid>
        </AboutContainer>
    )
}

export default About
