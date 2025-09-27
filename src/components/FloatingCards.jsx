import React from 'react';
import { motion } from 'framer-motion';

// ImageCard component remains the same
const ImageCard = ({ imgSrc, title, location, price, tag, customClass }) => {
    return (
        <div className={`absolute bg-white p-4 rounded-2xl shadow-xl w-64 ${customClass}`}>
            <div className="relative">
                <img src={imgSrc} alt={title} className="w-full h-32 object-cover rounded-lg" />
                <span className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs font-semibold px-2 py-1 rounded-full">{tag}</span>
            </div>
            <h3 className="font-bold text-gray-900 mt-3">{title}</h3>
            <p className="text-sm text-gray-500">{location}</p>
            <p className="text-lg font-bold text-blue-800 mt-2">₹{price}<span className="font-normal text-sm text-gray-500">/service</span></p>
        </div>
    );
};


const FloatingCards = () => {
    return (
        <section className="bg-gray-50 py-24 overflow-hidden">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Floating Image Cards */}
                <div className="relative min-h-[28rem]">
                    
                    {/* Card 1: Positioned top-left */}
                    <motion.div
                        className="absolute top-0 left-0"
                        initial={{ opacity: 0, y: 50, rotate: -10 }}
                        whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <ImageCard 
                            imgSrc="https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            title="Deep Kitchen Cleaning"
                            location="Nashik, Maharashtra"
                            price="1,499"
                            tag="Kitchen"
                        />
                    </motion.div>
                    
                    {/* Card 2: Positioned with more separation */}
                    <motion.div
                        // Key change: Increased 'left' value to shift it right
                        className="absolute top-36 left-80" 
                        initial={{ opacity: 0, y: 50, rotate: 10 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                         <ImageCard 
                            imgSrc="https://images.pexels.com/photos/4577410/pexels-photo-4577410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            title="Sofa & Upholstery Care"
                            location="Nashik, Maharashtra"
                            price="999"
                            tag="Living Room"
                        />
                    </motion.div>
                </div>

                {/* Right Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">
                        Boost Your Comfort & Well-being
                    </h2>
                    <p className="mt-6 text-lg text-gray-600">
                        Rediscover the joy of a spotless home. Our professional services deliver unmatched quality and peace of mind, right to your doorstep.
                    </p>
                    <div className="mt-10 flex space-x-4">
                        <button className="bg-blue-700 text-white font-bold text-lg px-8 py-3 rounded-xl shadow-lg hover:bg-blue-800 transition-all transform hover:scale-105">
                            Book a Service
                        </button>
                        <button className="bg-white text-blue-800 font-bold text-lg px-8 py-3 rounded-xl shadow-lg border border-gray-200 hover:bg-gray-100 transition-all transform hover:scale-105">
                            Our Plans
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default FloatingCards;