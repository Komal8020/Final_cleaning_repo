// // // FullHomeCleaningService.jsx
// // import React, { useState } from 'react';
// // import BannerSlider from '../components/BannerSlider';
// // import Navbar from '../components/Navbar';
// // import FooterWithCarousel from '../components/FooterWithCarousel';
// // import VendorSection from '../components/VendorSection';
// // import vendorData from '../data/fullHomeVendors.json';
// // import ServicePopup from '../components/ServicePopup';

// // const FullHomeCleaningService = () => {
// //   const [showServices, setShowServices] = useState(false);

// //   const toggleServicePopup = () => setShowServices(!showServices);

// //  const services = [
// //   { title: 'Full Home Cleaning', image: '/images/home_cleaning copy.jpg', link: '/services/full-home-cleaning' },
// //   { title: 'AC Repair Service', image: '/images/ac_repair.jpg', link: '/services/ac-repair' },
// //   { title: 'Cleaning Service', image: '/images/cleaning_service.jpg', link: '/services/cleaning' },
// //   { title: 'Commercial Cleaning', image: '/images/commercial.jpg', link: '/services/commercial-cleaning' },
// //   { title: 'Pest Control', image: '/images/pest_control.jpg', link: '/services/pest-control' },
// //   { title: 'Carpenter', image: '/images/carpenter.jpg', link: '/services/carpenter' },
// //   { title: 'Home Painting', image: '/images/home_painting.jpg', link: '/services/home-painting' },
// //   { title: 'Plumber', image: '/images/plumber.jpg', link: '/services/plumber' },
// //   { title: 'Electrician', image: '/images/electrician.jpg', link: '/services/electrician' },
// //   { title: 'Balloon Decoration', image: '/images/balloon_decoration.jpg', link: '/services/balloon-decoration' },
// // ];

// //   return (
// //     <div className="service-page" style={{ position: 'relative' }}>
// //       <Navbar toggleServicePopup={toggleServicePopup} showServices={showServices} />

// //       {showServices && (
// //         <ServicePopup
// //           services={services}
// //           onClose={toggleServicePopup}
// //         />
// //       )}

// //       <BannerSlider />

// //       {vendorData.map((vendor) => (
// //         <VendorSection key={vendor.vendorId} vendorId={vendor.vendorId} />
// //       ))}

// //       <FooterWithCarousel />
// //     </div>
// //   );
// // };

// // export default FullHomeCleaningService;



// // import React, { useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import BannerSlider from '../components/BannerSlider';
// // import Navbar from '../components/Navbar';
// // import FooterWithCarousel from '../components/FooterWithCarousel';
// // import VendorSection from '../components/VendorSection';
// // import ServicePopup from '../components/ServicePopup';

// // import fullHomeVendors from '../data/fullHomeVendors.json';
// // import acRepairVendors from '../data/AcRepair.json';


// // const FullHomeCleaningService = () => {
// //   const { serviceName } = useParams();
// //   const [showServices, setShowServices] = useState(false);
// //   const toggleServicePopup = () => setShowServices(!showServices);

// //   const serviceDataMap = {
// //     'full-home-cleaning': { vendors: fullHomeVendors },
// //     'ac-repair': { vendors: acRepairVendors },
// //   };

// //   const vendors =
// //     serviceDataMap[serviceName]?.vendors || serviceDataMap['full-home-cleaning'].vendors;

// //   const services = [
// //     { title: 'Full Home Cleaning', image: '/images/home_cleaning copy.jpg', link: '/services/full-home-cleaning' },
// //     { title: 'AC Repair Service', image: '/images/ac_repair.jpg', link: '/services/ac-repair' },
// //   ];

// //   return (
// //     <div className="service-page" style={{ position: 'relative' }}>
// //       <Navbar toggleServicePopup={toggleServicePopup} showServices={showServices} />

// //       {showServices && (
// //         <ServicePopup
// //           services={services}
// //           onClose={toggleServicePopup}
// //         />
// //       )}

// //       <BannerSlider />

// //       {vendors.map((vendor) => (
// //         <VendorSection key={vendor.vendorId} vendorId={vendor.vendorId} />
// //       ))}

