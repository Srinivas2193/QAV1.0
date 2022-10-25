import React, { useState } from "react";
import "./App.css";
// import {Routes, Route} from 'react-router-dom';
// Importing components....
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import icon from "./assets/images/logo.jpg"

// import Header from "./components/HeaderPage.js"
import About from "./components/About";
import Footer from "./components/FooterPage";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Login from "./components/login/Login.js";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ideyaLabsLogo from "./assets/logoes/ideyalabsLogo.png"
import ThankYou from "./components/ThankYou";

//Level 2 component import
import Level1ReqAnalysis from './components/Level-1/Domains/RequirementAnalysis/ReqAnalysis';
import ReqTraceability from './components/Level-1/Domains/RequirementTracability/ReqTraceability';
import Mindmap from './components/Level-1/Domains/MindMaps/MindMap'
import TestDesign from "./components/Level-1/Domains/TestDesign/TestDesign";
import BuildDeployment from "./components/Level-1/Domains/BuildProcess/BuildProcess";
import InterlockingDiagram from "./components/Level-1/Domains/Interlocking/InterLock";
import FlowChart from "./components/Level-1/Domains/FlowChart/FlowChart";
import ApiTesting from "./components/Level-1/Domains/ApiTesting/ApiTesting";
import FunctionalTesting from "./components/Level-1/Domains/FunctionalTesting/FunctionalTesting";
import PerfomanceTesting from "./components/Level-1/Domains/PerfomanceTesting/PerfomanceTesting";
import SecurityTesting from "./components/Level-1/Domains/SecurityTesting/SecurityTesting";

//Level 3 component import
import SecurityBlockchain from "./components/Level-1/Domains/SecurityTesting/Blockchain/Blockchian";
import JmeterApi from "./components/Level-1/Domains/PerfomanceTesting/JmeterApi/JmeterApi";
import FunctionalBlockchain from "./components/Level-1/Domains/FunctionalTesting/Blockchain/FunctionalBlockchain";
import Blockchain from "./components/Level-1/Domains/ApiTesting/Blockchain/Blockchain";
import MindmapBlockchain from "./components/Level-1/Domains/MindMaps/Blockchain/Blockchain";


//level 4 component import

import MindmapDoc1 from "./components/Level-1/Domains/MindMaps/Blockchain/DocumentView/Doc1.js/MinmapDoc";
import MindmapDoc2 from "./components/Level-1/Domains/MindMaps/Blockchain/DocumentView/Doc2/MinmapDoc";
import MindmapDoc3 from "./components/Level-1/Domains/MindMaps/Blockchain/DocumentView/Doc3/MinmapDoc";
import MindmapDoc4 from "./components/Level-1/Domains/MindMaps/Blockchain/DocumentView/Doc4/MinmapDoc";

//level 4 Interlocking Doc component Import
import InterlockingBlockchain from "./components/Level-1/Domains/Interlocking/InterlockingBlockchain/InterlockingBlockchain";

import InterlockingDoc1 from "./components/Level-1/Domains/Interlocking/InterlockingBlockchain/Interloking_BC_Doc/Doc1/Interlocking_BC_Doc";
import InterlockingDoc2 from './components/Level-1/Domains/Interlocking/InterlockingBlockchain/Interloking_BC_Doc/Doc2/Interlocking_BC_Doc';
import InterlockingDoc3 from './components/Level-1/Domains/Interlocking/InterlockingBlockchain/Interloking_BC_Doc/Doc3/Interlocking_BC_Doc'
import InterlockingDoc4 from './components/Level-1/Domains/Interlocking/InterlockingBlockchain/Interloking_BC_Doc/Doc4/Interlocking_BC_Doc'


//level 4 Flowchart Doc component Import
import FlowChartBlockchain from "./components/Level-1/Domains/FlowChart/FlochartBlockchain/FlowchartBlockchain";

