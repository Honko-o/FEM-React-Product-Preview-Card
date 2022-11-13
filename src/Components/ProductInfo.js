import React from 'react';
import Checkout from './Checkout';
import ProductDescription from './ProductDescription';

export default function ProductInfo() {
    return (
        <div className="product-info">
            <ProductDescription />
            <Checkout />
        </div>
    );
}
