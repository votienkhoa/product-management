import React from 'react';

function FormInput(field) {
    switch(field.type) {
        case 'text':
            return(
                <input
                    type="text"
                    name={field.name}
                    required={field.required}
                    maxLength={field.maxLength}
                />
            )
        case 'number':
            return(
                <input
                    type="number"
                    name={field.name}
                    required={field.required}
                    min={field.minValue}
                    max={field.maxValue}
                />
            )
        case 'file_upload':
            return(
                <input
                    type="file"
                    name={field.name}
                />
            )
        default:
            return <input type="text" name={field.name}/>;
    }
}

export default FormInput;