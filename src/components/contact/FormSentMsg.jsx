import styled, { keyframes } from "styled-components"

import { useState } from "react"

const fadeInAnimation = keyframes`
    
from {opacity:0}
    to{opacity:1}
`
const fadeOutAnimation = keyframes`
    
    from{opacity:1}
    to{opacity:0}
`
const FormSentMsgContainer = styled.div`
    display: ${(props) => (props.show ? "flex" : "none")};
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    position: absolute;
    justify-content: center;
    align-content: center;
    background-color: #53cc71;
    margin: auto;
    height: 50px;
    width: 150px;
    right: 0;
    bottom: 20%;
    left: 0;
    border: solid 2px #53cc71;
    z-index: 3;
    animation: ${(props) => (props.show ? fadeInAnimation : fadeOutAnimation)} 1s linear;
`

const FormSentMsgText = styled.p`
    color: #ffffff;
    height: 20px;
    font-size: 1.1rem;
    font-family: Arial;
    margin-top: auto;
    margin-bottom: auto;
    padding: 0;
`

const FormSentMsg = ({ show }) => {
    return (
        <FormSentMsgContainer show={show ? true : false}>
            <FormSentMsgText>Message Sent!</FormSentMsgText>
        </FormSentMsgContainer>
    )
}

export default FormSentMsg
