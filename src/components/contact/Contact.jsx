import styled from "styled-components"

import { Button } from "../styled/Button.styled.jsx"

import { colors, size } from "../../GlobalStyles.styles.js"

const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 2rem;
    margin-bottom: 5rem;
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
    padding: 2rem;
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
    width: 100%;
    height: 40px;
    padding: 0.5rem;
    border-left: none;
    border-top: solid 5px ${colors.color2};
    border-right: none;
    border-bottom: none;
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
    height: 100px;
    width: 100%;
    resize: none;
    padding: 0.5rem;
    border: none;
    box-shadow: 0px 2px 3px rgba(100, 100, 100);

    &::-webkit-input-placeholder {
        font-weight: 500;
        color: grey;
    }
`

const Contact = () => {
    return (
        <ContactContainer>
            <FormContainer>
                <FormWrapper>
                    <Form>
                        <FormGroup>
                            <FormInput placeholder='Name...' required />
                        </FormGroup>
                        <FormGroup>
                            <FormInput placeholder='Email...' required />
                        </FormGroup>

                        <FormMessage placeholder='Message...' required />

                        <Button
                            type='submit'
                            color={`${colors.color2}`}
                            font-weight=''
                            border={`solid 2px ${colors.color2}`}
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
