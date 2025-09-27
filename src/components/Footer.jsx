import React from 'react';
import logo from '/src/assets/HiNest_Care_logo2.webp'; // Import the logo

// A reusable component for the footer link columns
const FooterLinkColumn = ({ title, links }) => (
  <div>
    <h3 className="font-bold text-gray-800 mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <a href="#" className="text-gray-600 hover:text-blue-700 hover:underline">
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// A reusable component for social media icons
const SocialIcon = ({ children }) => (
    <a href="#" className="text-gray-500 hover:text-blue-700">
        {children}
    </a>
);


const Footer = () => {
  const companyLinks = ['About us', 'Terms & conditions', 'Privacy policy'];
  const customerLinks = ['HiNest Care reviews', 'Categories near you', 'Contact us'];
  const professionalLinks = ['Register as a professional'];

  return (
    <footer className="bg-gray-100 border-t pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top section with links and social icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
             <img src={logo} alt="HiNest Care Logo" className="h-12" />
          </div>
          
          {/* Link Columns */}
          <FooterLinkColumn title="Company" links={companyLinks} />
          <FooterLinkColumn title="For customers" links={customerLinks} />
          <FooterLinkColumn title="For professionals" links={professionalLinks} />

          {/* Social Links Column */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Social links</h3>
            <div className="flex space-x-4">
                <SocialIcon>
                    {/* Twitter Icon */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </SocialIcon>
                 <SocialIcon>
                    {/* Instagram Icon */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 4.22c.636-.247 1.363-.416 2.427-.465C9.792 3.713 10.146 3.7 12.573 3.7h-.258zM12 4.865a7.135 7.135 0 100 14.27 7.135 7.135 0 000-14.27zM12 16.865a4.865 4.865 0 110-9.73 4.865 4.865 0 010 9.73z" clipRule="evenodd"></path></svg>
                </SocialIcon>
            </div>
            <div className="mt-6 space-y-4">
                <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-12"/></a>
                <a href="#"><img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-12"/></a>
            </div>
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="border-t mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 HiNest Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

