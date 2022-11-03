import React, { useState, useContext } from "react";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [active, setActive] = useState('home')
  const handleClick = (value) => {
    // debugger
    theme.dispatch({ type: "setActiveLink", payload: value });
    setActive(value)
  };
  return (
    <div className="z-10   flex flex-col">
      <div className={'h-12 fixed top-0 left-0 right-0 p-4 shadow w-full flex justify-between ' + (darkMode === false ? 'bg-white' : 'bg-black border-b border-gray-600 dark')}>
        <div className="px-4 md:px-8 max-w-7xl mx-auto  flex justify-between w-full">
          <div className="flex flex-1 flex-row items-center space-x-8">
            <div className="font-bold text-2xl">Emmaculate</div>
            <Toggle />
          </div>
          <div className="flex flex-1 items-center justify-end font-normal">
            <div className="hidden lg:flex">
              <ul className="list-none space-x-4 flex flex-row">
                <li className={'cursor-pointer hover:text-yellow-500 ' + (active === "home" ? 'text-yellow-500' : '')}>
                  <Link to="Navbar" spy={true} smooth={true} onClick={(() => handleClick('home'))}>
                    Home
                  </Link>
                </li>
                
                <li className={'cursor-pointer hover:text-yellow-500 ' + (active === "experience" ? 'text-yellow-500' : '')}>
                  <Link to="experience" spy={true} smooth={true} onClick={(() => handleClick('experience'))}>
                    Experience
                  </Link>
                </li>
                <li className={'cursor-pointer hover:text-yellow-500 ' + (active === "work" ? 'text-yellow-500' : '')} >
                  <Link to="work" spy={true} smooth={true} onClick={(() => handleClick('work'))}>
                    Work
                  </Link>
                </li>
                <li className={'cursor-pointer hover:text-yellow-500 ' + (active === "testimonial" ? 'text-yellow-500' : '')}>
                  <Link to="testimonial" spy={true} smooth={true} onClick={(() => handleClick('testimonial'))}>
                    Testimonial
                  </Link>
                </li>
                <li className={'cursor-pointer hover:text-yellow-500 ' + (active === "contact" ? 'text-yellow-500' : '')}>
                  <Link to="contact" spy={true} smooth={true} onClick={(() => handleClick('contact'))}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex lg:hidden">
              menu
            </div>
          </div>

        </div>



      </div>
      <div id="Navbar">

      </div>
    </div>
  );
};

export default Navbar;
