import React from "react";
import "./OnlineBatchDetails.css";
import OnlineBatchTextDetails from "./OnlineBatchTextDetails/OnlineBatchTextDetails";
import OnlineBooksAadd from "./OnlineBooksAadd/OnlineBooksAadd";


const OnlineBatchDetails = () => {
  return (
    <div className="mx-0 lg:mx-16">
      {/* headline */}

      <div className="mt-5 mb-5 text-center lg:text-start">
        <h1 className="text-3xl lg:text-4xl font-bold">Online Batch</h1>
      </div>

      {/* divider */}

      <div>
        <div className="divider text-xl">Select your Class or Exam:</div>
      </div>

      {/* course items button */}

      <div className="flex justify-center mt-5 lg:mt-10 mb-5">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <button className="button-online">Class 1-5</button>

          <button className="button-online">Class 6-10</button>

          <button className="button-online">HSC</button>

          <button className="button-online">Job placement</button>

          <button className="button-online">Admission Test</button>
        </div>
      </div>

      {/* subject */}

      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 lg:mt-10 mb-5 gap-4">
          <button className="subject-button-1">P.E Mathematics</button>

          <button className="subject-button-2">Basic Math A-Z Prili</button>
        </div>
      </div>

      {/* course items button color */}

      <div className="flex justify-center mt-5 lg:mt-10 mb-5 color-button-bg mx-3 lg:mx-24">

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 py-4">

          <button className="button-online-color">Class 1-5</button>

          <button className="button-online-color">Class 6-10</button>

          <button className="button-online-color">HSC</button>

          <button className="button-online-color">Job placement</button>

          <button className="button-online-color">Admission Test</button>

        </div>

      </div>

      {/* Subject curd */}

      <div className="flex justify-center mx-3 lg:mx-20 mt-5 lg:mt-10 mb-5">

        <div className="card w-full lg:w-96 subject-card-bg rounded-none">

          <div className="card-body">
             
              <div className="text-center font-semibold">
                 <p className="mt-5 mb-3">Subject Math</p>
                 <p className="mb-2">Date: January 2023 to March 2023</p>
                 <p className="mb-2">Time: Evening 07:30 PM</p>
                 <p className="">Routine: Saturday & Monday</p>
              </div>

             

          </div>

          {/* card bottom  */}

          <div className="w-full sub-crd-bottom-bg">

              <div className="flex justify-evenly p-4">

                <p className="text-white font-semibold">1500 Taka</p>
                <button className="text-white font-semibold">Get Admiteed</button>

              </div>
                  
          </div>

        </div>

      </div>

      <hr className="hr-set" />

      {/* course details */}

        <div className="mt-5 lg:mt-10 mb-5 grid grid-cols-1 lg:grid-cols-2">
            
             <div>
                  <OnlineBatchTextDetails/>
             </div>

             <div className="flex justify-center">

                 <OnlineBooksAadd/>
                 
             </div>

        </div>


    </div>
  );
};

export default OnlineBatchDetails;
