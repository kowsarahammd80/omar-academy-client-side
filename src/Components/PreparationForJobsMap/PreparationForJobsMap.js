import React from "react";
import { Link } from "react-router-dom";

const PreparationForJobsMap = ({ preparationForJobData, handeleAddtoCart }) => {
  const {videolecture, chapterQuantity,videoQuantity,coursPrice,ThecherName,coursThumnil, courseName, _id} =preparationForJobData

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={coursThumnil} alt="" className="w-full" />
      </figure>

      <div className="card-body">
        <div className="flex justify-evenly items-center">
          <p className="text-2xl font-semibold text-red-500">{courseName}</p>

          <p className="font-semibold text-emerald-600"> {coursPrice} Taka</p>
        </div>

        <div className="flex justify-between text-center mt-3 font-semibold">
          <p>
            {" "}
            <i class="fa-regular fa-clock"></i> {videoQuantity}+ Videos
          </p>
          <p>
            {" "}
            <i class="fa-regular fa-clock"></i> {chapterQuantity}+ Chapter
          </p>
        </div>

        <hr className="hr-tag" />

        <div className="card-actions justify-evenly py-2 text-lg">
        <Link to={`/coursdettails/${_id}`}>
          <button className="see-details font-bold">See Details</button>
      
          </Link>

          <Link to="/shop">
            <button
              onClick={() => handeleAddtoCart(preparationForJobData)}
              className="see-details font-bold"
            >
              Add To Card
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreparationForJobsMap;
