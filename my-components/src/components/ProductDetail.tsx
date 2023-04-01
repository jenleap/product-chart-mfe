import React from 'react';
import { ProductDetails } from '../models/ProductDetails';
import './ProductDetail.css';

type ProductDetailProps = {
    product: ProductDetails;
};


function ProductDetail(props: ProductDetailProps) {
    const { product } = props;

    console.log(product);

  return (
    <div className="product-container">
        <h2>{ product.title }</h2>
        <div className='top-div'>
            <div>
                <div>{ product.category.toUpperCase() }</div>
                <div>SKU: { product.id }</div>
                <div className='price'>${ product.price }</div>
            </div>
            <img src={ product.image } alt={ product.title } />
        </div>
        <div>{ product.description }</div>
    </div>
  );
}

export default ProductDetail;