import React from 'react';
import { FaStar, FaClock, FaTicketAlt } from 'react-icons/fa';
import './ServiceCard.css';

const FrostedActionButton = ({ label, icon: Icon, onClick }) => (
  <div className="frosted-action-group" onClick={onClick}>
    {label && <span className="btn-text">{label}</span>}
    {Icon && (
      <span className="btn-icon-wrapper">
        <Icon className="btn-icon" />
      </span>
    )}
  </div>
);

const PriceTag = ({ price, originalPrice }) => (
  <div className="price-tag">
    <span className="new-price">₹{price}</span>
    <span className="old-price">₹{originalPrice}</span>
  </div>
);

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="image-container">
        <img
          src={service.serviceImage}
          alt={service.title}
          className="service-image"
        />

        <div className="frosted-overlay">
          <div className="service-header">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>

          <div className="hover-actions">
            <button className="add-cart-btn">Add to Cart</button>
            <FrostedActionButton
              label="View Details"
              customClass="view-detail-btn"
            />
          </div>
        </div>
      </div>

      <div className="service-meta">
        <div className="meta-left">
          <div className="rating-duration">
            <span className="rating">
              <FaStar className="star-icon" />
              {service.rating} • {service.reviews} reviews
            </span>
            <span className="duration">
              <FaClock className="clock-icon" /> {service.duration}
            </span>
          </div>
          <PriceTag price={service.price} originalPrice={service.originalPrice} />
        </div>
        <div className="meta-right">
          <FrostedActionButton
            label="Book Now"
            icon={FaTicketAlt}
            customClass="book-now-btn"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
