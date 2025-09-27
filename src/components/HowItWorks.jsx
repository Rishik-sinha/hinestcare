import React from 'react';
import { motion } from 'framer-motion';

// --- Placeholder Icons ---
// I've created simple SVG icons to match the style in your image.
const MopIcon = () => (
  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l-2 8h18l-2-8H5zM5 10V7a2 2 0 012-2h10a2 2 0 012 2v3M9 10V6M15 10V6M4 18h16"></path></svg>
);
const PlanIcon = () => (
  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);
const ScheduleIcon = () => (
  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
);
const CleanIcon = () => (
  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 3h-2.28a2 2 0 00-1.995 1.684l-1.45 4.35A2 2 0 018.28 11H8a2 2 0 00-2 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 00-2-2h-.28a2 2 0 01-1.995-2.316l-1.45-4.35A2 2 0 0011.28 3H9"></path></svg>
);
const LeafIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M15.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
);


const HowItWorks = () => {
    // Data for the steps, taken from the image
    const steps = [
        {
            step: 'Step One',
            title: 'Provide Us With Your Cleaning Details',
            description: 'Just provide us the timing you want and we will set schedule according to your need.',
            icon: <MopIcon />
        },
        {
            step: 'Step Two',
            title: 'Pick The Suitable Plan For Your House',
            description: 'We come to you to inspect the area to prepare for disinfection, and to take into concern.',
            icon: <PlanIcon />
        },
        {
            step: 'Step Three',
            title: 'Online Scheduling In Just Few Clicks',
            description: 'We carry out the disinfection during couple hours depending on house size and amount.',
            icon: <ScheduleIcon />
        },
        {
            step: 'Step Four',
            title: 'Cleaning With Care & leave quickly',
            description: 'After disinfection was done successfully, we will leave and you’ll have no worries!',
            icon: <CleanIcon />
        }
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 text-center">
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-blue-500 font-satisfy text-2xl mb-2"
                >
                    See How It Works!
                </motion.p>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 leading-tight"
                >
                    Easy Steps For A Clean And <br /> Healthy Environment
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left flex flex-col"
                        >
                            <p className="text-blue-600 font-semibold mb-2">{item.step}</p>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 h-20">{item.title}</h3>
                            <p className="text-gray-600 mb-6 flex-grow">{item.description}</p>
                            <div className="flex justify-between items-end mt-auto">
                                {item.icon}
                                <span className="text-gray-300 hover:text-blue-500 transition-colors cursor-pointer">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col items-center space-y-6">
                    <button className="flex items-center bg-blue-50 text-blue-700 font-semibold px-6 py-3 rounded-full border-2 border-blue-200 hover:bg-blue-100 transition-colors">
                        <LeafIcon />
                        We use only 100% natural and green products.
                    </button>
                    <a href="#" className="font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                        Contact Us For More Info →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;