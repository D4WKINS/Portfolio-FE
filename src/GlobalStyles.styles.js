import { createGlobalStyle } from "styled-components"

export const color1 = "#6CB4DD"

export const color2 = "#1c1c1c"

export const colors = {
    color1: "#6CB4DD",
    color2: "#1c1c1c",
    color3: "#fff",
    color4: "#3A8EC0"
}

export const NavbarIcons = {
    display: "inline-block",
    height: "30px",
    marginRight: "10px"
}

export const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px"
}

export const GlobalStyles = createGlobalStyle`
        *{
            box-sizing:border-box;
        }
        body{
            margin:0px;
            padding:0px;
        }
`
