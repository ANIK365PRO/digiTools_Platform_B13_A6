import React from 'react';
import ProductsCard from './ProductsCard/ProductsCard';

const Products = ({productsData, cart, setCart, setGetPrice}) => {
    // console.log(productsData, 'productsData')
    return (
        <div className=' mt-10 grid md:grid-cols-3 gap-10'>
        
        {
            productsData.map(product => <ProductsCard key={product.id} product={product} cart={cart} setCart={setCart} setGetPrice={setGetPrice}></ProductsCard>)
        }
            
        </div>
    );
};

export default Products;