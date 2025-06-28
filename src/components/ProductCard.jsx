import React from 'react';

const PLACEHOLDER_IMAGE = "https://placehold.co/500"
function ProductCard({ product }) {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                maxWidth: '400px'
            }}
        >
            <img
                src={product.image || PLACEHOLDER_IMAGE}
                alt={product.name}
                style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '4px'
                }}
            />

            <div>
                <div style={{fontWeight: 'bold'}}>{product.name}</div>
                <div>{Number(product.price).toLocaleString()} đ</div>
            </div>
        </div>
    );
}

export default ProductCard;
