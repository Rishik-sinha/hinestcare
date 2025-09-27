import React from 'react';
import { motion } from 'framer-motion';

// --- FIX: FormInput component moved outside the Estimate component ---
// This prevents it from being re-declared on every render.
const FormInput = ({ label, type = 'text', name, placeholder, options, defaultValue }) => {
  const commonClasses = "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all";
  
  if (type === 'select') {
    return (
      <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <select id={name} name={name} className={commonClasses}>
          {options.map(option => <option key={option}>{option}</option>)}
        </select>
      </div>
    );
  }

  if (type === 'number') {
    return (
      <div>
         <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input type="number" id={name} name={name} defaultValue={defaultValue} className={commonClasses} />
      </div>
    )
  }

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input type="text" id={name} name={name} placeholder={placeholder} className={commonClasses} />
    </div>
  );
};


const Estimate = () => {
  return (
    <section className="bg-gray-100"> 
      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-800"
        >
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Your Clients & Employees Deserve A Clean, Safe And Healthy Environment!!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Hiring someone to clean your home can feel like a big decision as you want to hire the best house cleaning service you can.
          </p>
          <div className="flex space-x-4 mb-8">
            <button className="bg-blue-700 text-white font-bold px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-800 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7H7v2h2v2h2v-2h2V9h-2V7H9v2z"></path></svg>
              <span>Explore More</span>
            </button>
            <button className="bg-transparent text-blue-700 font-bold px-6 py-3 rounded-lg border-2 border-blue-500 hover:bg-blue-100 transition-colors">
              Our Products
            </button>
          </div>
          <hr className="border-gray-300 my-8" />
          <div className="flex space-x-8 text-gray-700 font-semibold">
            <span>Locally Owned</span>
            <span>Supplies Provided</span>
            <span>Fully Insured</span>
          </div>
           <p className="mt-8 text-gray-600">
            We do everything we can to make our services as affordable as possible. Our budget flexibility extends all the way to employing the right amount of help at the right times to make a positive difference in our customers' lives and confidence in our services.
          </p>
        </motion.div>

        {/* Right Column: Estimate Form */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           viewport={{ once: true }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900">Request An Estimate</h3>
            <p className="text-gray-600 mt-2 mb-6">For a cleaning that meets your highest standards, you need a dedicated team of trained specialists with all supplies needed to thoroughly clean your home.</p>
            
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput label="Choose your service" type="select" name="service" options={['Coronavirus Cleaning', 'Home Cleaning']} />
                <FormInput label="Indicate type of cleaning" type="select" name="cleaning_type" options={['Weekly Regular', 'Bi-Weekly']} />
                <FormInput label="Facility type" type="select" name="facility_type" options={['Educational', 'Residential']} />
                <FormInput label="Facility name" name="facility_name" placeholder="7oroof" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormInput label="Room(s)?" type="number" name="rooms" defaultValue="5" />
                <FormInput label="Hallway(s)?" type="number" name="hallways" defaultValue="7" />
                <FormInput label="Staircase(s)?" type="number" name="staircases" defaultValue="3" />
              </div>

              <div>
                <p className="block text-sm font-medium text-gray-700 mb-2">Do you have all the necessary cleaning supplies?</p>
                <div className="flex items-center space-x-6">
                    <label className="flex items-center">
                        <input type="radio" name="supplies" value="yes" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" defaultChecked />
                        <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="supplies" value="no" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                        <span className="ml-2 text-gray-700">No</span>
                    </label>
                </div>
              </div>
              
              <button type="submit" className="w-full bg-blue-900 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-800 transition-colors">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                <span>Submit Request</span>
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Estimate;