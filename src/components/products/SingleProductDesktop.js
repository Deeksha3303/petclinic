import PropTypes from 'prop-types';
import { Product, ProductAddToCart, ProductImage } from "../../styles/product";
import ProductMeta from "./ProductMeta";
import { useState } from "react";

export default function SingleProductDesktop({ product, matches }) {
    const [showOptions, setShowOptions] = useState(false);

    const handleMouseEnter = () => {
        setShowOptions(true);
    };

    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    return (
        <>
            <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <ProductImage src={product.image} />
                {showOptions && (
                    <ProductAddToCart variant="contained" show={showOptions}>
                        BOOK
                    </ProductAddToCart>
                )}
            </Product>
            <ProductMeta product={product} matches={matches} />
        </>
    );
}

// Define propTypes to validate props
SingleProductDesktop.propTypes = {
    matches: PropTypes.bool.isRequired,
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,  // Ensure 'image' is a required string
    }).isRequired,
};
