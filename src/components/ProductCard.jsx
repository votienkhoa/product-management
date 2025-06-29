import styled from "@emotion/styled";

const PLACEHOLDER_IMAGE = "https://placehold.co/500"

const ProductCardWrapper = styled.div`
    display: inline-flex; 
    flex-direction: column;
    border: 1px solid #9EBC8A;
    border-radius: 8px;
    padding: 0.75rem;
    gap: 0.75rem;
    margin: 0.75rem;
    transition: all 0.2s ease;
    &:hover {
        cursor: pointer;
        border-color: #537D5D;         
        transform: scale(1.05);
    }
`
const ProductImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
`
const ProductName = styled.div`
    font-weight: 300;
    color: #344054;
`;

const ProductPrice = styled.div`
    color: #537D5D;
    font-weight: 700;
`;

function ProductCard({ product }) {
    return (
        <ProductCardWrapper>
            <ProductImage src={product.image || PLACEHOLDER_IMAGE}/>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{Number(product.price).toLocaleString()} đ</ProductPrice>
        </ProductCardWrapper>
    );
}

export default ProductCard;
