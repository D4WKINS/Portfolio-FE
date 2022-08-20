import styled from "styled-components"

import { colors } from "../../GlobalStyles.styles.js"

const AboutTextContainer = styled.div`
    display: flex;
    align-content: center;
    height: 100%;
    padding-left: 0.5rem;
`

const AboutText = styled.p`
    margin: auto;
    font-family: arial;
    font-weight: 600;
    line-height: 2;
    color: ${colors.color3};
`
const Text = () => {
    return (
        <AboutTextContainer>
            <AboutText>
                I love learning and creating new things. Introduced to HTML , CSS & JS during a level 3 course In
                Computer science and advanced mathematics (2019), I went on to learn MERN stack with a coding bootcamp
                called Strive School now known as Epicoders (2021) where I participated In a series of solo and team
                projects.
            </AboutText>
        </AboutTextContainer>
    )
}

export default Text
