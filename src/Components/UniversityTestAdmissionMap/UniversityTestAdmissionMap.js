import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CoursContext } from "../../Context/CoursProbider";

const UniversityTestAdmissionMap = ({
  handeleAddtoCart,
  universityTestData,
}) => {
  const { id, courseImg, coursePrice, videoCount, chapter, courseName } =
    universityTestData;

  const { cart } = useContext(CoursContext);

  const checkCart = cart?.map((item) => item.id === id);

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={courseImg} alt="courseImg" className="w-full" />
      </figure>

      <div className="card-body">
        <div className="flex justify-evenly items-center">
          <p className="text-2xl font-semibold text-red-500"> {courseName} </p>

          <p className="font-semibold text-emerald-600"> {coursePrice}</p>
        </div>

        <div className="flex justify-between text-center mt-3 font-semibold">
          <p>
            {" "}
            <i class="fa-regular fa-clock"></i> {videoCount}+ Videos
          </p>
          <p>
            {" "}
            <i class="fa-regular fa-clock"></i> {chapter}+ Chapter
          </p>
        </div>

        <hr className="hr-tag" />

        <div className="card-actions justify-evenly py-2 text-lg">
          <button className="see-details font-bold">See Details</button>

          <Link to="/shop">
            <button
              onClick={() => handeleAddtoCart(universityTestData)}
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

export default UniversityTestAdmissionMap;