// //       <FooterWithCarousel />
// //     </div>
// //   );
// // };

// // export default FullHomeCleaningService;
// src/pages/FullHomeCleaningService.js

// import React, { useState, useEffect } from 'react';
// import { useParams, useLocation } from 'react-router-dom';
// import BannerSlider from '../components/BannerSlider';
// import Navbar from '../components/Navbar';
// import FooterWithCarousel from '../components/FooterWithCarousel';
// import VendorSection from '../components/VendorSection';
// import ServicePopup from '../components/ServicePopup';
// import FilterSidebar from '../components/FilterSidebar';
// import Portal from '../components/Portal';

// import fullHomeVendors from '../data/fullHomeVendors.json';
// import acRepairVendors from '../data/acRepair.json';
// import commercialCleaning from '../data/CommercialCleaning.json'

// const services = [
// { title: 'Full Home Cleaning', image: '/images/home_cleaning copy.jpg', link: '/services/full-home-cleaning' },
//     { title: 'AC Repair Service', image: '/images/ac_repair.jpg', link: '/services/ac-repair' },];

// const FullHomeCleaningService = () => {
//   const { serviceName } = useParams();
//   const location = useLocation();
//   const userLocation = location.state?.location;
//   const [showServices, setShowServices] = useState(false);
//   const [allVendors, setAllVendors] = useState([]);
//   const [filteredVendors, setFilteredVendors] = useState([]);
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [appliedFilters, setAppliedFilters] = useState({
//     minPrice: 400,
//     maxPrice: 3000,
//     serviceTypes: [],
//     apartmentSize: [],
//     location: '',
//   });

//   const toggleServicePopup = () => setShowServices(!showServices);
//   const toggleFilterSidebar = () => setIsFilterOpen(!isFilterOpen);

//   const serviceDataMap = {
//     'full-home-cleaning': fullHomeVendors,
//     'ac-repair': acRepairVendors,
//     'commercial-cleaning': commercialCleaning
//   };

//   useEffect(() => {
//     const vendors = serviceDataMap[serviceName] || [];
//     setAllVendors(vendors);

//     setAppliedFilters({
//       minPrice: 400,
//       maxPrice: 3000,
//       serviceTypes: [],
//       apartmentSize: [],
//       location: '',
//     });
//   }, [serviceName]);

//   useEffect(() => {
//     let vendorsToFilter = userLocation
//       ? allVendors.filter(
//           (vendor) =>
//             vendor.location?.toLowerCase().replace(/\s/g, '') ===
//             userLocation.toLowerCase().replace(/\s/g, '')
//         )
//       : allVendors;

//     vendorsToFilter = vendorsToFilter.filter(vendor => {
//       const priceMatch = vendor.services.some(service =>
//         service.price >= appliedFilters.minPrice && service.price <= appliedFilters.maxPrice
//       );

//       const serviceTypeMatch = appliedFilters.serviceTypes.length === 0 ||
//         vendor.services.some(service => appliedFilters.serviceTypes.includes(service.title)); // Filter by service title

//       const apartmentSizeMatch = appliedFilters.apartmentSize.length === 0 ||
//         vendor.services.some(service => appliedFilters.apartmentSize.includes(service.description)); // Filter by service description

//       const locationMatch = !appliedFilters.location ||
//         vendor.location?.toLowerCase().includes(appliedFilters.location.toLowerCase());

//       return priceMatch && serviceTypeMatch && apartmentSizeMatch && locationMatch;
//     });

//     setFilteredVendors(vendorsToFilter);
//   }, [allVendors, userLocation, appliedFilters]);

//   const handleApplyFilters = (filters) => {
//     setAppliedFilters(filters);
//   };

//   const uniqueServiceTitles = Array.from(
//     new Set(allVendors.flatMap(vendor => vendor.services.map(service => service.title)))
//   );

//   const uniqueApartmentSizes = Array.from(
//     new Set(allVendors.flatMap(vendor => vendor.services.map(service => service.description)))
//   );

//   const noVendorsFound = allVendors.length === 0;
//   const noVendorsAfterFilter = allVendors.length > 0 && filteredVendors.length === 0;

//   return (
//     <div className="service-page relative">
//       <Navbar
//         toggleServicePopup={toggleServicePopup}
//         showServices={showServices}
//         toggleFilterSidebar={toggleFilterSidebar}
//       />

//       {showServices && (
//         <ServicePopup services={services} onClose={toggleServicePopup} />
//       )}

//       {isFilterOpen && (
//         <Portal>
//           <div
//             className={`fixed inset-y-0 right-0 z-[1002] w-80 max-w-full bg-white shadow-xl transition-transform duration-300 ${
//               isFilterOpen ? 'translate-x-0' : 'translate-x-full'
//             }`}
//           >
//             <FilterSidebar
//               onApplyFilters={handleApplyFilters}
//               onClose={toggleFilterSidebar}
//               minPrice={appliedFilters.minPrice}
//               maxPrice={appliedFilters.maxPrice}
//               serviceTypes={appliedFilters.serviceTypes}
//               apartmentSize={appliedFilters.apartmentSize}
//               selectedLocation={appliedFilters.location}
//               allServiceTypes={uniqueServiceTitles} // Pass service titles
//               allApartmentSizes={uniqueApartmentSizes} // Pass service descriptions
//             />
//           </div>
//         </Portal>
//       )}

//       <BannerSlider />
//       <div className="container mx-auto px-6 py-12">
//         <h1 className="text-3xl font-bold text-center mb-8 capitalize">
//           {serviceName.replace(/-/g, ' ')} Services
//         </h1>
//         {noVendorsFound ? (
//            <div className="text-center text-gray-700 text-xl p-8 bg-gray-100 rounded-xl">
//              😔 No vendors found for this service.
//            </div>
//         ) : noVendorsAfterFilter ? (
//           <div className="text-center text-gray-700 text-xl p-8 bg-gray-100 rounded-xl">
//             😔 No services available in your selected location or matching your filters.
//           </div>
//         ) : (
//           filteredVendors.map((vendor) => (
//             <VendorSection key={vendor.vendorId} vendor={vendor} selectedLocation={userLocation} />
//           ))
//         )}
//       </div>
//       <FooterWithCarousel />
//     </div>
//   );
// };

// export default FullHomeCleaningService;


import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import BannerSlider from '../components/BannerSlider';
import Navbar from '../components/Navbar';
import FooterWithCarousel from '../components/FooterWithCarousel';
import VendorSection from '../components/VendorSection';
import ServicePopup from '../components/ServicePopup';
import FilterSidebar from '../components/FilterSidebar';
import Portal from '../components/Portal';

import fullHomeVendors from '../data/fullHomeVendors.json';
import acRepairVendors from '../data/acRepair.json';
import commercialCleaning from '../data/CommercialCleaning.json';

const services = [
  { title: 'Full Home Cleaning', image: '/images/home_cleaning copy.jpg', link: '/services/full-home-cleaning' },
  { title: 'AC Repair Service', image: '/images/ac_repair.jpg', link: '/services/ac-repair' },
];

const FullHomeCleaningService = () => {
  const { serviceName } = useParams();
  const location = useLocation();
  const userLocation = location.state?.location;

  const [showServices, setShowServices] = useState(false);
  const [allVendors, setAllVendors] = useState([]);
  const [filteredVendors, setFilteredVendors] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({
    minPrice: 400,
    maxPrice: 3000,
    serviceTypes: [],
    apartmentSize: [],
    location: '',
  });

  const toggleServicePopup = () => setShowServices(!showServices);
  const toggleFilterSidebar = () => setIsFilterOpen(!isFilterOpen);

  const serviceDataMap = {
    'full-home-cleaning': fullHomeVendors,
    'ac-repair': acRepairVendors,
    'commercial-cleaning': commercialCleaning,
  };

  // Load vendors when service changes
  useEffect(() => {
    const vendors = serviceDataMap[serviceName] || [];
    setAllVendors(vendors);

    // Reset filters when service changes
    setAppliedFilters({
      minPrice: 400,
      maxPrice: 3000,
      serviceTypes: [],
      apartmentSize: [],
      location: '',
    });
  }, [serviceName]);

  useEffect(() => {
  let vendorsToFilter = allVendors;

  // Vendor-level filter: user location or applied location filter
  if (userLocation) {
    vendorsToFilter = vendorsToFilter.filter(
      (vendor) =>
        vendor.location?.toLowerCase().replace(/\s/g, '') ===
        userLocation.toLowerCase().replace(/\s/g, '')
    );
  }

  if (appliedFilters.location) {
    vendorsToFilter = vendorsToFilter.filter((vendor) =>
      vendor.location?.toLowerCase().includes(appliedFilters.location.toLowerCase())
    );
  }

  // Filter services inside each vendor
  vendorsToFilter = vendorsToFilter
    .map((vendor) => {
      const filteredServices = vendor.services.filter((service) => {
        const priceMatch =
          service.price >= appliedFilters.minPrice &&
          service.price <= appliedFilters.maxPrice;

        const serviceTypeMatch =
          appliedFilters.serviceTypes.length === 0 ||
          appliedFilters.serviceTypes.includes(service.title);

        const apartmentSizeMatch =
          appliedFilters.apartmentSize.length === 0 ||
          appliedFilters.apartmentSize.includes(service.description);

        return priceMatch && serviceTypeMatch && apartmentSizeMatch;
      });

      return {
        ...vendor,
        services:
          appliedFilters.serviceTypes.length ||
          appliedFilters.apartmentSize.length ||
          appliedFilters.minPrice !== 400 ||
          appliedFilters.maxPrice !== 3000
            ? filteredServices
            : vendor.services, // If no filters, show all services
      };
    })
    .filter((vendor) => vendor.services.length > 0);

  setFilteredVendors(vendorsToFilter);
}, [allVendors, userLocation, appliedFilters]);


  const handleApplyFilters = (filters) => {
    setAppliedFilters(filters);
  };

  const uniqueServiceTitles = Array.from(
    new Set(allVendors.flatMap((vendor) => vendor.services.map((service) => service.title)))
  );

  const uniqueApartmentSizes = Array.from(
    new Set(allVendors.flatMap((vendor) => vendor.services.map((service) => service.description)))
  );

  const noVendorsFound = allVendors.length === 0;
  const noVendorsAfterFilter = allVendors.length > 0 && filteredVendors.length === 0;

  return (
    <div className="service-page relative">
      <Navbar
        toggleServicePopup={toggleServicePopup}
        showServices={showServices}
        toggleFilterSidebar={toggleFilterSidebar}
      />

      {showServices && <ServicePopup services={services} onClose={toggleServicePopup} />}

      {isFilterOpen && (
        <Portal>
          <div
            className={`fixed inset-y-0 right-0 z-[1002] w-80 max-w-full bg-white shadow-xl transition-transform duration-300 ${
              isFilterOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <FilterSidebar
              onApplyFilters={handleApplyFilters}
              onClose={toggleFilterSidebar}
              minPrice={appliedFilters.minPrice}
              maxPrice={appliedFilters.maxPrice}
              serviceTypes={appliedFilters.serviceTypes}
              apartmentSize={appliedFilters.apartmentSize}
              selectedLocation={appliedFilters.location}
              allServiceTypes={uniqueServiceTitles}
              allApartmentSizes={uniqueApartmentSizes}
            />
          </div>
        </Portal>
      )}

      <BannerSlider />

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 capitalize">
          {serviceName.replace(/-/g, ' ')} Services
        </h1>

        {noVendorsFound ? (
          <div className="text-center text-gray-700 text-xl p-8 bg-gray-100 rounded-xl">
            😔 No vendors found for this service.
          </div>
        ) : noVendorsAfterFilter ? (
          <div className="text-center text-gray-700 text-xl p-8 bg-gray-100 rounded-xl">
            😔 No services available in your selected location or matching your filters.
          </div>
        ) : (
          filteredVendors.map((vendor) => (
            <VendorSection key={vendor.vendorId} vendor={vendor} selectedLocation={userLocation} />
          ))
        )}
      </div>

      <FooterWithCarousel />
    </div>
  );
};

export default FullHomeCleaningService;
