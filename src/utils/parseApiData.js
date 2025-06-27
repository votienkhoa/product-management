function parseTitle(data){
    const labelItem = data.find(item => item.type === 'Label')
    return labelItem?.customAttributes?.label?.text || 'No title';
}

function parseForm(data){
    const formItem = data.find(item => item.type === 'ProductSubmitForm')
    return formItem?.customAttributes?.form?.map(field => ({
        name: field.name,
        label: field.label,
        type: field.type,
        required: field.required,
        maxLength: field.maxLength,
        minValue: field.minValue,
        maxValue: field.maxValue,
    })) || []
}

function parseButton(data){
    const buttonItem = data.find(item => item.type === 'Button')
    return buttonItem?.customAttributes?.button?.text || 'no text';
}

function parseProducts(data){
    const productsItem = data.find(item => item.type === 'ProductList')
    return productsItem?.customAttributes?.productlist?.items?.map((item) => ({
        name: item.name,
        price: item.price,
        image: item.imageSrc,
    }))
}

export function parseApiData(data){
    const dataArray = data.data
    return {
        title: parseTitle(dataArray),
        form: parseForm(dataArray),
        button: parseButton(dataArray),
        productList: parseProducts(dataArray),
    }
}