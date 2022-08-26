import styled from "styled-components"

import bgImg from "../../assets/images/hero_bg.jpg"

import HeroVideo from "./Video.jsx"

import { colors } from "../../GlobalStyles.styles"

import { ChevronDoubleDown } from "@styled-icons/heroicons-solid/ChevronDoubleDown"

import { Link } from "react-scroll"

const HeroContainer = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
    background-color: transparent;
    /* background: #1c1c1cc8 url(${bgImg}) no-repeat fixed center;
    background-blend-mode: multiply;
    background-attachment: fixed; */
`

const HeroTextContainer = styled.div`
    display: flex;
    margin: auto 0px 0px 0px;
    height: 100%;
    align-self: center;
    z-index: 1;
`
const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`
const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: auto;
`
const Heading = styled.h1`
    font-family: "RockSalt";
    font-size: clamp(3rem, 1rem + 9vw, 8rem);
    color: ${colors.color3};
    /* linear-gradient(#000428, #004e92); */
    /* background-image: linear-gradient(60deg, #e21143, #ffb03a); */
    line-height: 1.75;
    margin: 0;
    margin-bottom: 1rem;
`
const SubHeading = styled.h3`
    font-family: "arial";
    color: ${colors.color1};
    margin: 0;
    font-size: clamp(1rem, 1rem + 4vw, 3rem);
`
const ScrollDownContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 50%;
    z-index: 3;
`
const ScrollDownInner = styled.div`
    display: flex;
`
const ScrollDownBtn = styled.a`
    padding: 1rem;
    border-radius: 100%;
    border: solid 2px white;
    background-color: ${colors.color2};
    align-self: center;

    &:hover {
        background-color: white;
    }
`
const ScrollDownIcon = styled(ChevronDoubleDown)`
    color: ${colors.color1};
    height: clamp(25px, 5px + 8vw, 50px);
`

const Hero = () => {
    return (
        <HeroContainer>
            <HeroVideo />

            <HeroContent>
                <HeroTextContainer>
                    <HeroText>
                        <Heading>Carl Dawkins</Heading>
                        <SubHeading>Full Stack Developer</SubHeading>
                    </HeroText>
                </HeroTextContainer>
                <ScrollDownContainer>
                    <Link to='about' smooth={true} duration={1000}>
                        <ScrollDownInner>
                            <ScrollDownBtn>
                                <ScrollDownIcon />
                            </ScrollDownBtn>
                        </ScrollDownInner>
                    </Link>
                </ScrollDownContainer>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
