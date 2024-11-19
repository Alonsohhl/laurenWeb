"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeLoader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const lastShown = localStorage.getItem("welcomeLoaderShown");
    const currentTime = new Date().getTime();

    // if (!lastShown || currentTime - parseInt(lastShown) > 24 * 60 * 60 * 1000) {
    if (!lastShown || currentTime - parseInt(lastShown) > 0) {
      setShowLoader(true);
      localStorage.setItem("welcomeLoaderShown", currentTime.toString());
    } else {
      setShowLoader(false);
    }

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // Hide after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-black text-white text-4xl font-bold z-50"
        >
          Lauren Hepburn
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeLoader;
