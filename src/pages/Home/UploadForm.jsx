import React, {useState} from 'react';
import FormInput from "../../components/FormInput.jsx";

function UploadForm({fields, onSubmit}) {
    const [formData, setFormData] = useState({});

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
        if (onSubmit) onSubmit(formData);
        setFormData({})
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {fields.map((field) => (
                    <div key={field.name} style={{marginBottom: '1rem'}}>
                        <label>{field.label}</label>
                        <br/>
                        <FormInput
                            field={field}
                            value={formData[field.name] || ''}
                            onChange={handleChange}
                        />
                    </div>
                ))}
                <button type="submit">Tạo sản phẩm</button>
            </form>
        </>
    );
}

export default UploadForm;