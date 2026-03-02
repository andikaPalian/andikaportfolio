import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FEF9E6] px-6 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95, rotate: 2 }}
          className="bg-white border-2 border-black px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer font-black text-xl tracking-tighter uppercase"
        >
          <a href="#home">
            ANDIKA<span className="text-[#3b82f6]">PALIAN</span>
          </a>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 font-bold text-black">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
            >
              <a
                href={link.href}
                className="hover:underline decoration-2 underline-offset-4 cursor-pointer"
              >
                {link.name}
              </a>
            </motion.div>
          ))}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="bg-[#3b82f6] text-white px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all font-bold block uppercase"
            >
              Contact
            </a>
          </motion.div>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden bg-white border-2 border-black mt-4 overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex flex-col gap-4 py-6 px-4 font-bold text-lg text-center">
              {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:bg-black hover:text-white py-2 border-2 border-transparent hover:border-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-[#3b82f6] text-white py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] mx-auto w-full max-w-xs block mt-2 uppercase"
                onClick={() => setIsOpen(false)}
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
