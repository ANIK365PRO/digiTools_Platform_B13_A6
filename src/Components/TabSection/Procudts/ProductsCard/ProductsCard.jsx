import React from 'react';

const ProductsCard = ({product}) => {
    return (
        <div className={`card w-full shadow-2xl rounded-2xl py-5`}>
            <div className="card-body">

                        <p className="flex justify-end items-center ">
                            
                            <span className={`absolute top-2  py-1 px-4 rounded-2xl shadow ${product.tag === 'best seller' && 'bg-[#fef3c6FF] text-[#bb4d00]'} ${product.tag === 'new' && 'bg-purple-200 text-purple-800'} ${product.tag === 'popular' && 'bg-green-200 text-green-600'}`}>{product.tag}</span>
                            
                            </p>
                        <div className="space-y-4">
                            <div className='p-4 rounded-full border border-zinc-200 inline-block justify-center items-center'>
                               <span className='text-3xl'> {product.icon}</span>
                            </div>
                            <h5 className=" text-2xl font-bold">{product.name}</h5>
                            <p className='mt-2 text-lg'>{product.description}</p>
                            <h4 className='mt-4 text-xl'><span className=" text-4xl font-bold">${product.price}</span> / {product.period}</h4>
                        </div>

                        <ul className="mt-6 flex flex-col gap-2 text-xs">


                            {
                                product.features.map((feature, index )=><li key={index}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                     <span className='text-lg'>{feature}</span>
                                </li>  

                                )
                            }
                        
                        </ul>
                        <div className="mt-6">
                        <button className={`btn btn-primary bg-linear-to-r from-[#612ff7] via-[#9638F2] vai-[#831EF9] to-[#AF2CF3] text-white btn-block font-bold rounded-2xl`}>Buy Now</button>
                        </div>
            </div>
        </div>
    );
};

export default ProductsCard;