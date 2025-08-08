import React, { useState, useRef } from "react";
import {
  Search,
  MapPin,
  Star,
  Phone,
  Menu,
  X,
  ChevronRight,
  Wind,
  Sun,
  Droplets,
  Sparkles,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

// Main App Component: Renders the entire page
const HeroSectionWrapper = () => {
  const [showServices, setShowServices] = useState(false);
  const servicesRef = useRef(null);

  const handleShowServices = () => {
    setShowServices(true);
    // Scroll to the services section after it becomes visible
    setTimeout(() => {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="bg-[#fff] min-h-screen font-sans">
      <main className="pt-8 px-0">
        <HeroSection onShowServices={handleShowServices} />
        <AnimatePresence>
          {showServices && (
            <div ref={servicesRef}>
              <ServicesSection setShowServices={setShowServices} />
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

// Hero Section
const HeroSection = ({ onShowServices }) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={heroRef}
      className="relative bg-[#15171f] pt-16 pb-24 px-6 overflow-hidden rounded-3xl shadow-lg"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="text-center md:text-left z-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Get Your
            <br />
            <span className="text-[#f87559]">Dream Clean</span> Home
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-lg mx-auto md:mx-0">
            Professional, reliable, and eco-friendly cleaning solutions tailored
            to your lifestyle.
          </p>
          <BookingForm onShowServices={onShowServices} />
        </motion.div>

        <div className="relative h-[500px] hidden md:block">
          <motion.div
            style={{ y: y3 }}
            className="absolute top-5 left-1/2 w-1/2"
            initial={{ opacity: 20, x: -80 }}
            animate={{ opacity: 1, y: -100 }}
            transition={{ duration: 1.025, ease: "easeOut" }}
          >
            <img
              src="https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg"
              alt="Clean living room"
              className="rounded-2xl shadow-lg w-80 h-70 object-cover"
            />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="absolute top-40 "
            initial={{ opacity: 0, y: -50, scale: 1 }}
            animate={{
              opacity: 100,
              y: -20,
              x: -0,
              scale: [1, 1.05, 1], // Pulse effect: starts at 1, goes to 1.05, then back to 1
            }}
            transition={{
              duration: 1.075,
              scale: {
                duration: 1.5, // Duration for one pulse cycle
                repeat: Infinity, // Repeat the animation forever
                ease: "easeInOut", // Smooth easing for the pulse
              },
            }}
          >
            <img
              src="https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg"
              alt="Cleaning supplies"
              className="rounded-2xl shadow-lg w-4.0 object-cover size-50"
            />
          </motion.div>
          <motion.div
            style={{ y: y3 }}
            className="absolute top-2/3 left-1/2 w-1/2"
            initial={{ opacity: 20, x: -80 }}
            animate={{ opacity: 1, y: -40 }}
            transition={{ duration: 1.025, ease: "easeOut" }}
          >
            <img
              src="https://images.pexels.com/photos/6186813/pexels-photo-6186813.jpeg"
              alt="Happy client"
              className=" rounded-2xl shadow-lg w-80 h-60  object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Booking Form
const BookingForm = ({ onShowServices }) => {
  return (
    <motion.div
      className="mt-8 bg-[#2c2d34] p-4 rounded-xl shadow-lg border border-gray-700 flex flex-col gap-4 max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-full md:flex-1 flex items-center">
       
          <div className="w-full">
            <label htmlFor="service" className="text-xs text-gray-400">
              Select
            </label>
            <select
              id="service"
              className="w-full bg-transparent focus:outline-none font-semibold text-white appearance-none"
            >
              <option className="bg-[#2c2d34]">Home Cleaning</option>
              <option className="bg-[#2c2d34]">Office Cleaning</option>
              <option className="bg-[#2c2d34]">Deep Cleaning</option>
              <option className="bg-[#2c2d34]">AC Cleaning</option>
            </select>
          </div>
        </div>
        <div className="w-full h-px md:w-px md:h-10 bg-gray-600"></div>
        <div className="w-full md:flex-1 flex items-center">
          <MapPin className="text-gray-400 mr-3" size={22} />
          <div className="w-full">
            <label htmlFor="location" className="text-xs text-gray-400">
              Location
            </label>
            <input
              type="text"
              id="Search Availible State"
              placeholder="Search availible state"
              className="w-full bg-transparent focus:outline-none font-semibold text-white placeholder-gray-500"
            />
          </div>
        </div>
      </div>
      <button
        onClick={onShowServices}
        className="w-full bg-[#f87559] text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-500 transition-all duration-300 flex items-center justify-center gap-2"
      >
        Book Now <ChevronRight size={20} />
      </button>
    </motion.div>
  );
};

// Service Section (Combined Filter and Display)
// Service Section (Combined Filter and Display)
const ServicesSection = ({ setShowServices }) => {
  const services = [
    {
      icon: <Sparkles />,
      title: "Standard Cleaning",
      description:
        "The essentials for a sparkling clean home on a regular basis.",
    },
    {
      icon: <Droplets />,
      title: "Deep Cleaning",
      description: "A thorough top-to-bottom clean for a fresh start.",
    },
    {
      icon: <Wind />,
      title: "Air Duct Cleaning",
      description: "Improve your indoor air quality and system efficiency.",
    },
    {
      icon: <Sun />,
      title: "Window Cleaning",
      description: "Let the sunshine in with our streak-free window service.",
    },
  ];

  return (
    <motion.section
      className="py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <ServiceFilterBar setShowServices={setShowServices} />
      <div className="container mx-auto px-6 text-center mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-[#12131a] rounded-xl shadow-lg hover:shadow-[#D6C9FD] hover:-translate-y-2 transition-all duration-300 border border-gray-800"
            >
              <div className="inline-block p-4 bg-[#2c2d34] text-[#D6C9FD] rounded-full">
                {React.cloneElement(service.icon, { size: 28 })}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};// Service Filter Bar
// Service Filter Bar
const ServiceFilterBar = ({ setShowServices }) => {
    const [search, setSearch] = useState("");
    const [kind, setKind] = useState("");
    const [place, setPlace] = useState("");
    const [date, setDate] = useState("");

    const handleChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate) {
      setDate(selectedDate); // Only update if a valid date is selected
    }
  };
    const resetFilters = () => {
        setShowServices(false);
        setSearch("");
        setKind("");
        setPlace("");
        setDate("");
    };

    return (
        <div className="bg-[#12131a] text-white py-4 px-4 md:px-8 rounded-xl mt-12 shadow-lg flex flex-col md:flex-row gap-4 items-center justify-center container mx-auto border border-gray-800">
            <div className="flex items-center bg-[#2c2d34] rounded-lg px-4 py-2 w-full md:w-1/3">
                <Search className="mr-2 text-gray-400" size={18} />
                <input
                    type="text"
                    placeholder="Search for a service..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full"
                />
            </div>
            <select
                value={kind}
                onChange={(e) => setKind(e.target.value)}
                className="bg-[#2c2d34] text-white px-4 py-2 rounded-lg w-full md:w-auto"
            >
                <option value="" className="bg-[#2c2d34]">
                    Full AC Cleaning
                </option>
                <option value="home" className="bg-[#2c2d34]">
                    AC Pine Cleaning
                </option>
                <option value="deep" className="bg-[#2c2d34]">
                    AC repairing
                </option>
                <option value="window" className="bg-[#2c2d34]">
                    Micro Cleaning Part in ac
                </option>
            </select>
            <select
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                className="bg-[#2c2d34] text-white px-4 py-2 rounded-lg w-full md:w-auto"
            >
                <option value="" className="bg-[#2c2d34]">
                    Place
                </option>
                <option value="nyc" className="bg-[#2c2d34]">
                    City1 in haryana
                </option>
                <option value="la" className="bg-[#2c2d34]">
                    City2 in haryana
                </option>
            </select>
<div className="relative w-full max-w-sm">
      {/* Styled Container */}
      <div className="bg-[#2c2d34] text-white px-4 py-2 rounded-lg flex items-center gap-2 w-full">
        {/* Calendar Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>

        {/* Adaptive Input Field */}
        <input
          type={date ? "date" : "text"}
          value={date}
          placeholder="Book your appointment on…"
          onChange={(e) => setDate(e.target.value)}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => {
            if (!e.target.value) e.target.type = "text";
          }}
          className="bg-transparent text-white placeholder-white focus:outline-none w-full cursor-pointer"
        />
      </div>
    </div>
            <button
                onClick={resetFilters}
                className="text-gray-400 hover:text-white transition-colors"
            >
                <X size={24} />
            </button>
        </div>
    );
};
export default HeroSectionWrapper;