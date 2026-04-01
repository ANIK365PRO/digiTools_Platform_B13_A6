import React from 'react';
import { BsPlay } from 'react-icons/bs';
import bannerImage from '../../assets/products/banner.png'

const Banner = () => {
    return (
        <div className='md:flex items-center justify-between max-w-7xl m-auto object-center overflow-hidden px-5 lg:px-0 my-10 lg:my-20 space-y-4 md:space-y-0'>

            <section className='flex-1'>

                <div className='flex flex-col gap-4'>
                    <p className='text-[#4F39F6] font-medium md:text-lg bg-[#E1E7FF] py-2 px-6 w-fit rounded-3xl'>New: AI-Powered Tools Available</p>
                    <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl'>Supercharge Your <br /> Digital Workflow</h1>
                    <p className='md:text-lg'>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br />
                    Explore Products</p>
                    <div className='space-x-4'>
                        <button className='btn bg-linear-to-r from-[#612ff7] via-[#9638F2] vai-[#831EF9] to-[#AF2CF3] text-white font-bold text-lg rounded-3xl'>Explore Products</button>
                        <button className='btn font-bold tex-lg rounded-3xl'><BsPlay /> Watch Demo</button>
                    </div>
                </div>
            </section>
            <section className='flex-1'>
                <div className='flex justify-center md:justify-end'>
                <img src={bannerImage} alt="digital tolls banner" className='object-cover h-auto w-auto drop-shadow-2xl animate-pulse' />

                </div>
            </section>
        </div>
    );
};

export default Banner;