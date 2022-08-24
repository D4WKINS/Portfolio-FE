import styled from "styled-components"

import { useState } from "react"

import { Button } from "../styled/Button.styled.jsx"

import { colors, size } from "../../GlobalStyles.styles.js"

import axios from "axios"

const BE_URL = process.env.REACT_APP_BE_URL
const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 2rem;
    margin-bottom: 5rem;

    @media only screen and (min-width: ${size.tablet}) {
        padding: 2rem 1rem 0rem 1rem;
    }
`
const FormContainer = styled.div`
    display: block;
    justify-content: center;
    width: 100%;
    margin: auto;
    padding: 2rem 0;
`
const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    max-width: 800px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
    padding: 3rem;
    background-color: ${colors.color1};
    margin-bottom: 2rem;

    @media only screen and (min-width: ${size.tablet}) {
        border-radius: 10px;
    }
`
const FormGroup = styled.div`
    /* margin-bottom: 0.5rem; */
`
const FormLabel = styled.label``
const FormInput = styled.input`
    font-family: arial;
    font-size: 1.25rem;
    width: 100%;
    height: clamp(40px, 1px + 10vw, 50px);
    padding: 0.5rem;
    border-radius: 2.5px;
    border: none;
    box-shadow: 0px 2px 3px rgba(100, 100, 100);
    & :active {
        outline: none;
        border: none;
    }
    & :focus {
        outline: none;
        border: none;
    }
    &::-webkit-input-placeholder {
        font-weight: 500;
        color: grey;
    }
`
const FormMessage = styled.textarea`
    font-family: arial;
    font-size: 1.25rem;
    height: 100px;
    width: 100%;
    border-radius: 2.5px;
    resize: none;
    padding: 0.5rem;
    border: none;
    box-shadow: 0px 2px 3px rgba(100, 100, 100);

    &::-webkit-input-placeholder {
        font-weight: 500;
        color: grey;
    }
`
const FormSentConfirmation = styled.div``

const Contact = () => {
    const [formName, setFormName] = useState("")
    const [formEmail, setFormEmail] = useState("")
    const [formMessage, setFormMessage] = useState("")
    const [emailSent, setEmailSent] = useState(false)

    const handleEmailSend = (e) => {
        console.log("Sending email...")
        e.preventDefault()
        if (formName === "" || formEmail === "" || formMessage === "") {
            console.log("Fields cannot be empty, please try again")
        } else {
            axios
                .post(`${BE_URL}/email`, { name: formName, email: formEmail, message: formMessage })
                .then((response) => {
                    console.log(response.data)
                })
                .catch((err) => {
                    throw new Error(err)
                })
        }
    }

    return (
        <ContactContainer>
            <FormContainer>
                <FormWrapper>
                    <Form onSubmit={(e) => handleEmailSend(e)}>
                        <FormGroup>
                            <FormInput placeholder='Name...' onChange={(e) => setFormName(e.target.value)} required />
                        </FormGroup>
                        <FormGroup>
                            <FormInput
                                type='email'
                                placeholder='Email...'
                                onChange={(e) => setFormEmail(e.target.value)}
                                required
                            />
                        </FormGroup>

                        <FormMessage
                            placeholder='Message...'
                            onChange={(e) => setFormMessage(e.target.value)}
                            required
                        />

                        <Button
                            type='submit'
                            color={`${colors.color3}`}
                            backgroundColor={`${colors.color2}`}
                            backgroundColorHover='grey'
                            font-weight={"700"}
                            border={`solid 4px ${colors.color3}`}
                            name='Send Message'
                            margin='0px 0px 0px auto'
                        />
                    </Form>
                </FormWrapper>
            </FormContainer>
        </ContactContainer>
    )
}

export default Contact
