import React from "react";
import { Document, Page } from 'react-pdf';

// import Pdf from './../../../../../../assets/files/interlocking.pdf';
import Pdf from './../../../../../../../assets/files/interlocking/IL-Customer Identity Verification.pdf'



function Interlocking_BC_Doc(){

    return(
        <>
        
       
					
<div >
 <object data={Pdf} type="application/pdf"  style={{height:"838px", width:"1920px"}} >
      <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
  </object>

  </div>
				
        </>
    )
}

export default Interlocking_BC_Doc;