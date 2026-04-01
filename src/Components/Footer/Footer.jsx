import React from 'react';
import { CiFacebook, CiInstagram } from 'react-icons/ci';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="bg-zinc-950 border-t border-red-900/50 pt-16 pb-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-4">
                        <div className="flex items-center gap-3 mb-6">
                       
                        <h2 className="text-3xl font-bold tracking-tighter text-white">
                          DigiTools
                        </h2>
                        </div>

                        <p className="text-zinc-400 text-lg max-w-md">
                       Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>

                        
                    </div>

                    {/* Quick Links */}

                    <div className='md:col-span-4 flex justify-around'>
                        <div className="flex-1">
                            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
                            <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                            Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                            Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                            Templates
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                            Integrations
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
                            <ul className="space-y-4 text-zinc-400">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                Press
                                </a>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div className='md:col-span-4 flex justify-around '>

                        <div className="flex-1">
                                <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
                                <ul className="space-y-4 text-zinc-400">
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                Documentation
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                    Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                Community
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition">
                                Contact
                                    </a>
                                </li>
                                </ul>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-white font-semibold mb-6 text-lg">Social Links</h3>
                            <ul className=" text-zinc-400 flex gap-2">
                            <li className='flex justify-center items-center'>
                                <a href="#" className="hover:text-zinc-100 transition bg-white p-2 rounded-full ">
                            <CiInstagram className='h-6 w-6 fill-[#9638F2]'/>
                                </a>
                            </li>
                            <li className='flex justify-center items-center'>
                                <a href="#" className="hover:text-zinc-100 transition bg-white p-2 rounded-full">
                            <CiFacebook className='h-6 w-6 fill-[#9638F2]'/>
                                </a>
                            </li>

                            <li className='flex justify-center items-center'>
                                <a href="#" className="hover:text-zinc-100 transition bg-white p-2 rounded-full ">
                            <FaTwitter className='h-6 w-6 fill-[#9638F2]'></FaTwitter>
                                </a>
                            </li>

                            </ul>
                        </div>

                    </div>



                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                    <div className='bg-linear-to-r from-[#612ff7] via-[#9638F2] vai-[#831EF9] to-[#AF2CF3] bg-clip-text text-transparent'>© {new Date().getFullYear()} DigiTools. All rights reserved.</div>

                    <div className="flex gap-6 text-zinc-500">
                        <a href="#" className="bg-linear-to-r from-[#612ff7] via-[#9638F2] vai-[#831EF9] to-[#AF2CF3] bg-clip-text text-transparent transition">
                            Privacy Policy         
                        </a>
                        <a href="#" className="bg-linear-to-r from-[#612ff7] via-[#9638F2] vai-[#831EF9] to-[#AF2CF3] bg-clip-text text-transparent transition">
                            Terms of Service           
                        </a>
                        <a href="#" className="bg-linear-to-r from-[#612ff7] via-[#9638F2] vai-[#831EF9] to-[#AF2CF3] bg-clip-text text-transparent transition">
                             Cookies
                        </a>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;