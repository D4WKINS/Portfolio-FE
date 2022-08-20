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

import { size, NavbarIcons } from "../../GlobalStyles.styles"

import "../../styles/hamBurger.css"

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
                <BurgerLink href='/'>
                    <Home style={NavbarIcons} />
                    Home
                </BurgerLink>
                <BurgerLink>
                    <FilePerson style={NavbarIcons} />
                    About
                </BurgerLink>
                <BurgerLink>
                    <DesignServices style={NavbarIcons} />
                    Projects
                </BurgerLink>
                <BurgerLink>
                    <FileAlt style={NavbarIcons} />
                    Resume
                </BurgerLink>
                <BurgerLink>
                    <Email style={NavbarIcons} />
                    Contact
                </BurgerLink>
            </Menu>
        </BurgerMenuContainer>
    )
}

export default BurgerMenu
