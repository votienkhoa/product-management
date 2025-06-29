import styled from "@emotion/styled";

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

const StyledButton = styled.button`
    background-color: #73946B;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.1s;

    &:hover {
        background-color: #537D5D;
    }

    &:active {
        transform: scale(0.98);
    }
`

function Button({label, type}) {
    return (
        <ButtonContainer>
            <StyledButton type={type}>
                {label}
            </StyledButton>
        </ButtonContainer>
    );
}

export default Button;