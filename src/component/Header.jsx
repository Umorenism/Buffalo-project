import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { TbMenu } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import HeaderMenu from "./HeaderMenu";
import logo from '../assets/Group 1.png';



const Header= ({ desc,menubg, title='white', bgColor = 'bg-white', textColor = 'text-black' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMenuOpen = () => setMenuIsOpen(!isMenuOpen);
  const closeMenu = () => setMenuIsOpen(false);
  const [ setShowMenu] = useState(true);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <header className={`fixed top-0 h-[96px] left-0 right-0 z-50 ${bgColor} ${textColor}`}>
      <div className="flex h-[90px] justify-between items-center p-4 max-w-screen-2xl mx-auto">
        <div className={`text-xl md:text-4xl font-bold flex items-center gap-2 ${textColor}`}>
          <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
          <div className="flex flex-col items-center">
            <h1 className="uppercase text-sm font-serif md:text-2xl">{title}</h1>
            <p  className={`text-sm text-[#6D142a] `}>{desc}</p>
          </div>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-4 items-center">
          <div className={`h-20 bg-white w-[0.01rem]${menubg} ${textColor}`}></div>
          <p className="h-14 bg-white w-[0.01rem]"></p>
          <div onClick={toggleMenuOpen} className="cursor-pointer flex flex-col items-center gap-2">
            
            {isMenuOpen ? (
              <IoMdClose size={40} onClick={closeMenu} />
            ) : (
              <TbMenu size={40} />
            )}
            <h1 className="font-bold">Menu</h1>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                className="absolute w-full right-0 top-10 shadow-lg rounded-lg flex justify-center p-5 text-black"
              >
                <div className="bg-slate-100 w-[90%] rounded-md">
                  <div className="flex justify-between items-center">
                    <div className="text-xl md:text-4xl font-bold text-black flex items-center gap-2">
                      <img src={logo} alt="logo" className="md:h-10 md:w-10 h-5 w-5 object-contain" />
                      <div className="flex flex-col items-center">
                        <Link to="/">
                        <h1 className="uppercase font-serif md:text-2xl text-sm">Buffalo & BAY</h1>
                        <p className="text-sm text-[#6D142a]">STRENGTH AND SPLENDOR</p>
                        </Link>
                      </div>
                    </div>
                   
                  </div>
                  <div className="mt-2 p-2 flex">
                   <HeaderMenu handleClose={handleCloseMenu} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <button className="md:hidden bg-[#6D142a] text-white p-2" onClick={toggleMenu}>
          {isOpen ? <IoMdClose size={28} /> : <TbMenu size={28} />}
        </button>
      </div>
      <hr />
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="fixed inset-0 bg-white text-black shadow-lg md:hidden z-50"
          >
            <div className="flex justify-center  items-center mt-20 p-4">
              {isMenuOpen ? <IoMdClose size={28} onClick={toggleMenu} className="cursor-pointer" />:<IoMdClose size={28} onClick={toggleMenu} className="cursor-pointer" />}
            </div>
            <div className="flex flex-col items-center p-4 space-y-4">
              <Link to="/about-us" className="py-2 text-lg" onClick={toggleMenu}>
               About Buffalo & Bay
              </Link>
              <Link to="/pro-ject" className="py-2 text-lg" onClick={toggleMenu}>
               Project
              </Link>
              <Link to="/service" className="py-2 text-lg" onClick={toggleMenu}>
               Service
              </Link>
              <Link to="/projectdes" className="py-2 text-lg" onClick={toggleMenu}>
               Package
              </Link>
              <Link to="/contact-us" className="py-2 text-lg" onClick={toggleMenu}>
                Contact
              </Link>
            </div>
            <div className="flex items-center justify-center w-full mt-5">
              <img src={logo} alt="" />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
