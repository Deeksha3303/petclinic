import PropTypes from 'prop-types';
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FitScreenOutlinedIcon from '@mui/icons-material/FitScreenOutlined';
import { Stack } from "@mui/material";
import { ProductActionsWrapper, Product, ProductActionButton, ProductAddToCart, ProductFavButton, ProductImage, ProductMetaWrapper } from "../../styles/product";
import ProductMeta from "./ProductMeta";

export default function SingleProduct({ product, matches }) {
    return (
        <>
            <Product>
                <ProductImage src={product.image}></ProductImage>
                <ProductMeta product={product} matches={matches}></ProductMeta>
                <ProductActionsWrapper>
                    <Stack direction="row">
                        <ProductFavButton isfav={1}>
                            <FavoriteBorderOutlined />
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareOutlinedIcon />
                        </ProductActionButton>
                        <ProductActionButton>
                            <FitScreenOutlinedIcon />
                        </ProductActionButton>
                    </Stack>
                </ProductActionsWrapper>
                <ProductAddToCart>BOOK</ProductAddToCart>
            </Product>
        </>
    );
}

// Define prop types
SingleProduct.propTypes = {
    product: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    matches: PropTypes.bool.isRequired,
};
