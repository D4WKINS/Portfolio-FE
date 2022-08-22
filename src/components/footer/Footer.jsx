import styled from "styled-components"

import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo"

import { colors } from "../../GlobalStyles.styles.js"

import Video from "../hero/Video.jsx"

const FooterContainer = styled.footer`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: black;
    height: 100px;
`
const StyledReactIcon = styled(ReactLogo)`
    color: ${colors.color1};
    height: 40px;
`
const FooterText = styled.p`
    font-family: arial;
    font-weight: 600;
    margin: 0;
    color: ${colors.color3};
    z-index: 1;
`

const Footer = () => {
    return (
        <FooterContainer>
            <Video />
            <FooterText>© D4WKINS 2022</FooterText>
        </FooterContainer>
    )
}

export default Footer
