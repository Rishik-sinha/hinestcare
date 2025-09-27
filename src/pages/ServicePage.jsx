import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';

// --- SERVICE DATA (from your previously uploaded file) ---
const servicesData = {
  'home-cleaning': {
    title: 'Full Home Cleaning',
    description: 'Our comprehensive home cleaning service ensures every corner of your living space is immaculate. We handle everything from dusting and vacuuming to sanitizing surfaces, leaving your home fresh, clean, and healthy.',
    imageSrc: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg',
    features: ['Dusting of all surfaces', 'Vacuuming & mopping', 'Window cleaning', 'Sanitizing bathrooms & kitchen'],
    price: '2,499',
    packages: [
      { name: 'Basic Clean', description: 'Perfect for regular upkeep', price: '2,499', duration: '2-3 hours', features: [ { text: 'General tidying & dusting', included: true }, { text: 'Vacuuming and mopping floors', included: true }, { text: 'Kitchen countertop cleaning', included: true }, { text: 'Detailed scrubbing', included: false }, { text: 'Inside appliance cleaning', included: false } ], highlighted: false, },
      { name: 'Deep Clean', description: 'A thorough, top-to-bottom clean', price: '4,999', duration: '4-5 hours', badge: 'Most Popular', features: [ { text: 'Everything in Basic Clean', included: true }, { text: 'Baseboards and trim cleaning', included: true }, { text: 'Inside oven & microwave', included: true }, { text: 'Upholstery vacuuming', included: true }, { text: 'Detailed bathroom sanitization', included: true } ], highlighted: true, },
      { name: 'Move In/Out Clean', description: 'For empty homes, ensuring a fresh start', price: '6,999', duration: '5-6 hours', features: [ { text: 'Everything in Deep Clean', included: true }, { text: 'Cleaning inside cabinets & closets', included: true }, { text: 'Detailed wall & door cleaning', included: true }, { text: 'Carpet and floor deep cleaning', included: true }, { text: 'Ensuring move-in ready condition', included: true } ], highlighted: false, },
    ]
  },
  'bathroom-cleaning': {
    title: 'Bathroom Cleaning',
    description: 'We provide intensive cleaning and sanitization of your bathrooms, tackling tough stains, soap scum, and bacteria for a hygienic and sparkling result.',
    imageSrc: 'https://images.pexels.com/photos/6587902/pexels-photo-6587902.jpeg',
    features: ['Scrubbing toilets', 'Cleaning showers & sinks', 'Wiping countertops', 'Mopping floors'],
    price: '499',
    packages: [
      { name: 'Standard Sanitization', description: 'For a weekly refresh', price: '499', duration: '1 hour', features: [ { text: 'Sanitize toilet, sink, and shower', included: true }, { text: 'Clean mirrors and fixtures', included: true }, { text: 'Mop floor', included: true }, { text: 'Scrubbing tile grout', included: false } ], highlighted: false },
      { name: 'Deep Clean & Descale', description: 'For a brand-new feel', price: '899', duration: '2 hours', badge: 'Popular', features: [ { text: 'Everything in Standard', included: true }, { text: 'Deep scrub of tile and grout', included: true }, { text: 'Descale shower heads and faucets', included: true }, { text: 'Wipe down cabinet exteriors', included: true } ], highlighted: true },
      { name: 'Premium Spa Clean', description: 'The ultimate bathroom treatment', price: '1,299', duration: '3 hours', features: [ { text: 'Everything in Deep Clean', included: true }, { text: 'Polish all metal fixtures', included: true }, { text: 'Clean inside vanity cabinets', included: true }, { text: 'Exhaust fan cleaning', included: true } ], highlighted: false },
    ]
  },
  'carpet-cleaning': {
    title: 'Carpet Cleaning',
    description: 'Revitalize your carpets with our professional deep cleaning service. We use advanced techniques to remove embedded dirt, tough stains, and allergens.',
    imageSrc: 'https://images.pexels.com/photos/7534241/pexels-photo-7534241.jpeg',
    features: ['Stain pre-treatment', 'Hot water extraction', 'Deodorizing', 'Quick-drying'],
    price: '999',
    packages: [
      { name: 'Single Room Refresh', description: 'Up to 250 sq. ft.', price: '999', duration: '1 hour', features: [ { text: 'Pre-vacuuming', included: true }, { text: 'Hot water extraction', included: true }, { text: 'Standard deodorizer', included: true }, { text: 'Heavy stain removal', included: false } ], highlighted: false },
      { name: 'Full Carpet Care', description: 'For 3-4 rooms', price: '2,499', duration: '3 hours', badge: 'Best Value', features: [ { text: 'Everything in Single Room', included: true }, { text: 'Advanced stain and spot treatment', included: true }, { text: 'Carpet protection application', included: true }, { text: 'Furniture moving assistance', included: true } ], highlighted: true },
       { name: 'Pet & Allergen Special', description: 'For homes with pets', price: '3,499', duration: '4 hours', features: [ { text: 'Everything in Full Carpet Care', included: true }, { text: 'Specialized pet stain & odor removal', included: true }, { text: 'Hypoallergenic treatment', included: true }, { text: 'Sanitization for bacteria', included: true } ], highlighted: false },
    ]
  },
  'office-cleaning': {
    title: 'Office Cleaning',
    description: 'Maintain a productive and professional workspace with our reliable office cleaning services, offering flexible scheduling to suit your business needs.',
    imageSrc: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg',
    features: ['Workstation cleaning', 'Restroom sanitizing', 'Floor care', 'Trash removal'],
    price: '3,999',
    packages: [
      { name: 'Weekly Upkeep', description: 'For small to medium offices', price: '3,999', duration: 'per week', features: [ { text: 'Dusting all desks & surfaces', included: true }, { text: 'Vacuuming and mopping', included: true }, { text: 'Restroom cleaning & restocking', included: true }, { text: 'Interior window cleaning', included: false } ], highlighted: false },
      { name: 'Bi-Weekly Deep Clean', description: 'Comprehensive clean for any office', price: '6,999', duration: 'per visit', badge: 'Full Service', features: [ { text: 'Everything in Weekly Upkeep', included: true }, { text: 'Deep cleaning of kitchen/breakroom', included: true }, { text: 'Interior and exterior window washing', included: true }, { text: 'Disinfecting high-touch surfaces', included: true } ], highlighted: true },
      { name: 'Custom Corporate Plan', description: 'Tailored to your specific needs', price: 'Contact Us', duration: 'Custom', features: [ { text: 'Flexible daily or weekly schedule', included: true }, { text: 'Specialized floor care (carpet/hardwood)', included: true }, { text: 'Event cleanup services', included: true }, { text: 'Dedicated account manager', included: true } ], highlighted: false },
    ]
  },
  'sofa-cleaning': {
    title: 'Sofa & Upholstery Cleaning',
    description: 'Our expert sofa cleaning service removes dirt, stains, and allergens from your upholstery, treating each piece of furniture with specialized care.',
    imageSrc: 'https://images.pexels.com/photos/4577410/pexels-photo-4577410.jpeg',
    features: ['Deep vacuuming', 'Spot treatment', 'Steam or dry cleaning', 'Deodorizing'],
    price: '999',
    packages: [
       { name: 'Standard Sofa Clean', description: 'For one 3-seater sofa', price: '999', duration: '1 hour', features: [ { text: 'Deep vacuuming of all surfaces', included: true }, { text: 'Shampoo and hot water extraction', included: true }, { text: 'Light stain removal', included: true }, { text: 'Fabric protection treatment', included: false } ], highlighted: false },
       { name: 'Sectional & Stain Guard', description: 'For large sectional sofas', price: '1,999', duration: '2 hours', badge: 'Recommended', features: [ { text: 'Everything in Standard Clean', included: true }, { text: 'Intensive spot and stain treatment', included: true }, { text: 'Application of fabric protector', included: true }, { text: 'Leather conditioning (if applicable)', included: true } ], highlighted: true },
       { name: 'Full Living Room Set', description: 'Sofa + 2 Armchairs', price: '2,599', duration: '3 hours', features: [ { text: 'Everything in Sectional & Stain Guard', included: true }, { text: 'Cleaning of two additional armchairs', included: true }, { text: 'Cushion and pillow cleaning', included: true }, { text: 'Quick-dry process', included: true } ], highlighted: false },
    ]
  },
  'kitchen-cleaning': {
    title: 'Deep Kitchen Cleaning',
    description: 'Our deep kitchen cleaning service tackles grease, grime, and built-up residue, ensuring a sanitary and pristine cooking environment.',
    imageSrc: 'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg',
    features: ['Degreasing stove tops', 'Cleaning appliances', 'Wiping cabinets', 'Scrubbing sinks'],
    price: '1,499',
    packages: [
      { name: 'Standard Kitchen Clean', description: 'For routine maintenance', price: '1,499', duration: '1.5 hours', features: [ { text: 'Wipe down countertops & backsplash', included: true }, { text: 'Clean sink and faucet', included: true }, { text: 'Clean exterior of appliances', included: true }, { text: 'Clean inside of microwave', included: false } ], highlighted: false },
      { name: 'Appliance Deep Clean', description: 'A thorough appliance overhaul', price: '2,999', duration: '3 hours', badge: 'Sparkling Clean', features: [ { text: 'Everything in Standard Clean', included: true }, { text: 'Deep clean inside of oven', included: true }, { text: 'Deep clean inside of refrigerator', included: true }, { text: 'Clean and degrease range hood', included: true } ], highlighted: true },
      { name: 'Full Kitchen Sanitization', description: 'Top-to-bottom hygiene focus', price: '4,499', duration: '4 hours', features: [ { text: 'Everything in Deep Clean', included: true }, { text: 'Clean and organize inside cabinets', included: true }, { text: 'Sanitize all handles and switches', included: true }, { text: 'Grout cleaning for floor and walls', included: true } ], highlighted: false },
    ]
  }
};


const ServicePage = () => {
  const { serviceName } = useParams();
  const service = servicesData[serviceName];

  if (!service) { /* ... Not Found logic ... */ }

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="overflow-hidden rounded-xl shadow-2xl"
          >
            {/* --- CHANGE IS HERE --- */}
            <img 
              src={service.imageSrc} 
              alt={service.title} 
              className="w-full aspect-[4/3] object-cover" 
            />
          </motion.div>

          {/* Right Column: Details */}
          <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl font-extrabold text-blue-900 mb-4">{service.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{service.description}</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">What's Included:</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Starting from</p>
                <p className="text-3xl font-bold text-blue-800">₹{service.price}</p>
              </div>
              <button className="bg-blue-700 text-white font-bold text-lg px-8 py-3 rounded-xl shadow-lg hover:bg-blue-800 transition-all transform hover:scale-105">
                Book Now
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Pricing packages={service.packages} />

      <HowItWorks />
    </>
  );
};

export default ServicePage;