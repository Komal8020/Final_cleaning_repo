import React, { useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ServiceCard from './ServiceCard';
import ViewAllPopup from './ViewAllPopup'; 
import servicesData from '../data/fullHomeVendors.json';
import './VendorSection.css';

const VendorSection = ({ vendorId }) => {
  const vendor = servicesData.find(v => v.vendorId === vendorId);
  const [showPopup, setShowPopup] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 320 * 2;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleViewAll = () => {
    setShowPopup(true);
  };

  if (!vendor) return null;

  return (
    <div className="vendor-section">
      <div className="vendor-header-container">
        <div className="vendor-header">
          <div className="vendor-header-left">
            <h2 className="vendor-title">{vendor.vendorName}</h2>
            <p className="vendor-description">
              Discover top-rated services offered by <strong>{vendor.vendorName}</strong>. Rated by thousands of users!
            </p>
          </div>

          <div className="view-scroll-controls">
            <button className="view-all-main-btn" onClick={handleViewAll}>
              View All
            </button>
            <button onClick={() => handleScroll('left')} className="arrow-btn-circle"><FaArrowLeft /></button>
            <button onClick={() => handleScroll('right')} className="arrow-btn-circle"><FaArrowRight /></button>
          </div>
        </div>
      </div>

      <div className="service-card-wrapper" ref={scrollRef}>
        {vendor.services.map(service => (
          <div key={service.id} className="service-card-slider">
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      {showPopup && (
        <ViewAllPopup
          category={vendor.vendorName}
          services={vendor.services}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default VendorSection;
