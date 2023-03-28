import React, { useEffect, useState, useContext } from "react";
import "./Accademic.css";
import AcademicMap from "../AcademicMap/AcademicMap";
import whislistContext, { WhislistContext } from "../../Context/WishLishtProbaider";

const Academic = () => {
  const [academices, setAcademices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getacadmic")
      .then((res) => res.json())
      .then((data) => setAcademices(data))
      .catch((e) => console.error(e));
  }, []);

  


console.log(academices)

  

  return (
    <div>
      {/* headline */}

      <div className="">
        <h1 className="w-full text-3xl lg:text-5xl font-extrabold text-center mt-10 mb-2">
          Academic
        </h1>

        <p className="text-2xl font-semibold text-center text-color mb-10">
          Sub heading here
        </p>
      </div>

      {/* corse sub heading card */}

      <div className="grid grid-cols-1 lg:grid-cols-3 mx-3 lg:mx-14 md:mx-10 mb-5 gap-10 lg:gap-24 mt-5">
        {academices.map((academic) => (
          <AcademicMap key={academic._id} academicData={academic}></AcademicMap>
        ))}
      </div>
    </div>
  );
};

export default Academic;
