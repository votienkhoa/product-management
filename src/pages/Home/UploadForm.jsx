import React, {useState} from 'react';
import FormInput from "../../components/FormInput.jsx";
import styled from "@emotion/styled";
import Button from "../../components/Button.jsx";

const FormContainer = styled.div`
    font-size: 18px;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    form {
        width: 400px;
    }
    input,
    select,
    textarea {
        font-size: 1rem;
        padding: 0.5rem;
        width: 100%;
    }
`
const StyledLabel = styled.label`
    display: block;
    font-weight: 400;
    margin-bottom: 0.5rem;
`

function UploadForm({fields, onSubmit, button}) {
    const [formData, setFormData] = useState({});
    const [reset, setReset] = useState(0);

    const handleChange = (e) => {
        const { name, type, files, value } = e.target;

        if (type === "file") {
            const file = files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                setFormData((prev) => ({
                    ...prev,
                    [name]: url
                }));
            }
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formData)
        setFormData({})
        setReset(prev => prev + 1)
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <div key={field.name} style={{marginBottom: '1rem'}}>
                        <StyledLabel>
                            {field.required && <span style={{color: 'red', marginRight: '0.25rem'}}>*</span>}
                            {field.label}
                        </StyledLabel>
                        <FormInput
                            field={field}
                            value={formData[field.name] || ''}
                            onChange={handleChange}
                            reset={reset}
                        />
                    </div>
                ))}
                <Button type="submit" label={button}/>
            </form>
        </FormContainer>
    );
}

export default UploadForm;