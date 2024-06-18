import { Stack } from "@mui/material"
import {    ProductActionsWrapper, Product, ProductActionButton, ProductAddToCart, ProductFavButton, ProductImage, Productmetawrapper } from "../../styles/product"
import ProductMeta from "./ProductMeta";
import { useState } from "react";



export default function SingleProductDesktop ({product, matches}){
    const [showOptions, setShowOptions]= useState(false);

    const handleMouseEnter=()=>{
        setShowOptions(true)
    }
    const handleMouseLeave=()=>{
        setShowOptions(false)
    }
   

    return (
    <>
  
     <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <ProductImage src={product.image}></ProductImage>
                {showOptions &&( <ProductAddToCart variant="contained"  show={showOptions}>  BOOK </ProductAddToCart>)}
      
        </Product>
        <ProductMeta product={product} matches={matches}></ProductMeta>
        
    </>
       
        
    )


}
