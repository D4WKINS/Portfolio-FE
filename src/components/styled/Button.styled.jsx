import styled from "styled-components"
const StyledButton = styled.button`
    border-radius: 10px;
    margin: ${(props) => props.margin};
    border: ${(props) => props.border};

    padding: 1.5rem;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    font-weight: 600;
    font-family: ${(props) => props.font};

    & :hover {
        background-color: ${(props) => props.backgroundColorHover};
    }
`
const Button = ({ name, font, margin, color, border, backgroundColor, backgroundColorHover }) => {
    return (
        <StyledButton
            name={name}
            font={font}
            margin={margin}
            color={color}
            border={border}
            backgroundColor={backgroundColor}
            backgroundColorHover={backgroundColorHover}
        >
            {name}
        </StyledButton>
    )
}

const Button3D = ({
    name,
    font,
    fontWeight,
    color,
    border,
    backgroundColor,
    shadowBackgroundColor,
    backgroundColorHover
}) => {
    const Styled3DButton = styled.button`
        background: ${shadowBackgroundColor};
        border-radius: 12px;
        border: none;
        padding: 0;
        cursor: pointer;
        outline-offset: 4px;

        & :active {
            transform: translateY(-2px);
        }
    `
    const Front = styled.span`
        display: block;
        padding: 20px 42px;
        border-radius: 12px;
        font-size: 1.25rem;
        font-weight: ${fontWeight};
        background: ${backgroundColor};
        color: ${color};
        transform: translateY(-6px);

        & :active {
            transform: translateY(-2px);
        }
    `
    return (
        <Styled3DButton class='pushable'>
            <Front class='front'>{name}</Front>
        </Styled3DButton>
    )
}

export { Button, Button3D }
