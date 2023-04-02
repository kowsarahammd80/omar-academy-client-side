import React, { useEffect, useState, useContext } from "react";
import { CoursContext } from "../../Context/CoursProbider";
import UniversityTestAdmissionMap from "../UniversityTestAdmissionMap/UniversityTestAdmissionMap";
import { getuniversityTest } from "../../api/Getallcours";

const UniversityTestAdmission = () => {
  const [universityTestes, setUniversityTestes] = useState([]);
  const { addToCart } = useContext(CoursContext);

  useEffect(() => {
    getuniversityTest()
    .then(data=>{
      setUniversityTestes(data)
    })
  }, []);


  

  const handeleAddtoCart = (cours) => {
    addToCart(cours);

  };

  return (
    <div>
      {/* headline */}

      <div className="mt-10 lg:mt-24">
        <h1 className="w-full text-3xl lg:text-5xl font-extrabold text-center mb-10 lg:mb-16">
          University Test Admission
        </h1>
      </div>

      {/* course card*/}

      <div className="grid grid-cols-1 lg:grid-cols-3 mx-3 lg:mx-14 md:mx-10 mb-5 gap-10 lg:gap-24 mt-5">
        {universityTestes.slice(0, 3).map((universityTest) => (
          <UniversityTestAdmissionMap
            key={universityTest.id}
            universityTestData={universityTest}
            handeleAddtoCart={handeleAddtoCart}
          ></UniversityTestAdmissionMap>
        ))}
      </div>
    </div>
  );
};

export default UniversityTestAdmission;
