import React, { useEffect, useState, useContext } from "react";
import PreparationForJobsMap from "../PreparationForJobsMap/PreparationForJobsMap";
import { CoursContext } from "../../Context/CoursProbider";
import { getjobPreparetion } from "../../api/Getallcours";

const PreparationforJobs = () => {
  const [preparationForJobs, setPreparationForJobs] = useState([]);

   console.log(preparationForJobs + "all data ")

  useEffect(() => {

      getjobPreparetion()
      .then((data) => setPreparationForJobs(data))
      .catch((e) => console.error(e));
  }, []);

  const { addToCart } = useContext(CoursContext);
  const handeleAddtoCart = (cours) => {
    addToCart(cours);
  };
  return (
    <div>
      {/* headline */}

      <div className="mt-10 lg:mt-24">
        <h1 className="w-full text-3xl lg:text-5xl font-extrabold text-center mb-10 lg:mb-16">
          Preparation for Jobs
        </h1>
      </div>

      {/* course card */}

      <div className="grid grid-cols-1 lg:grid-cols-3 mx-3 lg:mx-14 md:mx-10 mb-5 gap-10 lg:gap-24 mt-5">
        {preparationForJobs.slice(0, 3).map((preparationForJob) => (
          <PreparationForJobsMap
          handeleAddtoCart={handeleAddtoCart}
            key={preparationForJob.id}
            preparationForJobData={preparationForJob}
          ></PreparationForJobsMap>
        ))}
      </div>
    </div>
  );
};

export default PreparationforJobs;
