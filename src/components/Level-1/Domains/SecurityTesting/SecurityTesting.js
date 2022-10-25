import React from "react";
import './SecurityTesting.css'

import blockChain from './../../../../assets/images/version3Images/Level-2/securityTesting/BlockChain.png'
import Fintech from './../../../../assets/images/version3Images/Level-2/securityTesting/Fintech.jpg'
import Ecommerse from './../../../../assets/images/version3Images/Level-2/securityTesting/Ecommerse.jpg'
import Iot from './../../../../assets/images/version3Images/Level-2/securityTesting/Iot.jpg'
import Analytics from './../../../../assets/images/version3Images/Level-2/securityTesting/Analytics.jpg'

import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react'


function SecurityTesting (){

    const images = [
        { img: blockChain, url: "/home/securitytesting/blockchain", title: "Blockchain" },
        { img: Fintech, url: "/home/securitytesting/blockchain", title: "Fintech" },
        { img: Ecommerse, url: "/home/securitytesting/blockchain", title: "e-Commerce" },
        { img: Iot, url: "/home/securitytesting/blockchain", title: "IoT" },
        { img: Analytics, url: "/home/securitytesting/blockchain", title: "Analytics" },

      ]
      const [gif, setGif]=useState(false)
      const [mainContent, setmainContent]=useState(true)
      const navigate=useNavigate();

  const data=(e)=>{
    console.log(e)
    setGif(true)
    setmainContent(false)
   setTimeout(()=>{
    navigate(e)
   },1000)
    
  }
    return(
        <>
         {gif && <div>
<center ><img  className="pb-2" src="https://flevix.com/wp-content/uploads/2019/12/Quarter-Circle-Loading-Image-1.gif" alt="Loading" /></center>
    </div>}

    {mainContent && <div className="py-1 " style={{ backgroundColor: "#accbe8" }}>
      <div class="flex felx-row rounded flex-wrap gap-1 mt-10 mb-10 ml-4 md:justify-center lg:justify-center" >
        {images.map((val, i) => (
          <div class="max-w-sm  rounded hover:scale-110 ease-in duration-300 securityTestingcardShadow overflow-hidden shadow-lg m-9">
            <Link to={val.url}>  <img src={val.img} alt={val.title} className="w-[450px] h-[280px]" /> </Link>
            <div class="px-6 py-4 bg-blue-500 hover:bg-orange-500" >
              <button type="button" onClick={()=>data(val.url)}><p class="font-bold text-xl text-slate-100 hover:text-neutral-900  w-[264px] h-[49px] ">{val.title}</p></button>
            </div>
          </div>

        ))}
      </div>
      </div>}
    </>
    )
}

export default SecurityTesting;