import React from 'react';
import { motion } from 'framer-motion';

// Testimonial data
const testimonials = [
  {
    id: 1,
    stars: 5,
    text: "They will be at top of my list the next time I need a cleaning. It was easy efficient to set the cleaning, the price was fair and up front, and the cleaning team did a top-notch job.",
    author: "Martin Qube Jr",
    role: "Dust Manager",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg" // Placeholder avatar
  },
  {
    id: 2,
    stars: 5,
    text: "I really loved coming home to a clean, fresh smelling home and being able to relax and spend time with my family instead of worrying about cobwebs. Thank you so much!",
    author: "Maria White",
    role: "Energia",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg" // Placeholder avatar
  },
  {
    id: 3,
    stars: 5,
    text: "We were having a graduation party the next day and they are amazing. They were so kind and completely thorough. Even my toaster oven was cleaned out! My house sparkled.",
    author: "Wendy Wensel",
    role: "Clunora",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg" // Placeholder avatar
  },
];

const Feedback = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-blue-500 font-satisfy text-xl mb-2"
        >
          Satisfaction Guarantee
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold text-gray-800 mb-12 leading-tight"
        >
          What Our Clients Say?!
        </motion.h2>

        {/* --- CHANGE 1: Use CSS Grid for the layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              // --- CHANGE 2: Removed specific width classes (w-full, md:w-80, etc.) ---
              className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-blue-400" />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <span className="text-gray-300 text-5xl font-serif leading-none opacity-75">”</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 space-x-2">
            <span className="h-3 w-3 bg-blue-500 rounded-full"></span>
            <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
            <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Feedback;