import FlowchartDco1 from './components/Level-1/Domains/FlowChart/FlochartBlockchain/Flowchart_BC_Doc/Doc1/Flowchart_BC_Doc'
import FlowchartDco2 from './components/Level-1/Domains/FlowChart/FlochartBlockchain/Flowchart_BC_Doc/Doc2/Flowchart_BC_Doc'
import FlowchartDco3 from './components/Level-1/Domains/FlowChart/FlochartBlockchain/Flowchart_BC_Doc/Doc3/Flowchart_BC_Doc'
import FlowchartDco4 from './components/Level-1/Domains/FlowChart/FlochartBlockchain/Flowchart_BC_Doc/Doc4/Flowchart_BC_Doc'



//Api Testimng import 
import Apipython from './Level3/ApiTesting/Blockchain/Python'


//Functional Automatio Testing import
import Selenium from "./Level3/FunctionalTesting/Blockchain/Selenium";
import Cypress from "./Level3/FunctionalTesting/Blockchain/Cypress";
import Katalan from "./Level3/FunctionalTesting/Blockchain/Katalan";
import Python from "./Level3/FunctionalTesting/Blockchain/Python";
import Cucumber from "./Level3/FunctionalTesting/Blockchain/Cucumber";
import Protractor from "./Level3/FunctionalTesting/Blockchain/Protractor";

//security Testing Import 
import Acunetix from "./Level3/SecurityTesting/Blockchain/Acunetix";
import Intruder from "./Level3/SecurityTesting/Blockchain/Intruder";
import Owasp from "./Level3/SecurityTesting/Blockchain/Owasp";
import Wireshark from "./Level3/SecurityTesting/Blockchain/Wireshark";

//perfomance testing
import Jmeterperfo from './Level3/PerfomanceTesting/Blockchain/Jmeterapi'

import Locust from "./Level3/PerfomanceTesting/Blockchain/Locust";
import Jmeterweb from "./Level3/PerfomanceTesting/Blockchain/Jmeterweb";
import JmeterAndroid from "./Level3/PerfomanceTesting/Blockchain/JmeterAndrioid";
import JmeterIos from "./Level3/PerfomanceTesting/Blockchain/JmeterIos";
import Taurus from "./Level3/PerfomanceTesting/Blockchain/Taurus";
import Gatling from "./Level3/PerfomanceTesting/Blockchain/Gatling";

//import perfomance testing image report
import TaurusReport from "./Level3/PerfomanceTesting/Blockchain/Taurus/TaurusReport";
import LocustReport from "./Level3/PerfomanceTesting/Blockchain/LocustReport/LocustReport";
import GatlingReport from "./Level3/PerfomanceTesting/Blockchain/GatlingReport/GatlingReport";
import CypressReport from "./Level3/FunctionalTesting/Blockchain/CypressReport/CypressReport";
import SeleniumReport from "./Level3/FunctionalTesting/Blockchain/SeleniumReport/SeleniumReport";




// import BlockChain from "./components/SubDomains/BlockChain/BlockChain";
// import Selenium from "./components/NestedSubdomains/Selenium/Selenium.js";
// import Cypress from "./components/NestedSubdomains/Cypress/Cypress";
// import Katalan from "./components/NestedSubdomains/Katalan/Katalan";
// import Python from "./components/NestedSubdomains/Python/Python";
// import Cucumber from "./components/NestedSubdomains/Cucumber/Cucumber";
// import Protractor from "./components/NestedSubdomains/Protractor/Protractor";
// import Appium from "./components/NestedSubdomains/Appium/Appium";
// import WebDriver from "./components/NestedSubdomains/WebDriver/WebDriver";
// import PlayWrite from "./components/NestedSubdomains/PlayWrite/PlayWrite";



