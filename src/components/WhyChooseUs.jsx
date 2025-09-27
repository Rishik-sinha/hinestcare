import React from 'react';
import { motion } from 'framer-motion';

// A reusable component for each feature card in the grid.
const FeatureCard = ({ icon, title, description, imgSrc, reverse = false }) => {
    // Determine the order of image and text based on the 'reverse' prop
    const TextBlock = () => (
        <div className="p-8 text-center md:text-left">
            <div className="inline-flex items-center justify-center bg-blue-100 p-3 rounded-lg mb-4">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-blue-900">{title}</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );

    const ImageBlock = () => (
        <div className="overflow-hidden h-64 md:h-full">
            <img 
                src={imgSrc} 
                alt={title}
                className="w-full h-full object-cover grayscale transition-transform duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-105"
            />
        </div>
    );

    return (
        <motion.div 
            className="group bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {reverse ? <><ImageBlock /><TextBlock /></> : <><TextBlock /><ImageBlock /></>}
        </motion.div>
    );
};


// --- Custom SVG Icons for each point ---
const ShieldCheckIcon = () => <svg className="w-8 h-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const LeafIcon = () => <svg className="w-8 h-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 15.879A6 6 0 0112.025 10a6 6 0 012.096-5.879m0 0A2.5 2.5 0 0013 3.5a2.5 2.5 0 00-1.079.5m1.08 5.379a2.5 2.5 0 01-3.158 0m3.158 0a2.5 2.5 0 010 3.158m-3.158 0a2.5 2.5 0 01-3.158 0m0 0A2.5 2.5 0 005 13.5a2.5 2.5 0 00.5 1.079m5.379-1.08a2.5 2.5 0 010 3.158m0 0a2.5 2.5 0 01-3.158 0m3.158-3.158a2.5 2.5 0 00-3.158 0" /></svg>;
const ClipboardListIcon = () => <svg className="w-8 h-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;
const PhoneIcon = () => <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>;

const WhyChooseUs = () => {
    const features = [
        { icon: <ShieldCheckIcon />, title: "Satisfaction Guaranteed", description: "We stand behind the quality of our work. If you're not completely satisfied, we are committed to making it right.", imgSrc: "https://images.pexels.com/photos/7217988/pexels-photo-7217988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { icon: <LeafIcon />, title: "Eco-Friendly Practices", description: "Our green cleaning solutions ensure a healthy living and working environment without compromising on cleanliness.", imgSrc: "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        {
            icon: <ClipboardListIcon />,
            title: "Expertise And Experience",
            description: "We bring years of experience to every cleaning task, ensuring a professional and thorough job every time.",
            // --- NEW IMAGE ---
            imgSrc: "https://images.pexels.com/photos/4239130/pexels-photo-4239130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            icon: <PhoneIcon />,
            title: "Outstanding Support",
            description: "Your satisfaction is our top priority. Our friendly support team is always here to listen and respond to your needs.",
            // --- NEW IMAGE ---
            imgSrc: "https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ];

    return (
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-extrabold text-blue-900">Why Choose Us</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        HiNest Care guarantees exceptional cleanliness, satisfaction, and a safe, spotless environment with eco-friendly products and expert professionals.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            imgSrc={feature.imgSrc}
                            reverse={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;