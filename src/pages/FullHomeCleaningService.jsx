// FullHomeCleaningService.jsx
import React, { useState } from 'react';
import BannerSlider from '../components/BannerSlider';
import Navbar from '../components/Navbar';
import FooterWithCarousel from '../components/FooterWithCarousel';
import VendorSection from '../components/VendorSection';
import vendorData from '../data/fullHomeVendors.json';
import ServicePopup from '../components/ServicePopup';

const FullHomeCleaningService = () => {
  const [showServices, setShowServices] = useState(false);

  const toggleServicePopup = () => setShowServices(!showServices);

 const services = [
  { title: 'Full Home Cleaning', image: '/images/home_cleaning copy.jpg', link: '/services/full-home-cleaning' },
  { title: 'AC Repair Service', image: '/images/ac_repair.jpg', link: '/services/ac-repair' },
  { title: 'Cleaning Service', image: '/images/cleaning_service.jpg', link: '/services/cleaning' },
  { title: 'Commercial Cleaning', image: '/images/commercial.jpg', link: '/services/commercial-cleaning' },
  { title: 'Pest Control', image: '/images/pest_control.jpg', link: '/services/pest-control' },
  { title: 'Carpenter', image: '/images/carpenter.jpg', link: '/services/carpenter' },
  { title: 'Home Painting', image: '/images/home_painting.jpg', link: '/services/home-painting' },
  { title: 'Plumber', image: '/images/plumber.jpg', link: '/services/plumber' },
  { title: 'Electrician', image: '/images/electrician.jpg', link: '/services/electrician' },
  { title: 'Balloon Decoration', image: '/images/balloon_decoration.jpg', link: '/services/balloon-decoration' },
];

  return (
    <div className="service-page" style={{ position: 'relative' }}>
      <Navbar toggleServicePopup={toggleServicePopup} showServices={showServices} />

      {showServices && (
        <ServicePopup
          services={services}
          onClose={toggleServicePopup}
        />
      )}

      <BannerSlider />

      {vendorData.map((vendor) => (
        <VendorSection key={vendor.vendorId} vendorId={vendor.vendorId} />
      ))}

      <FooterWithCarousel />
    </div>
  );
};

export default FullHomeCleaningService;
