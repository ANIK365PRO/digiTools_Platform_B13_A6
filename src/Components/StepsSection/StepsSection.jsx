import React from 'react';
import TabSection from './../TabSection/TabSection';

const StepsSection = () => {
    return (
        <div className='bg-[#f9fafc] py-16 md:py-20  lg:py-30'>
            <section className='max-w-7xl mx-auto space-y-4 text-center px-5 lg:px-0 '>
                <h3 className=' text-3xl lg:text-5xl font-extrabold '>Get Started in 3 Steps</h3>
                <p className='text-[#627382FF]'>Using premiuStart m digital tools in minut es, not hours.</p>
            </section>



        <div className='max-w-7xl mx-auto pt-12 px-5 lg:px-0 grid md:grid-cols-3 gap-7 '>
            
            <section className='relative border border-[#f1f1f1FF] px-5 lg:px-10 py-20 rounded-2xl shadow-2xl bg-[#ffffff]'>
                <div className='flex justify-center items-center rounded-t-2xl '>

                    <div className='w-32 h-32 rounded-full bg-zinc-200 flex items-center justify-center'>
                        <img src="/user.png" alt="user" />
                    </div>

                </div>
                <div className='space-y-3 pt-4'>
                    <h4 className='text-2xl lg:text-4xl font-bold'>Create Account</h4>

                    <p className='lg:text-lg'>Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <p className='w-8 h-8 rounded-full font-medium bg-[#AF2CF3] text-white flex items-center justify-center absolute top-10 right-10'>01</p>
            </section>

            <section className='relative border border-[#f1f1f1FF] px-5 lg:px-10 py-20 rounded-2xl shadow-2xl bg-[#ffffff]'>
                <div className='flex justify-center items-center rounded-t-2xl '>

                    <div className='w-32 h-32 rounded-full bg-zinc-200 flex items-center justify-center'>
                        <img src="/package.png" alt="package" />
                    </div>

                </div>
                <div className='space-y-3 pt-4'>
                    <h4 className='text-2xl lg:text-4xl font-bold'>Choose Products</h4>

                    <p className='lg:text-lg'>Browse our catalog and select the tools
                        that fit your needs.</p>
                </div>
                <p className='w-8 h-8 rounded-full font-medium bg-[#AF2CF3] text-white flex items-center justify-center absolute top-10 right-10'>02</p>
            </section>

            <section className='relative border border-[#f1f1f1FF] px-5 lg:px-10 py-20 rounded-2xl shadow-2xl bg-[#ffffff]'>
                <div className='flex justify-center items-center rounded-t-2xl '>

                    <div className='w-32 h-32 rounded-full bg-zinc-200 flex items-center justify-center'>
                        <img src="/rocket02.png" alt="rocket02" />
                    </div>

                </div>
                <div className='space-y-3 pt-4'>
                    <h4 className='text-2xl lg:text-4xl font-bold'>Start Creating</h4>

                    <p className='lg:text-lg'>Download and start using your premium 
                        tools immediately.</p>
                </div>
                <p className='w-8 h-8 rounded-full font-medium bg-[#AF2CF3] text-white flex items-center justify-center absolute top-10 right-10'>03</p>
            </section>
            
             
        </div>
        </div>
    );
};

export default StepsSection;