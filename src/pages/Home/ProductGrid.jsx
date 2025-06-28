import React from 'react';
import ProductCard from "../../components/ProductCard.jsx";

function ProductGrid({productList}) {
    return (
        <>
            <h2>Danh sách sản phẩm</h2>
            {productList.length === 0 ? (
                <p>Chưa có sản phẩm.</p>
            ) : (
                productList.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))
            )}
        </>
    );
}

export default ProductGrid;