import React, { use } from 'react';


const getPricingData = async() => {
    const res = await fetch('/pricing.json')
    return res.json()
} 
const pricingPromise = getPricingData()

const PricingSection = () => {
    const pricingInfo = use(pricingPromise)
    console.log(pricingInfo)

    return (
        <div className='py-16 md:py-20 lg:py-30 max-w-7xl mx-auto '>
            <section className='space-y-4 text-center'>
                <h3 className=' text-3xl lg:text-5xl font-extrabold '>Simple, Transparent Pricing</h3>
                <p className='text-[#627382FF] text-xl'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </section>

            <section className='mt-10 px-5 lg:px-0 grid md:grid-cols-3 gap-7'>
               
               {
                pricingInfo.map(pricingCard =>  <div key={pricingCard.id} className={`card w-full ${pricingCard.status ? 'bg-linear-to-r from-[#612ff7] via-[#9638F2] vai-[#831EF9] to-[#AF2CF3] text-white' : 'bg-[#f9fafcFF]'  }  border-[#f1f1f1FF]  shadow-lg`}>
                    <div className="card-body">

                        <p className="flex justify-center items-center ">
                            
                            {pricingCard.status && <span className='absolute -top-2 bg-[#fef3c6FF] text-[#bb4d00] py-1 px-4 rounded-2xl shadow'>Most popular</span> }
                            
                            </p>
                        <div className="">
                            <h5 className=" text-2xl font-bold">{pricingCard.name}</h5>
                            <p className='mt-2'>{pricingCard.title}</p>
                            <h4 className='mt-4'><span className=" text-4xl font-bold">${pricingCard.price}</span>/Month</h4>
                        </div>

                        <ul className="mt-6 flex flex-col gap-2 text-xs">


                            {
                                pricingCard.features.map((feature, index )=><li key={index}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                     <span>{feature}</span>
                                </li>  

                                )
                            }
                        
                        </ul>
                        <div className="mt-6">
                        <button className={`btn btn-primary ${pricingCard.status? 'bg-[#f9fafcFF] text-[#AF2CF3]' : 'bg-linear-to-r from-[#612ff7] via-[#9638F2] vai-[#831EF9] to-[#AF2CF3] text-white'} btn-block font-bold rounded-2xl`}>{pricingCard.buttonName}</button>
                        </div>
                    </div>
                </div>)
               }
               
            </section>

        </div>
    );
};

export default PricingSection;