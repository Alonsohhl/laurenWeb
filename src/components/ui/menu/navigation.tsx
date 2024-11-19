"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
  id: string;
  label: string;
  hash: string;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home", hash: "#home" },
  { id: "portfolio", label: "Portfolio", hash: "#portfolio" },
  { id: "about", label: "about", hash: "#about" },
];

// Framer Motion variants
const navContainerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

const activeIndicatorVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
};

// Debounce helper function
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(
    debounce(() => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;
      let newActiveSection = activeSection;

      for (const section of sections) {
        const topOffset = section.offsetTop;
        const height = section.offsetHeight;
        if (
          scrollPosition >= topOffset &&
          scrollPosition < topOffset + height &&
          newActiveSection !== section.id
        ) {
          newActiveSection = section.id;
          break;
        }
      }

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
        window.history.replaceState(null, "", `#${newActiveSection}`);
      }
    }, 100),
    [activeSection],
  );

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setActiveSection(hash);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      window.history.pushState(null, "", `#${sectionId}`);
    }
  }, []);

  const navButtons = useMemo(() => {
    return navItems.map((item) => (
      <motion.li
        key={item.id}
        variants={navItemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={() => scrollToSection(item.id)}
          className="px-4 py-2 rounded-md relative font-light font-sans"
        >
          {item.label}
          <AnimatePresence>
            {activeSection === item.id && (
              <motion.div
                variants={activeIndicatorVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 opacity-20 rounded-md -z-10"
              />
            )}
          </AnimatePresence>
        </button>
      </motion.li>
    ));
  }, [activeSection, scrollToSection]);

  return (
    <motion.ul
      variants={navContainerVariants}
      initial="hidden"
      animate="visible"
      className="flex gap-4 first-letter:text-[1.2em] flex-col text-center"
    >
      {navButtons}
    </motion.ul>
  );
}
