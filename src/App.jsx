// App.jsx
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./store/userSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FullHomeCleaningService from "./pages/FullHomeCleaningService";
import ContactUs from "./components/ContactUs";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser))); // works now
    }
  }, [dispatch]);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services/:serviceName" element={<FullHomeCleaningService />} />
      </Routes>
    </Router>
  );
}

export default App;
