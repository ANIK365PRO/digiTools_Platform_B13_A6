import React from 'react';
import ProductsCard from './ProductsCard/ProductsCard';

const Products = ({productsData}) => {
    // console.log(productsData, 'productsData')
    return (
        <div className=' mt-10 grid md:grid-cols-3 gap-10'>
        
        {
            productsData.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
        }
            
        </div>
    );
};

export default Products;