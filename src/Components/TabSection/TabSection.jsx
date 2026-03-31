import React from 'react';

const TabSection = () => {
    return (
        <div>
             <div className='flex flex-col gap-4'>
                                <p className='text-[#4F39F6] font-medium text-lg bg-[#E1E7FF] py-2 px-6 w-fit rounded-3xl'>New: AI-Powered Tools Available</p>
                                <h1 className='font-bold text-6xl'>Supercharge Your? Digital Workflow</h1>
                                <p className='text-4'>Access premium AI tools, design assets, templates, and productivity <br />
                                software—all in one place. Start creating faster today. <br />
                                Explore Products</p>
                                <div className='space-x-4'>
                                    <button className='bg-[#4F39F6] btn text-white font-bold tex-lg rounded-3xl'>Explore Products</button>
                                    <button className='btn font-bold tex-lg rounded-3xl'> Watch Demo</button>
                                </div>
                            </div>
        </div>
    );
};

export default TabSection;