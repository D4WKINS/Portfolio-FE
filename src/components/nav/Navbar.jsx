import styled, { keyframes } from "styled-components"

import { useState, useEffect } from "react"

import { Linkedin } from "@styled-icons/bootstrap/Linkedin"

import { Github } from "@styled-icons/bootstrap/Github"

import { Home } from "@styled-icons/boxicons-solid/Home"

import { FilePerson } from "@styled-icons/bootstrap/FilePerson"

import { DesignServices } from "@styled-icons/material/DesignServices"

import { FileAlt } from "@styled-icons/fa-solid/FileAlt"

import { Email } from "@styled-icons/evaicons-solid/Email"

import { colors, NavbarIcons } from "../../GlobalStyles.styles.js"

import BurgerMenu from "./BurgerMenu.jsx"

import { size } from "../../GlobalStyles.styles"

//Styles
const NavbarContainer = styled.div`
    display: block;
    opacity: ${(props) => (props.show ? "1" : "0")};
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    background-color: ${(props) => (props.background ? "#000" : "transparent")};
    transition-timing-function: ease-out;
    transition: 0.5s;
    position: fixed;
    top: 0;
`
export const NavWrapper = styled.div`
    display: flex;

    align-items: center;
    width: 100vw;
    padding: 0;
    height: 100px;
    justify-content: space-between;
    background-color: transparent;

    transition-timing-function: ease-in;
    transition: 0.5s;

    @media only screen and (min-width: ${size.laptop}) {
        padding: 0px 1rem;
    }
`
const Nav = styled.nav`
    display: none;

    border-radius: 20px;
    transition-timing-function: ease-in;
    transition: 0.5s;
    @media only screen and (min-width: ${size.laptop}) {
        display: flex;
    }
`
const NavLi = styled.li`
    display: inline;
    margin-right: 2rem;
    font-family: arial;
    font-size: 1.5rem;
    color: ${colors.color3};
`
const Logo = styled.div`
    display: inline-block;
    padding: 1rem;
    background-color: ${colors.color3};
    font-family: arial;
    font-weight: 600;
    letter-spacing: 0.5rem;
`
export const GithubWhite = styled(Github)`
    color: ${colors.color3};
    height: 50px;
`
export const LinkedinBlue = styled(Linkedin)`
    color: ${colors.color1};
    height: 50px;
`
export const ResumeIcon = styled(FileAlt)`
    height: 30px;
`
export const NavLink = styled.a`
    font-family: "arial";
    font-weight: 600;
    letter-spacing: 1px;
    color: ${colors.color3};
    margin-left: 0;
    margin-right: 1rem;

    @media only screen and (min-width: ${size.desktop}) {
        margin-right: 2rem;
    }
`
const SocialLinks_Container = styled.div``
const SocialLink = styled.a

const Navbar = () => {
    const [show, setShow] = useState(true)
    const [showNavBg, setShowNavBg] = useState(false)
    const [y, setY] = useState(document.scrollingElement.scrollHeight) // state 'y' gets last scroll position
    const [scrollDirection, setScrollDirection] = useState("You have not scrolled yet")

    const controlNavbar = () => {
        if (y > window.scrollY) {
            // this checks if y(Our last scroll position) is more than window.scrollY(our current scroll position)
            // 'y' gets the last position that we have scrolled from, and window.scrollY gets the position we have scrolled to
            //The top of the page is at 0px, so when we start scrolling down the scroll position height increases
            //Therefore when we start scrolling up the scroll position height decreases
            // 'y' gets the the scroll height position before the decrease window.scrollY gets the scroll height position afte the decrease
            // when 'y' is compared to window.scrollY and 'y' is higher value than window.scrollY,
            // it means the user has scrolled upwards

            console.log("Y = " + y)
            console.log("window height = " + window.scrollY)
            if (window.scrollY > 100) {
                setShowNavBg(true)
            } else {
                setShowNavBg(false)
            }

            setScrollDirection("Scrolling up")
            setShow(true)
            console.log("Scrolling up")
        } else if (y < window.scrollY) {
            setShow(false)
            setScrollDirection("Scrolling Down")
            console.log("scrolling down")
        }
        setY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar) // When the component has loaded, add an event listener to listen to the scroll event

        return () => {
            window.removeEventListener("scroll", controlNavbar)
        }
    })
    return (
        <NavbarContainer show={show} background={showNavBg} id='NavbarWrapper'>
            {" "}
            <BurgerMenu />
            <NavWrapper>
                <SocialLinks_Container>
                    <NavLink></NavLink>
                    <NavLink href='https://www.linkedin.com/in/cadawkins/'>
                        {" "}
                        <LinkedinBlue />
                    </NavLink>

                    <NavLink href='https://github.com/D4WKINS'>
                        <GithubWhite />
                    </NavLink>
                </SocialLinks_Container>
                <Nav>
                    <NavLink href='#'>
                        <Home style={NavbarIcons} />
                        Home
                    </NavLink>{" "}
                    <NavLink href='#'>
                        {" "}
                        <FilePerson style={NavbarIcons} />
                        About
                    </NavLink>
                    <NavLink href='#'>
                        <DesignServices style={NavbarIcons} />
                        Projects
                    </NavLink>
                    <NavLink href='#'>
                        <FileAlt style={NavbarIcons} />
                        Resume
                    </NavLink>
                    <NavLink href='#'>
                        <Email style={NavbarIcons} />
                        Contact
                    </NavLink>
                </Nav>
            </NavWrapper>
        </NavbarContainer>
    )
}
export default Navbar
