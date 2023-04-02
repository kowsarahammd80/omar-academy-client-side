import React from "react";
import { Link } from "react-router-dom";

const AcademicMap = ({ academicData }) => {
  const { coursThumnil
    , _id,   
    courseName,videoQuantity,keyPoint


     } = academicData;

  return (
    <div className="card card-compact bg-base-100 shadow-xl p-0">
      <figure>
        <img src={coursThumnil} alt="thumnil" className="w-full" />
      </figure>

      <div className="card-body">
        <h2 className="text-center text-2xl font-bold">Class:  {courseName}</h2>

        <div className="flex justify-around">
          <div className="font-semibold">
            <p> {videoQuantity
}+  Videos</p>

       
          </div>

          <div className="font-semibold">
            <p>{keyPoint.length}  Subject</p>
          </div>
        </div>

        <hr className="hr-tag" />

        <div className="card-actions justify-center py-2 text-lg">
          <Link to={`/coursdettails/${_id}`}>
            <button className="see-details font-bold">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AcademicMap;
