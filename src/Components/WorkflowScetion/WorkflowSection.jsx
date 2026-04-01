import React, { useState } from 'react';

const WorkflowSection = () => {
    const [activeTab, setActiveTab] = useState('Explore Products')
    const handleActiveTab = (tab) =>{
        setActiveTab(tab)
    }
    return (
        <div className='bg-linear-to-r from-[#612ff7] via-[#9638F2] vai-[#831EF9] to-[#AF2CF3] text-white'>

             <div className='max-w-7xl mx-auto py-16 md:py-20 lg:py-30 px-5 lg:px-0  flex flex-col gap-4 '>
                <section className='space-y-4 text-center'>
                    <h3 className=' text-3xl lg:text-5xl font-extrabold '>Ready to Transform Your Workflow?</h3>

                    <p className=' text-xl'>Join thousands of professionals who are already using Digitools to work smarter. <br />
Start your free trial today.</p>

                    {/* name of each tab group should be unique */}
                    <div className="tabs tabs-box inline-block justify-center  mt-5 py-1 rounded-3xl items-center bg-white border space-x-2">
                        <input 
                         type="radio"
                         name="my_tabs_1" 
                         className={`tab text-lg font-bold  w-30 lg:w-40 rounded-3xl btn  ${activeTab === 'Explore Products'? 'bg-linear-to-r from-[#612ff7] via-[#9638F2] vai-[#831EF9] to-[#AF2CF3] text-white' : 'border border-[#9638F2] text-[#AF2CF3]' }`} 
                         aria-label="Explore Products" 
                         onClick={()=> handleActiveTab('Explore Products')}
                         defaultChecked/>
                        <input
                         type="radio" 
                         name="my_tabs_1" 
                         className={`tab text-lg font-bold w-30 lg:w-40 rounded-3xl btn ${activeTab === 'View Pricing'? 'bg-linear-to-r from-[#612ff7] via-[#9638F2] vai-[#831EF9] to-[#AF2CF3] text-white' : 'border border-[#9638F2] text-[#AF2CF3]' }`} 
                         aria-label="View Pricing" 
                          onClick={()=> handleActiveTab('View Pricing')} />
                      
                    </div>
                </section>
            

            </div>

        </div>
    );
};

export default WorkflowSection;