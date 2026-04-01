import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { toast } from 'react-toastify';

const CartContainer = ({cart, setCart}) => {
    console.log(cart)

    // for count total price use reduce loop 
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)
    // console.log(totalPrice)

    // for handle Checkout when payment clear
    const handleCheck = () =>{
        setCart([])
        toast.success(`Proceed to Checkout completed.`)
    }  

    // cart item delate when click delate btn
    const handleDelateItem = (item) =>{
        // console.log(item)
        const filteredProduct = cart.filter(units => units.id !== item.id )
        setCart(filteredProduct) 
        toast.warning(`${item.name}, is deleted !!!`)
    }



    return (
        <ul className="list bg-base-100 rounded-box shadow-md border-t border-zinc-100 py-6 lg:py-10 mt-5">
  
            <li className="px-4 md:px-6 lg:px-10 text-xl font-bold opacity-60 tracking-wide">Your Cart</li>

        {/* items show section  */}
           <div className='space-y-4 p-4 md:p-6 lg:p-10'>
             
                {
                 cart.map(item => <li key={item.id} className="list-row bg-[#f9fafcFF] border-[#f1f1f1FF] ">
                    <div className='md:mr-5'><p className="size-10 rounded-box flex justify-center items-center text-2xl md:text-3xl">{item.icon}</p></div>
                    <div>

                    <div className="text-sm md:text-2xl font-bold opacity-60">{item.name}</div>
                    <div className="text-sm md:text-xl font-bold opacity-60">$ {item.price}</div>
                    </div>
                    
                    <button 
                        onClick={()=>handleDelateItem(item)}
                        className="btn btn-square btn-ghost bg-base-100">
                        X
                    </button>
                 </li>)
                }
                
            
  
           </div>


        {/* total Amount and checkout section */}
        {
         cart.length === 0 ? <div className='flex flex-col justify-center items-center gap-4'>
                <FiShoppingCart className='h-10 w-10 lg:h-16 lg:w-16 opacity-60'/>
                <p className='font-bold text-xl opacity-60'>Your cart is empty.</p>
            </div> :
            <div className=' overflow-hidden'>
                <li className="px-5 md:px-7 lg:px-12 opacity-60 tracking-wide flex items-center justify-between text-2xl font-bold"><span>Total</span><span>$ {totalPrice}</span></li>

                <div className='px-4 md:px-4 lg:px-10 py-2  flex justify-center items-center'>
                    <button 
                onClick={handleCheck}
                className="btn bg-linear-to-r from-[#612ff7] via-[#9638F2] vai-[#831EF9] to-[#AF2CF3] text-white font-bold mt-4 mx-4 md:mx-6 lg:mx-10 tracking-wide text-2xl rounded-3xl w-full">Proceed to Checkout</button>
                </div>
            </div>
        }
         

        </ul>
    );
};

export default CartContainer;