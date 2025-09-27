import React from 'react';

// Reusable card component
const ServiceCategoryCard = ({ imageSrc, title }) => (
  <div className="group cursor-pointer flex-shrink-0 w-80 mx-4">
    <div className="overflow-hidden rounded-lg">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
      />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
  </div>
);

const Services = () => {
  // Updated list to include all 6 services with new images
  const serviceCategories = [
    { title: 'Home Cleaning', imageSrc: 'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Bathroom Cleaning', imageSrc: 'https://images.pexels.com/photos/6587902/pexels-photo-6587902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Kitchen Cleaning', imageSrc: 'https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Sofa Cleaning', imageSrc: 'https://images.pexels.com/photos/4577410/pexels-photo-4577410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Carpet Cleaning', imageSrc: 'https://images.pexels.com/photos/7534241/pexels-photo-7534241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { title: 'Office Cleaning', imageSrc: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  ];

  return (
    <section className="bg-blue-50 py-16 relative z-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">Cleaning Services</h2>
        </div>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee">
          {/* Render the list of services twice for a seamless loop */}
          {serviceCategories.concat(serviceCategories).map((category, index) => (
            <ServiceCategoryCard 
              key={`${category.title}-${index}`}
              imageSrc={category.imageSrc} 
              title={category.title} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;