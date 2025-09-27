import { Link } from 'react-router-dom';
import logo from '../assets/HiNest_Care_logo2.webp';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

// --- Icon components remain the same ---
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const Header = () => {
  const { openModal } = useAuth(); // Get the openModal function from context

  return (
    <header 
      className="bg-white shadow-sm sticky top-0 z-50 py-4"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="HiNest Care Logo" className="h-10" />
          </Link>
        </div>
        <div className="hidden md:flex flex-grow items-center justify-center mx-8">
           <div className="flex items-center border rounded-lg px-4 py-2 w-full max-w-lg bg-gray-50">
               <LocationIcon />
               <span className="text-gray-800 font-medium whitespace-nowrap">Nashik, Maharashtra</span>
               <span className="text-gray-300 mx-4">|</span>
               <SearchIcon />
               <input
                   type="text"
                   placeholder="Search for a service"
                   className="w-full bg-transparent focus:outline-none ml-2 text-gray-700"
               />
           </div>
        </div>
        <div className="flex items-center">
          <button 
            onClick={() => openModal('login')} 
            className="bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Login
          </button>
          <button 
            onClick={() => openModal('register')}
            className="ml-4 font-semibold px-4 py-2 rounded-lg border-2 transition-colors border-blue-700 text-blue-700 hover:bg-blue-50"
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;