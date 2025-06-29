import React from 'react';
import styled from "@emotion/styled";

const StyledTitle = styled.h2`
    font-size: 30px;
    font-weight: 600;
    color: black;
    letter-spacing: 0.5px;
`
const TitleWrapper = styled.div`
    text-align: center;
`

function FormTitle({ title }) {
    return (
        <TitleWrapper>
            <StyledTitle>{title}</StyledTitle>
        </TitleWrapper>
    );
}

export default FormTitle;