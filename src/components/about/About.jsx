import styled from "styled-components"
import { colors } from "../../GlobalStyles.styles.js"

import { size } from "../../GlobalStyles.styles.js"

import Text from "./Text.jsx"

import Picture from "./Picture.jsx"

import SkillBlocks from "./SkillBlocks.jsx"

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
    max-width: 1024px;
    width: 100%;
    grid-template-columns: 1fr;
    grid-auto-rows: minmax(150px, auto);
    padding: 0px 1rem;

    @media only screen and (min-width: ${size.laptop}) {
        grid-template-columns: repeat(2, 1fr);
    }
`
const AboutGridCell = styled.div`
    /* display: flex; */
    height: 100%;

    @media only screen and (min-width: ${size.laptop}) {
        padding-bottom: 0;
    } ;
`

const About = () => {
    return (
        <AboutContainer name='about'>
            <AboutGrid>
                <AboutGridCell>
                    <Text />
                </AboutGridCell>
                <AboutGridCell>
                    <Picture />
                </AboutGridCell>
                <AboutGridCell>
                    <SkillBlocks skillsName='Frontend' skills={["HTML", "CSS", "Vanilla JS", "Bootstrap", "React"]} />
                </AboutGridCell>
                <AboutGridCell>
                    <SkillBlocks skillsName='Backend' skills={["Node.js", "Express.js", "Mongoose", "Postgres SQL"]} />
                </AboutGridCell>
            </AboutGrid>
        </AboutContainer>
    )
}

export default About
