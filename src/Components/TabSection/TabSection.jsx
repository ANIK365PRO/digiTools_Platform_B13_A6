import React, { use, useState } from 'react';
import Products from './Procudts/Products';
import CartContainer from './CartContainer/CartContainer';


const TabSection = ({productsPromise, cart, setCart}) => {
    const productsData = use(productsPromise)
    // console.log(productsData)

    const [activeTab, setActiveTab] = useState('Products')
    const handleActiveTab = (tab) => {
        setActiveTab(tab)
    }

    return (
        <div>
             <div className='max-w-7xl mx-auto py-16 md:py-20 lg:py-30 px-5 lg:px-0  flex flex-col gap-4'>
                <section className='space-y-4 text-center'>
                    <h3 className=' text-3xl lg:text-5xl font-extrabold '>Premium Digital Tools</h3>

                    <p className='text-[#627382FF] text-xl'>Choose from our curated collection of premium digital products designed <br />
                    to boost your productivity and creativity.</p>

                    {/* name of each tab group should be unique */}
                    <div className="tabs tabs-box inline-block justify-center  mt-5 py-1 rounded-3xl items-center">
                        <input 
                         type="radio"
                         name="my_tabs_1" 
                         className={`tab text-lg font-bold text-black w-30 lg:w-40 rounded-3xl border ${activeTab === 'Products' && 'btn bg-linear-to-r from-[#612ff7] via-[#9638F2] vai-[#831EF9] to-[#AF2CF3] text-white'}`} 
                         aria-label="Products" 
                         onClick={()=> handleActiveTab('Products')}
                         defaultChecked/>
                        <input
                         type="radio" 
                         name="my_tabs_1" 
                         className={`tab text-lg font-bold text-black w-30 lg:w-40 rounded-3xl border ${activeTab === 'Cart' && 'btn bg-linear-to-r from-[#612ff7] via-[#9638F2] vai-[#831EF9] to-[#AF2CF3] text-white'}`} 
                         aria-label="Cart (0)" 
                          onClick={()=> handleActiveTab('Cart')} />
                      
                    </div>
                </section>
                <section>

                    {
                        activeTab === "Products" ? 
                            <Products 
                                productsData={productsData}
                                cart={cart} 
                                setCart={setCart} ></Products>: 

                            <CartContainer
                                cart={cart} 
                                setCart={setCart} ></CartContainer>
                    }
        


                </section>
            </div>
        </div>
    );
};

export default TabSection;