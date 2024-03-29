import React, { useContext } from "react";
import "./DetailsCardOfCourse.css";
import image from "../../assats/Rectangle 4 (1).png";
import arow from "../../assats/Vector (6).png";
import books from "../../assats/book-store.png";
import BuyProbider, { BuynowContext } from "../../Context/BuyProbider";
import Shopmodal from "../ShopModal/Shopmodal";

const DetailsCardOfCourse = ({ handleaddToWishlish ,data,}) => {
  
  const {_id,courseName,coursThumnil,ThecherName,ThecherEducation,techerImg
    ,videoQuantity,videolecture,
      chapterQuantity,coursPrice
    ,keyPoint}=data






  return (
    <div className="flex-none capitalize lg:flex justify-center">
      {/* components parents div */}

      <div>
        {/* headline */}

        <div className="block lg:hidden mt-5 lg:mt-10 mb-5 lg:mb-10">
          <h1 className="text-2xl lg:text-4xl font-bold">{courseName}</h1>

          <p className="opacity-80 font-semibold mt-2">
            Course Details / Description
          </p>
        </div>

        {/* course card */}

        <div className="mt-5 lg:mt-10 mb-5 lg:mb-10">
          <div className="card card-compact lg:w-96 bg-base-100 shadow-xl rounded-none">
            <figure>
              <img src={coursThumnil} alt="thumnil" className="details-image" />
            </figure>

            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl">{courseName}</h2>

                <p className="font-semibold text-blue-600 ml-5 text-xl ">
                 {coursPrice} Taka
                </p>

 <button
                  onClick={() =>
                    handleaddToWishlish({ product: "add korte hobe" })
                  }
                  className="btn-ghost p-2 text-2xl"
                >
                 
                  <i class="fa-sharp fa-regular fa-heart"></i>{" "}
                </button>
 
                
              </div>

              {/* buy now button */}
              <label htmlFor="my-modal-5" className="btn">buy now</label>
        
              <hr className="hr-tag text-gray-200" />

              {/* details */}

              <div className="grid grid-cols-2 mx-5">
                <div>
                  <ul>
                    <li className="flex items-center mb-2">
                      <img src={arow} alt="" className="mr-2" />{" "}
                      <span>{videoQuantity}+ Videos</span>{" "}
                    </li>
                    
                  </ul>
                </div>

                <div>
                  <ul>
                    <li className="flex items-center mb-2">
                      <img src={arow} alt="" className="mr-2" />{" "}
                      <span>{chapterQuantity}+ lesson</span>{" "}
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Omar's books */}

        <div className="hidden lg:block">
          <div className="card card-compact lg:w-96 bg-base-100 shadow-xl rounded-none mb-5">
            <figure>
              <img src={books} alt="imageName" className="books-image" />
            </figure>

            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-xl">Omar’s Basic Math</h2>

                <p className="font-semibold text-blue-600 ml-5 text-xl">
                  500 Taka
                </p>
              </div>

              <div className="mt-5 mb-5">
                <p className="font-semibold">
                  This book is specially written and edited for learning written
                  and short mathematics. The book contains chapter-wise
                  discussions, explanations of formulas and summaries, written
                  solutions as well as short solutions with explanations for
                  easy learning of mathematics at home quickly and effectively.
                </p>
              </div>

              {/* Know more button */}

              <div className="card-actions justify-center">
                <button className="buy-now-button mt-5 mb-5">Know More</button>
              </div>

              {/* details */}
            </div>
          </div>
        </div>

        {/* Omar's books end */}
      </div>

      <Shopmodal data={data}></Shopmodal>
    </div>
  );
};

export default DetailsCardOfCourse;
