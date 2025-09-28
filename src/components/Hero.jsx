import React from 'react';
import { Link } from 'react-router-dom';

// --- SVG Icons (remain the same) ---
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const BathroomIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3h-2.28a2 2 0 00-1.995 1.684l-1.45 4.35A2 2 0 018.28 11H8a2 2 0 00-2 2v1a2 2 0 002 2h8a2 2 0 002-2v-1a2 2 0 00-2-2h-.28a2 2 0 01-1.995-2.316l-1.45-4.35A2 2 0 0011.28 3H9" /></svg>;
const CarpetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>;
const OfficeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
const SofaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-8-8v8m12-4h-2.522a2.25 2.25 0 00-2.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V12a2.25 2.25 0 012.25-2.25h15a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v2.25a2.25 2.25 0 002.25 2.25h.522z" /></svg>;
const KitchenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;

const ServiceItem = ({ icon, name, linkTo }) => (
  <Link to={linkTo} className="flex flex-col items-center text-center p-2 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer">
    <div className="w-16 h-16 mb-2 flex items-center justify-center">{icon}</div>
    <span className="text-sm font-medium text-gray-800">{name}</span>
  </Link>
);

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);


const Hero = () => {
    const services = [
        { name: 'Home Cleaning', icon: <HomeIcon /> },
        { name: 'Bathroom Cleaning', icon: <BathroomIcon /> },
        { name: 'Carpet Cleaning', icon: <CarpetIcon /> },
        { name: 'Office Cleaning', icon: <OfficeIcon /> },
        { name: 'Sofa Cleaning', icon: <SofaIcon /> },
        { name: 'Kitchen Cleaning', icon: <KitchenIcon /> },
    ];

  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-0 pb-8 md:pb-16">
        {/* --- CHANGE IS HERE --- */}
        <div className="lg:pl-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Home services at your doorstep
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            What are you looking for?
          </p>
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-3 gap-4 max-w-md">
            {services.map(service => {
              const serviceSlug = service.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
              return (
                <ServiceItem 
                  key={service.name} 
                  icon={service.icon} 
                  name={service.name} 
                  linkTo={`/service/${serviceSlug}`}
                />
              );
            })}
          </div>
           <div className="mt-12 flex items-center space-x-8">
            <div className="flex items-center">
                <StarIcon />
                <div className="ml-2">
                    <p className="text-xl font-bold text-gray-900">4.8</p>
                    <p className="text-sm text-gray-500">Service Rating</p>
                </div>
            </div>
            <div className="border-l border-gray-300 h-10"></div>
            <div>
                <p className="text-xl font-bold text-gray-900">12M+</p>
                <p className="text-sm text-gray-500">Customers Globally</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="col-span-2">
                <img 
                    src="https://images.pexels.com/photos/4239147/pexels-photo-4239147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Professional cleaning a kitchen" 
                    className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
            </div>
            <div>
                 <img 
                    src="https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Cleaning a sofa" 
                    className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
            </div>
            <div>
                 <img 
                    src="https://images.pexels.com/photos/5998135/pexels-photo-5998135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Man cleaning a window" 
                    className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;