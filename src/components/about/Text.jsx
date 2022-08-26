import styled from "styled-components"

const AboutTextContainer = styled.div`
    display: flex;
    align-content: center;
    height: 100%;
    padding-left: 0.5rem;
`

const AboutText = styled.p`
    margin: auto;
    font-family: arial;
    font-weight: 500;
    font-size: clamp(1rem, 1rem + 7vw, 1.25rem);
    line-height: 1.75;
    color: #ececec;
`
const Text = () => {
    return (
        <AboutTextContainer>
            <AboutText>
                My Names Carl, I discovered HTML , CSS & Vanilla JS during a level 3 course In Computer science and
                advanced mathematics (2019), I went on to learn MERN stack with a coding bootcamp called Strive School
                now known as Epicoders (2021) where I participated In a series of solo and team projects. Looking for an
                environment where I can utilise my skills and improve my skillset to become a better developer.
            </AboutText>
        </AboutTextContainer>
    )
}

export default Text
