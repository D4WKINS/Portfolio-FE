import styled from "styled-components"
import picture from "../../assets/images/profile_picture.jpg"
import { Button3D } from "../styled/Button.styled.jsx"
import { colors } from "../../GlobalStyles.styles.js"

const PictureContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`

const PictureWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ProfilePicture = styled.img`
    border-radius: 100%;
    width: 275px;
    height: 275px;
    text-align: center;
    margin: 0px auto;
    margin-bottom: 2rem;
`

const Picture = () => {
    return (
        <PictureContainer>
            <PictureWrapper>
                <ProfilePicture src={picture} />
                <Button3D
                    name='Download Resume'
                    font='arial'
                    fontWeight='600'
                    border='none'
                    color={colors.color2}
                    backgroundColor={colors.color3}
                    shadowBackgroundColor={"grey"}
                />
            </PictureWrapper>
        </PictureContainer>
    )
}

export default Picture
