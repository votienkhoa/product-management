import React from 'react';

function FormInput({field, value, onChange}) {
    switch(field.type) {
        case 'text':
            return(
                <input
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
                <input
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
                <input
                    type="file"
                    name={field.name}
                    onChange={onChange}
                />
            )
        default:
            return <input type="text" name={field.name} onChange={onChange} />;
    }
}

export default FormInput;