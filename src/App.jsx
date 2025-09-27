import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Modal from './components/Modal'; // Import the Modal

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingFinish = () => {
    setLoading(false);
  };

  if (loading) {
    return <Preloader onFinished={handleLoadingFinish} />;
  }

  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Modal /> {/* Add the Modal component here */}
    </div>
  );
}

export default App;