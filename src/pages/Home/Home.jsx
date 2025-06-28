import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {parseApiData} from '../../utils/parseApiData';
import UploadForm from "./UploadForm.jsx";
import ProductGrid from "./ProductGrid.jsx";

const API_URL = 'https://hiring-test.stag.tekoapis.net/api/products/management';

function Home() {
    const [title, setTitle] = useState("")
    const [form, setForm] = useState([])
    const [button, setButton] = useState("")
    const [productList, setProductList] = useState([])

    useEffect(() => {
        axios
            .get(API_URL)
            .then(response => {
                const parsedData = parseApiData(response.data);
                setTitle(parsedData.title)
                setForm(parsedData.form)
                setButton(parsedData.button)
                setProductList(parsedData.productList)

                console.log(parsedData.form)
                console.log(parsedData.productList)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
    }, []);

    const handleCreateProduct = (formData) => {
        console.log("Form Data:", formData);
        const newProduct = {
            name: formData.productName,
            price: Number(formData.price),
            image: formData.imageUrl
        };
        setProductList((prev) => [newProduct, ...prev]);
    };

    return (
        <div>
            <h2>{title}</h2>
            <UploadForm fields={form} onSubmit={handleCreateProduct}/>
            <ProductGrid productList={productList}/>
        </div>
    );
}

export default Home;