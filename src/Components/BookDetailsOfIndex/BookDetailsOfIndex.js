import React from "react";
import "./BookDetailsOfIndex.css";
import image from '../../assats/Rectangle 4 (1).png'

const BookDetailsOfIndex = () => {
  return (
    <div className="body mt-10 lg:mt-16">
      <div className="mx-3 lg:mx-24 p-3">
        {/* index */}

        <div className="text-center mt-10">
          <h1 className="font-bold text-4xl">Index</h1>
        </div>

        <div className="mt-5 mb-5 flex-none lg:flex justify-center font-semibold text-lg gap-6">
          <p>A. Arithmetic</p>
          <p>B. Algebra</p>
          <p>C. Geometry, Measurement and Trigonometry</p>
          <p>D. Mental Toughness</p>
          <p>E. Statics and others</p>
        </div>
      </div>

      <hr className="hr-set mt-3 mb-5 opacity-50" />

      {/* features */}

      <div className="mx-3 lg:mx-24 p-3">
        <div className="text-center ">
          <h1 className="font-bold text-2xl lg:text-4xl">Features</h1>
        </div>

        {/* FAQ */}

        <div className="flex justify-center mt-8 lg:mt-10">
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 faq-bg mb-2 lg:mb-3"
            >
              <div className="collapse-title text-xl font-medium">
                Focus me to see content
              </div>

              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>

            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 faq-bg w-full mb-2 lg:mb-3"
            >
              <div className="collapse-title text-xl font-medium">
                Focus me to see content
              </div>

              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 faq-bg mb-2 lg:mb-3"
            >
              <div className="collapse-title text-xl font-medium">
                Focus me to see content
              </div>

              <div className="collapse-content">
                <p>
                  tabIndex={0} attribute is necessary to make the div focusable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="hr-set mt-3 mb-5 opacity-50" />

      <div className="mx-3 lg:mx-24 p-3">

        {/* Free Video Course of the Complete Book */}

        <div className="text-center font-bold mt-3 mb-5">
          <h1 className="text-2xl lg:text-4xl text-red-500">
            Free Video Course of the Complete Book
          </h1>
        </div>

        {/* course card */}

        <div className="flex justify-center">
          
          <div className="card w-full lg:w-96 card-compact bg-base-100 shadow-xl">
            <figure>
              <img src={image} alt="courseImg" className="w-full" />
            </figure>

            <div className="card-body">
              <div className="flex justify-evenly items-center">
                <p className="text-2xl font-semibold text-red-500">
                   Omar’s Basic Math
                </p>

                <p className="font-semibold text-emerald-600"> Free</p>
              </div>

              <div className="flex justify-between text-center mt-3 font-semibold">
                <p>
                  {" "}
                  <i class="fa-regular fa-clock"></i> 100+ Videos
                </p>
                <p>
                  {" "}
                  <i class="fa-regular fa-clock"></i> 50+ Chapter
                </p>
              </div>

              <hr className="hr-tag" />

              <div className="card-actions justify-center py-2 text-lg">
                <button className="see-details font-bold">See Details</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsOfIndex;
