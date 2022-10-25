import React, { useState } from "react";
import {Link} from 'react-router-dom'
// import locust from './../../../assets/images/version3Images/Level-3/PerfomanceTesting/Blockchain/locust.png'

import jmeterweb from './../../../assets/images/version3Images/Level-3/PerfomanceTesing/JmeterApi/jmeterWeb.jpg'
import Video from './../../../assets/videos/PerfomanceTesting/Blockchain/jmeterWeb.mp4'

const Jmeterweb = () => {
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
  <img className="object-cover w-full rounded-t-lg h-[318px] md:rounded-none md:rounded-l-lg" src={jmeterweb} alt="sel" />
  <div className="flex flex-col justify-start p-6">
    <h5 className="mb-2 text-xl font-medium text-gray-900">Report Idea</h5>
    <p className="mb-4 text-base text-gray-700">
    Choose from hundreds of professionally-made templates in our library and customize them using our suite of design elements. With our editor’s intuitive and drag-and-drop simplicity, you can focus your time and effort describing your students’ performance and hard work in school as accurately and comprehensively as possible.


    </p>
    <a href="https://ideyalabscom-my.sharepoint.com/:x:/r/personal/suryap_ideyalabs_com/_layouts/15/Doc.aspx?sourcedoc=%7B76C2F480-39F6-4009-8362-3308112C2421%7D&file=COYNI__V2_WEB_CUSTOMER_RT.csv&action=default&mobileredirect=true" alt="Jmeter Api" className="text-[20px] hover:text-orange-400" target="blank">View Report</a>

    {/* <Link to="/home/mindmap/blockchain/doc"> <p className="text-[20px] hover:text-orange-400">View pdf</p> </Link> */}
  </div>
</div>
</div>
      </div>
    </div>

  );
};

export default Jmeterweb;