import styled from "styled-components"

import { colors } from "../../GlobalStyles.styles.js"

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    height: 100px;
`

const FooterText = styled.p`
    font-family: arial;
    margin: 0;
    color: ${colors.color3};
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>Made with React and grattitude</FooterText>
        </FooterContainer>
    )
}

export default Footer
