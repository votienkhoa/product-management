import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {parseApiData} from '../../utils/parseApiData';

const API_URL = 'https://hiring-test.stag.tekoapis.net/api/products/management';

function Home(props) {
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

    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
}

export default Home;