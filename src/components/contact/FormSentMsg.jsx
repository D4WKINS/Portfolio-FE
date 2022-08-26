import styled, { keyframes } from "styled-components"

import { colors } from "../../GlobalStyles.styles.js"

const fadeIn = keyframes`
from {
        opacity:0;
}
    to{
        opacity:1;
    }
`

const fadeOut = keyframes`
from {
    opacity:1;
}
    to{
    opacity:0;
    }
`

const FormSentMsgContainer = styled.div`
    display: flex;
    /* visibility: ${(props) => (props.show ? "visible" : "hidden")}; */
    opacity: ${(props) => (props.show ? "1" : "0")};
    position: absolute;
    justify-content: center;
    align-content: center;
    background-color: #ffffff;
    margin: auto;
    height: 60px;
    width: 150px;
    right: 0;
    bottom: -10px;
    left: 0;
    border: solid 5px ${colors.color1};
    animation: ${(props) => (props.show ? fadeIn : fadeOut)} 1s linear;
    transition-timing-function: 1s ease-out linear;
`

const FormSentMsgText = styled.p`
    color: #000000;
    height: 20px;
    font-size: 1.1rem;
    font-family: Arial;
    margin-top: auto;
    margin-bottom: auto;
    padding: 0;
`

const FormSentMsg = ({ show }) => {
    return (
        <FormSentMsgContainer show={show}>
            <FormSentMsgText>Message Sent!</FormSentMsgText>
        </FormSentMsgContainer>
    )
}

export default FormSentMsg
