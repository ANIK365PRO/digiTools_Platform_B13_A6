import React from 'react';

const Status = () => {
    return (
        <div className='bg-linear-to-r from-[#612ff7] via-[#9638F2] vai-[#831EF9] to-[#AF2CF3] py-10'>
            <div className="stats stats-vertical text-white flex flex-row gap-2 md:gap-4 text-center max-w-7xl mx-auto px-5 lg:px-0">
                <div className="stat skeleton bg-transparent flex-1 p-0  md:px-6 py-2 md:py-4">
                    
                    <div className="stat-value md:font-bold text-xl md:text-4xl lg:text-6xl ">50K</div>
                    <div className="stat-desc md:font-medium md:text-xl lg:text-2xl text-white">Active Users</div>
                </div>

                <div className="stat skeleton bg-transparent  flex-1 p-0 md:px-6 py-2 md:py-4">
                   
                    <div className="stat-value md:font-bold text-xl md:text-4xl lg:text-6xl ">200K</div>
                    <div className="stat-desc md:font-medium md:text-xl lg:text-2xl text-white">Premium Tools</div>
                </div>

                <div className="stat skeleton bg-transparent flex-1 p-0 md:px-6 py-2 md:py-4">
                
                    <div className="stat-value md:font-bold text-xl md:text-4xl lg:text-6xl ">4.9</div>
                    <div className="stat-desc md:font-medium md:text-xl lg:text-2xl text-white">Rating</div>
                </div>
            </div>
        </div>
    );
};

export default Status;