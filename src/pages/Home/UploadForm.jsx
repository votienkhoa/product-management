import React, {useState} from 'react';
import FormInput from "../../components/FormInput.jsx";

function UploadForm({fields, onSubmit}) {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        console.log("Form Data:", formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <div key={field.name} style={{marginBottom: '1rem'}}>
                        <label>{field.label}</label>
                        <br/>
                        <FormInput field={field} onChange={handleChange}/>
                    </div>
                ))}
                <button type="submit">Tạo sản phẩm</button>
            </form>
        </>
    );
}

export default UploadForm;