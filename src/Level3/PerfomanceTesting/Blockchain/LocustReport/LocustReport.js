import React from "react";
import img from './../../../../assets/images/version3Images/Level-3/PerfomanceTesing/locust.png'

function LocustReport(){

    return(
        <>
        <div  style={{ backgroundColor: "#accbe8", paddingTop:"20px", paddingBottom:"43px" }}>
            <img src={img} alt="Taurus Report Image" className="h-[600px] w-[1400px] m-9 ml-[215px] rounded hover:scale-110 ease-in duration-300"  />
        </div>
        </>
    )
}

export default LocustReport;