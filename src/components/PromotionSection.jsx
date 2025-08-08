// import React from "react";

// const promotions = [
//   {
//     title: "Let Your Home Shine Brighter Than Ever",
//     subtitle:
//       "Experience top-tier cleaning backed by trusted professionals.",
//     buttonText: "Schedule a Free Consultation",
//     image: "/images/cleaner-portrait.jpg", 
//     reverse: false,
//   },
//   {
//     title: "Get 20% Off Your First Cleaning!",
//     subtitle:
//       "This exclusive deal is reserved for new customers and is available for a limited time.",
//     buttonText: "Claim Your Discount",
//     image: "/images/cleaning-supplies.jpg", 
//     reverse: false,
//   },
// ];

// const PromotionCard = ({ title, subtitle, buttonText, image }) => {
//   return (
//     <div className="flex-1 min-w-[280px] bg-gradient-to-r from-[#e0edff] to-[#f0f8ff] rounded-2xl p-6 flex flex-col justify-between shadow-lg overflow-hidden">
//       <div className="flex flex-col lg:flex-row items-center gap-6">
//         {/* Text */}
//         <div className="flex-1">
//           <h3 className="text-2xl font-semibold text-[#0f172a] mb-2">
//             {title}
//           </h3>
//           <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
//           <button className="bg-yellow-400 text-[#1f2d3a] font-semibold px-5 py-2 rounded-lg shadow hover:brightness-105 transition">
//             {buttonText}
//           </button>
//         </div>
//         {/* Image */}
//         <div className="flex-shrink-0">
//           <div className="w-32 h-32 rounded-xl overflow-hidden bg-white shadow">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const PromotionSection = () => {
//   return (
//     <section className="py-16 px-6 md:px-20 bg-white">
//       <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
//         <div className="inline-block bg-[#e6f1fb] text-[#2563EB] text-xs font-semibold px-4 py-1 rounded-full mb-1 shadow">
//           PROMOTION
//         </div>
//         <h2 className="text-3xl sm:text-4xl font-bold text-center">
//           Get A Sparkling Clean Home <br /> At A Special Price!
//         </h2>
//         <p className="text-gray-600 text-center max-w-xl">
//           Enjoy our limited-time offer on professional home cleaning services.
//         </p>

//         <div className="w-full mt-10 flex flex-col lg:flex-row gap-8">
//           {promotions.map((p, idx) => (
//             <PromotionCard
//               key={idx}
//               title={p.title}
//               subtitle={p.subtitle}
//               buttonText={p.buttonText}
//               image={p.image}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PromotionSection;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./promotion.css";
import PromotionCardNew from "./PromotionCardNew";

const promotions = [
  {
    title: "Let Your Home Shine Brighter Than Ever",
    subtitle: "Experience top-tier cleaning backed by trusted professionals.",
    buttonText: "Schedule a Free Consultation",
    image: "/img02.jpg",
    avatar:  "/img02.jpg"
  },
  {
    title: "Get 20% Off Your First Cleaning!",
    subtitle: "Exclusive offer for new customers. Limited time only!",
    buttonText: "Claim Your Discount",
    image: "/img03.jpg",
    avatar:  "/img03.jpg"
  },
  {
    title: "Free Fridge Cleaning with Kitchen Service",
    subtitle: "Book a deep kitchen clean and get fridge cleaning absolutely free!",
    buttonText: "Book Kitchen Clean",
    image: "/img04.jpg",
    avatar:  "/img04.jpg"
  },
  {
    title: "10% Off Weekly Subscriptions",
    subtitle: "Subscribe to weekly cleaning and save every time.",
    buttonText: "Start Saving",
    image: "/img05.jpg",
    avatar:  "/img05.jpg"
  },
  {
    title: "Window Cleaning - 15% Off Today!",
    subtitle: "Let sunlight in with spotless windows. One-day deal.",
    buttonText: "Shine Windows",
    image: "/img06.jpg",
    avatar:  "/img06.jpg"
  },
  {
    title: "Combo: Bathroom + Carpet Cleaning @ 25% Off",
    subtitle: "Bundle and save more on essentials.",
    buttonText: "Book Combo",
    image: "/img07.jpg",
    avatar:  "/img07.jpg"
  },
  {
    title: "Window Cleaning - 15% Off Today!",
    subtitle: "Let sunlight in with spotless windows. One-day deal.",
    buttonText: "Shine Windows",
    image: "/img08.jpg",
    avatar:  "/img08.jpg"
  },
  {
    title: "Combo: Bathroom + Carpet Cleaning @ 25% Off",
    subtitle: "Bundle and save more on essentials.",
    buttonText: "Book Combo",
    image: "/img03.jpg",
    avatar:  "/img03.jpg"
  },
  {
    title: "Window Cleaning - 15% Off Today!",
    subtitle: "Let sunlight in with spotless windows. One-day deal.",
    buttonText: "Shine Windows",
    image: "/img02.jpg",
    avatar:  "/img02.jpg"
  },
  {
    title: "Combo: Bathroom + Carpet Cleaning @ 25% Off",
    subtitle: "Bundle and save more on essentials.",
    buttonText: "Book Combo",
    image: "/img04.jpg",
    avatar:  "/img04.jpg"
  }
];
// const PromotionCard = ({ title, subtitle, buttonText, image }) => {
//   return (
//     <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full h-[300px] flex">
//       <div className="flex-1 p-6 flex flex-col justify-between">
//         <div>
//           <h3 className="text-xl font-semibold text-[#0f172a] mb-2">{title}</h3>
//           <p className="text-sm text-gray-600 mb-4">{subtitle}</p>
//         </div>
//         <button className="bg-[#f87559] text-white font-semibold px-4 py-2 rounded-lg hover:brightness-110 transition w-fit">
//           {buttonText}
//         </button>
//       </div>
//       <div className="w-40 flex items-start justify-center pr-5 pt-6">
//         <div className="w-32 h-32 rounded-xl overflow-hidden shadow">
//           <img
//             src={image}
//             alt={title}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

const PromotionSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-black rounded-[32px]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="inline-block bg-[#fdeae6] text-[#f87559] text-xs font-semibold px-4 py-1 rounded-full mb-1 shadow">
          PROMOTION
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">
          Get A Sparkling Clean Home <br /> At A Special Price!
        </h2>
        <p className="text-gray-400 text-center max-w-xl">
          Enjoy our limited-time offers on professional home cleaning services.
        </p>

        <div className="w-full mt-10 relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
          >
            {promotions.map((promo, idx) => (
              <SwiperSlide key={idx}>
                <PromotionCardNew {...promo} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-swiper-pagination mt-6 flex justify-center gap-2"></div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
