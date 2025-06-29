import React from 'react';
import FileUpload from "./FileUpload.jsx";
import styled from "@emotion/styled";

const StyledInput = styled.input`
    border-radius: 5px;
    border: 1px solid #ccc;
`

function FormInput({field, value, onChange}) {
    switch(field.type) {
        case 'text':
            return(
                <StyledInput
                    type="text"
                    name={field.name}
                    value={value}
                    required={field.required}
                    maxLength={field.maxLength}
                    onChange={onChange}
                />
            )
        case 'number':
            return(
                <StyledInput
                    type="number"
                    name={field.name}
                    value={value}
                    required={field.required}
                    min={field.minValue}
                    max={field.maxValue}
                    onChange={onChange}
                />
            )
        case 'file_upload':
            return(
                <FileUpload
                    name={field.name}
                    onChange={onChange}
                />
            )
        default:
            return <input type="text" name={field.name} onChange={onChange} />;
    }
}

export default FormInput;