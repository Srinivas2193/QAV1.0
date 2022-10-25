import React, { useState } from "react";
import { Link } from "react-router-dom";
import MindmapDoc from "../../../components/Level-1/Domains/MindMaps/Blockchain/DocumentView/Doc1.js/MinmapDoc";
//import selenium from '../assets/images/version3Images/Level-3/FunctionalTesting/Blockchain/selenium.jpg' 

import selenium from './../../../assets/images/version3Images/Level-3/FunctionalTesting/Blockchain/selenium.jpg'
import Video from './../../../../src/assets/videos/Functionaltesting/selenium.mp4'

const Selenium = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="min-h-[830px]">
   <div className="flex flex-row gap-[100px] ">
        
        <div className="ml-[40px] mt-10">
          <video width="1000" height="" controls>
            <source src={Video} type="video/mp4" />
          </video>
        </div>

      {/* <div className="w-[400px] mt-10 mx-[50px]">
    <object data={Pdf} type="application/pdf"    style={{height:"838px", width:"1920px"}} >
    <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
</object>
    </div> */}
<div className="flex justify-center">
<div className="flex flex-col bg-white  border-2 rounded-lg shadow-lg mt-[50px] md:flex-col md:max-w-xl">
  <img className="object-cover w-full rounded-t-lg h-96 md:rounded-none md:rounded-l-lg" src={selenium} alt="sel" />
  <div className="flex flex-col justify-start p-6">
    <h5 className="mb-2 text-xl font-medium text-gray-900">Report Idea</h5>
    <p className="mb-4 text-base text-gray-700">
    Choose from hundreds of professionally-made templates in our library and customize them using our suite of design elements. With our editor’s intuitive and drag-and-drop simplicity, you can focus your time and effort describing your students’ performance and hard work in school as accurately and comprehensively as possible.


    </p>
    <Link to="/home/functionl/blockchain/seleniumReport"> <p className="text-[20px] hover:text-orange-400">View pdf</p> </Link>
  </div>
</div>
</div>
      </div>
    </div>
  )
}


export default Selenium;
