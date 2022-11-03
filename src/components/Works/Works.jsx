import React, { useContext } from "react";
import "./Works.css";
import { themeContext } from "../../Context";
import Resume from '../../constants/resume.pdf';
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works w-full px-8 pt-8" id="work">
      <div className="w-full flex flex-col md:space-x-4 md:flex-row md:justify-between">
        <div className="w-full md:w-1/3 flex flex-col">
          <div style={{ color: darkMode ? "white" : "" }} className="works-title">Work history</div>
          <span className="text-sm text-gray-500">


          </span>
          <div className="mt-4">
            <a type="button" href={Resume} download className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Download Resume</a>
          </div>

        </div>
        <div className="w-full md:w-2/3 flex flex-col md:mt-8">

          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden h-full">
              <div className="border-2-2 border-yellow-555 absolute h-full border"
                style={{ right: "50%", border: "2px solid #FFC100", borderRadius: 1+'%' }}></div>
              <div className="border-2-2 border-yellow-555 absolute h-full border"
                style={{ left: "50%", border: "2px solid #FFC100", borderRadius:  1+'%' }}></div>
              <div className="flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 text-right">
                  <p className="text-base text-yellow-500">January 2019-Present</p>
                  <h4 className="font-bold text-lg">365 Solutions </h4>
                  <p className="text-sm text-gray-500">
                    Front-end developer.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 text-left">
                  <p className="text-base text-yellow-500">May 2017- October 2018</p>
                  <h4 className=" font-bold text-lg">SD Technologies</h4>
                  <p className="text-sm text-gray-500">
                    Web Developer
                  </p>
                </div>
              </div>
            </div>
            <img className="mx-auto -mt-20 md:-mt-20" alt="" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
          </div>



        </div>
      </div>
    </div>
  );
};

export default Works;
