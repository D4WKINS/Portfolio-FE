import styled from "styled-components"

import { slide as Menu } from "react-burger-menu"

import { useEffect, useState } from "react"

import { Linkedin } from "@styled-icons/bootstrap/Linkedin"

import { Github } from "@styled-icons/bootstrap/Github"

import { Home } from "@styled-icons/boxicons-solid/Home"

import { FilePerson } from "@styled-icons/bootstrap/FilePerson"

import { DesignServices } from "@styled-icons/material/DesignServices"

import { FileAlt } from "@styled-icons/fa-solid/FileAlt"

import { Email } from "@styled-icons/evaicons-solid/Email"

import { colors, size, NavbarIcons } from "../../GlobalStyles.styles"

import "../../styles/hamBurger.css"

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll"

const BurgerMenuContainer = styled.div`
    display: block;
    @media only screen and (min-width: ${size.laptop}) {
        display: none;
    }
`
const BurgerLink = styled.a`
    font-family: "Arial";
    padding: 1rem;
    text-align: left;
    color: white;
`
const BurgerMenu = () => {
    return (
        <BurgerMenuContainer>
            <Menu right width={"75%"} pageWrapId={"page-wrap"}>
                <BurgerLink to='/' spy={true} smooth={true} offset={50} duration={500}>
                    <Home style={NavbarIcons} />
                    Home
                </BurgerLink>
                <BurgerLink>
                    <Link to='about' spy={true} smooth={true} offset={50} duration={500}>
                        <FilePerson style={NavbarIcons} />
                        About
                    </Link>
                </BurgerLink>
                <BurgerLink>
                    <Link to='projects' spy={true} smooth={true} offset={50} duration={500}>
                        <DesignServices style={NavbarIcons} />
                        Projects
                    </Link>
                </BurgerLink>
                <BurgerLink>
                    <Link to='#' spy={true} smooth={true} offset={50} duration={500}>
                        <FileAlt style={NavbarIcons} />
                        Resume
                    </Link>
                </BurgerLink>
                <BurgerLink>
                    <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
                        <Email style={NavbarIcons} />
                        Contact
                    </Link>
                </BurgerLink>
            </Menu>
        </BurgerMenuContainer>
    )
}

export default BurgerMenu
