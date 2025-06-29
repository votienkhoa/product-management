import styled from "@emotion/styled";
import { RiUploadCloud2Line } from "react-icons/ri";
import {useEffect, useState} from "react"; // Biểu tượng đám mây

const HiddenInput = styled.input`
    display: none;
`;

const UploadLabel = styled.label`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border: 2px dashed #ccc;
    border-radius: 8px;
    cursor: pointer;
    color: #555;
    font-size: 0.95rem;
    transition: border-color 0.2s;
    
    &:hover {
        border-color: #888;
    }
`;

function FileUpload({name, onChange, reset}) {
    const [fileName, setFileName] = useState("");

    useEffect(() => {
        console.log("Reset")
        setFileName("")
    }, [reset]);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name)
            if (onChange) {
                onChange(e);
            }
        }
    };

    return (
        <UploadLabel>
            <RiUploadCloud2Line size={20} />
            {fileName ? `Đã chọn: ${fileName}` : "Chọn tệp tin (tối đa 5MB)"}
            <HiddenInput name={name} type="file" onChange={handleFileChange} />
        </UploadLabel>
    );
}

export default FileUpload;
