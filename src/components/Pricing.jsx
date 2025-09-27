import React from 'react';
import { motion } from 'framer-motion';

// Icons for the feature list
const FeatureIcon = () => (
    <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
);
const XIcon = () => (
    <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);


const Pricing = ({ packages }) => {
  if (!packages || packages.length === 0) {
    return null; // Don't render anything if there are no packages
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900">Transparent Pricing</h2>
          <p className="text-4xl lg:text-5xl font-extrabold text-gray-900">for Our Cleaning Services</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {packages.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl p-8 border flex flex-col h-full ${
                plan.highlighted ? 'border-blue-600 border-2' : 'border-gray-200'
              }`}
            >
              {plan.badge && (
                <span className="absolute top-0 right-0 bg-blue-900 text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-xl">{plan.badge}</span>
              )}
              
              <h3 className="text-xl font-bold mb-1 text-gray-900">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
              <p className="text-2xl font-bold text-gray-900 mb-6">
                ₹{plan.price} <span className="text-base font-medium text-gray-500">/ {plan.duration}</span>
              </p>

              <div className="flex-grow mb-8">
                <p className="font-semibold mb-3 text-gray-700">Includes:</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      {feature.included ? <FeatureIcon /> : <XIcon />}
                      <span className={!feature.included ? 'line-through text-gray-400' : ''}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full mt-auto font-bold py-3 rounded-lg transition-colors ${
                plan.highlighted
                  ? 'bg-blue-900 text-white hover:bg-blue-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}>
                Choose This Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;