import styled from "styled-components"

import { colors } from "../../GlobalStyles.styles.js"

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Title = styled.h2`
    font-family: "RockSalt";
    color: ${colors.color3};
    text-align: center;
    margin-bottom: 0;
    font-size: clamp(2rem, 1rem + 8vw, 5rem);
`
const Underline = styled.div`
    background-color: ${colors.color1};
    height: 15px;
    width: 50px;
    margin: 0 auto;
`
const SectionTitle = ({ title }) => {
    return (
        <TitleContainer>
            <Title>{title}</Title>
            <Underline />
        </TitleContainer>
    )
}

export default SectionTitle
