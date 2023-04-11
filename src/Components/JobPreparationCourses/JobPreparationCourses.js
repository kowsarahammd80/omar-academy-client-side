import React from "react";
import "./JobPreparationCourses.css";
import video from "../../assats/videoVictore.png";
import courseImage from "../../assats/academy-class.png";
import { Link } from "react-router-dom";
import bookImage from '../../assats/book-store.png'

const JobPreparationCourses = () => {
  return (
    <div className="mx-5 lg:mx-20">
      <div className="my-8">
        <h1 className="font-bold text-2xl xl:text-4xl lg:text-4xl">
          {" "}
          Job Preparation Courses{" "}
        </h1>
        <p className="mt-2 font-bold text-lg lg:text-2xl xl:text-2xl opacity-60">
          {" "}
          Sub heading here{" "}
        </p>
      </div>

      {/* video lecture */}

      <div className="video-lecture-bg my-5">
        <div className="md:mx-5 p-2 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 mx-0 lg:mx-16 xl:mx-16 gap-4">
          <div className="card card-compact w-full ">
            <figure>
              <img src={video} alt="" className="video-lecture-image" />
            </figure>
            <div className="card-body">
              <h2 className="text-center font-bold text-2xl">Video Lecture</h2>

              <p className="text-center text-lg">
                Total number of job preparation <br />
                videos is more than 200+
              </p>
            </div>
          </div>

          <div className="card card-compact w-full ">
            <figure>
              <img src={video} alt="" className="video-lecture-image" />
            </figure>
            <div className="card-body">
              <h2 className="text-center font-bold text-2xl">Lecture Sheet</h2>

              <p className="text-center text-lg">
                Total number of job preparation <br />
                videos is more than 200+
              </p>
            </div>
          </div>

          <div className="card card-compact w-full ">
            <figure>
              <img src={video} alt="" className="video-lecture-image" />
            </figure>
            <div className="card-body">
              <h2 className="text-center font-bold text-2xl">Model Test</h2>

              <p className="text-center text-lg">
                Total number of job preparation <br />
                videos is more than 200+
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* course */}

      <div className="my-10">
        <h1 className="text-2xl font-bold lg:text-4xl xl:text-4xl">
          {" "}
          Courses{" "}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 my-10 gap-5">
        <div className="card card-compact bg-base-100 shadow-xl p-0">
          <figure>
            <img src={courseImage} alt="thumnil" className="w-full" />
          </figure>

          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Class: 1-5</h2>

            <div className="flex justify-around">
              <div className="font-semibold">
                <p> 50 + Videos </p>
              </div>

              <div className="font-semibold">
                <p> 50 + Subject </p>
              </div>
            </div>

            <hr className="hr-tag" />

            <div className="card-actions justify-center py-2 text-lg">
              <Link to="">
                <button className="see-details font-bold">See Details</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl p-0">
          <figure>
            <img src={courseImage} alt="thumnil" className="w-full" />
          </figure>

          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Class: 1-5</h2>

            <div className="flex justify-around">
              <div className="font-semibold">
                <p> 50 + Videos </p>
              </div>

              <div className="font-semibold">
                <p> 50 + Subject </p>
              </div>
            </div>

            <hr className="hr-tag" />

            <div className="card-actions justify-center py-2 text-lg">
              <Link to="">
                <button className="see-details font-bold">See Details</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-base-100 shadow-xl p-0">
          <figure>
            <img src={courseImage} alt="thumnil" className="w-full" />
          </figure>

          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Class: 1-5</h2>

            <div className="flex justify-around">
              <div className="font-semibold">
                <p> 50 + Videos </p>
              </div>

              <div className="font-semibold">
                <p> 50 + Subject </p>
              </div>
            </div>

            <hr className="hr-tag" />

            <div className="card-actions justify-center py-2 text-lg">
              <Link to="">
                <button className="see-details font-bold">See Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* books card */}

      <div>
        <div className="my-10">
          <h1 className="font-bold text-2xl lg:text-4xl xl:text-4xl">Books</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
          <div className="m-5 shadow-xl">
            <img src={bookImage} alt="" className="books-image-set" />

            <p className="text-center text-2xl font-semibold mt-3">
              Omar’s Basic Math
            </p>

            <p className="text-center text-xl font-semibold mt-1">
              500 Taka
            </p>

            <div className="text-center mb-2 mt-3">
              <Link to="/booksDetails">
                <button className=" bg-blue-200 p-2 rounded-xl font-semibold">
                  See details
                </button>
              </Link>
            </div>
          </div>
          <div className="m-5 shadow-xl">
            <img src={bookImage} alt="" className="books-image-set" />

            <p className="text-center text-2xl font-semibold mt-3">
              Omar’s Basic Math
            </p>

            <p className="text-center text-xl font-semibold mt-1">
              500 Taka
            </p>

            <div className="text-center mb-2 mt-3">
              <Link to="/booksDetails">
                <button className=" bg-blue-200 p-2 rounded-xl font-semibold">
                  See details
                </button>
              </Link>
            </div>
          </div>
          <div className="m-5 shadow-xl">
            <img src={bookImage} alt="" className="books-image-set" />

            <p className="text-center text-2xl font-semibold mt-3">
              Omar’s Basic Math
            </p>

            <p className="text-center text-xl font-semibold mt-1">
              500 Taka
            </p>

            <div className="text-center mb-2 mt-3">
              <Link to="/booksDetails">
                <button className=" bg-blue-200 p-2 rounded-xl font-semibold">
                  See details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPreparationCourses;