function App() {
  const [userFound, setUserFound] = useState(false);

  const loginPageCall = (userUniqueID)=>{
    // setUserFound(value);
    
    let lsData = localStorage.getItem("userDataList");
    let parseData;
      if(lsData){
          parseData = JSON.parse(lsData);
      }else{
          parseData = [];
      }

      for(let i=0; i<parseData.length; i++){
        if(parseData[i].uniqueId === userUniqueID){
          // console.log("Login Status "+ parseData[i].loginStatus);
          setUserFound(parseData[i].loginStatus);
          // console.log(userFound);
        }
      }
  }
  return (
    <>
       <div className="mainContainer">
        {/* <div className="flex flex-row justify-between">
          <div className="logoContainer" style={{width:"16%"}}>
            <img src={ideyaLabsLogo} alt="logo" className="h-20 p-2 logo "/>
          </div>
          <div className="flex items-center justify-center font-extrabold iStock" style={{height:"70px",width:"90%", paddingRight:"10%"}}>
            <h1 className="text-5xl text-gray-500" style={{fontStyle:"font-family: 'Lato', sans-serif;", marginRight:"105%"}}> <span style={{color:"#eb7524",marginRight:"3%"}}>Quality</span><span style={{color:"#285d93"}}>Assurance</span></h1>
          </div>
        </div> */}
        <div className="flex flex-row justify-between">
          <div>
          <h1 className="p-2 text-5xl font-bold text-gray-500" style={{fontStyle:"font-family: 'Lato', sans-serif;"}}> <span style={{color:"#eb7524",marginRight:"3%"}}>Quality</span><span style={{color:"#285d93"}}>Assurance</span></h1>
          </div>
          <div>
            <img src={ideyaLabsLogo} alt="logo" className="h-20 p-2 "/>
          </div>

        </div>
        <Navbar/>
        {/* {userFound && userFound?<Home/> :<Login loginPageCall={loginPageCall}/>} */}
         
         <div className="footergap">
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login loginPageCall={loginPageCall}/>} />
            <Route  path="/home" element={<Home/>} />

            {/* level 2 component import */}

            <Route  path="/home/requirementAnalysis" element={<Level1ReqAnalysis/>} />

            <Route  path="/home/mindmap" element={<Mindmap />} />
            <Route  path="/home/interlocking" element={<InterlockingDiagram />} />
            <Route  path="/home/flowchart" element={<FlowChart />} />

            <Route  path="/home/requestTracaebility" element={<ReqTraceability/>} />
            <Route  path="/home/testDesign" element={<TestDesign/>} />
            <Route  path="/home/buildDeployeeProcess" element={<BuildDeployment/>} />
            <Route path="/home/perfomsncetetsing/blockchain/jmeterapi" element={<JmeterApi />} />

            <Route  path="/home/apitesting" element={<ApiTesting/>} />
            <Route  path="/home/functionaltesting" element={<FunctionalTesting/>} />
            <Route  path="/home/perfomancetesting" element={<PerfomanceTesting/>} />
            <Route  path="/home/securitytesting" element={<SecurityTesting/>} />


            {/* level 3 component import */}
            <Route  path="/home/securitytesting/blockchain" element={<SecurityBlockchain/>} />
            <Route  path="/home/perfomancetesting/blockchain" element={<JmeterApi/>} />
            <Route  path="/home/functionaltesting/blockchain" element={<FunctionalBlockchain/>} />
            <Route  path="/home/apitesting/blockchain" element={<Blockchain/>} />
            <Route  path="/home/mindmap/blockchain" element={<MindmapBlockchain/>} />
            <Route  path="/home/interlocking/blockchain" element={<InterlockingBlockchain/>} />
            <Route  path="/home/flowchart/blockchain" element={<FlowChartBlockchain/>} />
             

           {/* level 4 component import */} 
           
           {/* temporary route */}
           <Route  path="/home/mindmap/blockchain/doc" element={<MindmapDoc1/>} />
           {/* temporary route */}

           <Route  path="/home/mindmap/blockchain/doc1" element={<MindmapDoc1/>} />
           <Route  path="/home/mindmap/blockchain/doc2" element={<MindmapDoc2/>} />
           <Route  path="/home/mindmap/blockchain/doc3" element={<MindmapDoc3/>} />
           <Route  path="/home/mindmap/blockchain/doc4" element={<MindmapDoc4/>} />


            {/* Interlocking Diagram  */}
           <Route  path="/home/interlocking/blockchain/doc1" element={<InterlockingDoc1/>} />
           <Route  path="/home/interlocking/blockchain/doc2" element={<InterlockingDoc2/>} />
           <Route  path="/home/interlocking/blockchain/doc3" element={<InterlockingDoc3/>} />
           <Route  path="/home/interlocking/blockchain/doc4" element={<InterlockingDoc4/>} />



            {/* FlowChart Diagram */}
           <Route  path="/home/flowchart/blockchain/doc1" element={<FlowchartDco1/>} />
           <Route  path="/home/flowchart/blockchain/doc2" element={<FlowchartDco2/>} />
           <Route  path="/home/flowchart/blockchain/doc3" element={<FlowchartDco3/>} />
           <Route  path="/home/flowchart/blockchain/doc4" element={<FlowchartDco4/>} />

           
           {/* Api Testing Nested Routes */}
           <Route path="/home/apitesting/blockchain/python" element={<Apipython/>}/>



           {/* Functional Automation Nested Routing */}
           <Route path="/home/functionl/blockchain/selenium" element={<Selenium/>}/>
           <Route path="/home/functionl/blockchain/cypress" element={<Cypress/>}/>
           <Route path="/home/functionl/blockchain/katalan" element={<Katalan/>}/>
           <Route path="/home/functionl/blockchain/python" element={<Python/>}/>
           <Route path="/home/functionl/blockchain/cucumber" element={<Cucumber/>}/>
           <Route path="/home/functionl/blockchain/protractor" element={<Protractor/>}/>
           {/* Sub Report Routing */}
           <Route path="/home/functionl/blockchain/seleniumReport" element={<SeleniumReport/>}/>
           <Route path="/home/functionl/blockchain/cypressReport" element={<CypressReport/>}/>



           {/* Perfomance Testing Nested Routing */}
           <Route path="/home/perfomsncetetsing/blockchain/Jmeterperfo" element={<Jmeterperfo/>}/>
           <Route path="/home/perfomsncetetsing/blockchain/jmeterWeb" element={<Jmeterweb/>}/>
           <Route path="/home/perfomsncetetsing/blockchain/jmeterAndroid" element={<JmeterAndroid/>}/>
           <Route path="/home/perfomsncetetsing/blockchain/jmeterIos" element={<JmeterIos/>}/>
           <Route path="/home/perfomsncetetsing/blockchain/taurus" element={<Taurus/>}/>
           <Route path="/home/perfomancetesting/blockchain/gatling" element={<Gatling/>}/>
           <Route path="/home/perfomancetesting/blockchain/locust" element={<Locust/>}/>

           {/* Import Report data  of Perfomance Testing*/}
           <Route path="/home/perfomsncetetsing/blockchain/taurus/report" element={<TaurusReport/>}/>
           <Route path="/home/perfomsncetetsing/blockchain/locust/report" element={<LocustReport/>}/>
           <Route path="/home/perfomsncetetsing/blockchain/gatling/report" element={<GatlingReport/>}/>




           {/* SecurityTesting Nested Routing*/}

           <Route path="/home/securitytesting/blockchain/acunetix" element={<Acunetix/>}/>
           <Route path="/home/securitytesting/blockchain/intruder" element={<Intruder/>}/>
           <Route path="/home/securitytesting/blockchain/OWASP" element={<Owasp/>}/>
           <Route path="/home/securitytesting/blockchain/wireshark" element={<Wireshark/>}/>

           

            

           
           <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            {/* <Route path="login" element={<Login loginPageCall={loginPageCall}/>} /> */}
            <Route path="/contact" element={<Contact/>} />
            <Route path="/thankyou" element={<ThankYou/>} />

          </Routes>
          </div>

          <div >
          <Footer />
          </div>
    </div>
    </>
  );
}

export default App;
