import styled from "@emotion/styled";
import ProductCard from "../../components/ProductCard.jsx";

const ProductGridWrapper = styled.div`
    display: flex;
    justify-content: center;
`

function ProductGrid({productList}) {
    return (
        <ProductGridWrapper>
            {productList.length === 0 ? (
                <p>No product to display</p>
            ) : (
                productList.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))
            )}
        </ProductGridWrapper>
    );
}

export default ProductGrid;