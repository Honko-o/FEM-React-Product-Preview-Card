import './css/styles';
import React from 'react';
import ProductImage from './Components/ProductImage';
import ProductInfo from './Components/ProductInfo';

const App = () => {
    return (
        <div className="product-preview">
            <ProductImage />
            <ProductInfo />
        </div>
    );
};

export default App;
