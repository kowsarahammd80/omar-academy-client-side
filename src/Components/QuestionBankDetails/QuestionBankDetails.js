import React from "react";
import admissionImage from "../../assats/admission-test.png";
import jobImage from "../../assats/job-placement.png";
import academyImage from "../../assats/accademy.png";
import "./QuestionBankDetails.css";
import { Link } from "react-router-dom";
import academyCourseImage from "../../assats/academy-class.png";
import omarBooks from "../../assats/book-store.png";

const QuestionBankDetails = () => {
  return (
    <div className="mx-5 lg:mx-24 xl:mx-24 md:mx-16">
      <div className="text-center">
        <h1 className="font-bold text-2xl lg:text-4xl xl:text-4xl">
          QuestionBank
        </h1>
      </div>

      {/* subject card */}

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-5 lg:mt-10 xl:mt-10">
        <div className="card w-full border rounded-none card-side bg-base-100 shadow-md">
          <figure>
            <img
              src={academyImage}
              alt="Movie"
              className="image-for-QuestionBank"
            />
          </figure>

          <div className="card-body">
            <div className="card-actions justify-end ">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
        <div className="card w-full border rounded-none card-side bg-base-100 shadow-md">
          <figure>
            <img
              src={jobImage}
              alt="Movie"
              className="image-for-QuestionBank"
            />
          </figure>

          <div className="card-body">
            <div className="card-actions justify-end ">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>

        <div className="card w-full border rounded-none card-side bg-base-100 shadow-md">
          <figure>
            <img
              src={admissionImage}
              alt="Movie"
              className="image-for-QuestionBank"
            />
          </figure>

          <div className="card-body">
            <div className="card-actions justify-end ">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>

      {/* button */}

      <div className="flex justify-center my-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 gap-4">
          <button className="button-class">class 10</button>

          <button className="button-class">class 11</button>

          <button className="button-class">class 12</button>
        </div>
      </div>

      {/* faq */}

      <div className="flex justify-center my-10">
        <div className="faq-div-question">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100"
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
            className="collapse collapse-arrow border border-base-300 bg-base-100"
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
            className="collapse collapse-arrow border border-base-300 bg-base-100"
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
            className="collapse collapse-arrow border border-base-300 bg-base-100"
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
            className="collapse collapse-arrow border border-base-300 bg-base-100"
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

      {/* course*/}

      <div className="">
        <h1 className="font-bold text-2xl lg:text-4xl xl:text-4xl">Courses</h1>
      </div>

      <div className="flex justify-center my-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 gap-5 w-full">
          <div className="card card-compact bg-base-100 shadow-xl p-0">
            <figure>
              <img src={academyCourseImage} alt="" className="w-full" />
            </figure>

            <div className="card-body">
              <h2 className="text-center text-2xl font-bold"> Class 1-4</h2>

              <div className="flex justify-around">
                <div className="font-semibold">
                  <p> 10,000+ Videos</p>
                </div>

                <div className="font-semibold">
                  <p>500 Subject</p>
                </div>
              </div>

              <hr className="hr-tag" />

              <div className="card-actions justify-center py-2 text-lg">
                <Link>
                  <button className="see-details font-bold">See Details</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl p-0">
            <figure>
              <img src={academyCourseImage} alt="" className="w-full" />
            </figure>

            <div className="card-body">
              <h2 className="text-center text-2xl font-bold"> Class 1-4</h2>

              <div className="flex justify-around">
                <div className="font-semibold">
                  <p> 10,000+ Videos</p>
                </div>

                <div className="font-semibold">
                  <p>500 Subject</p>
                </div>
              </div>

              <hr className="hr-tag" />

              <div className="card-actions justify-center py-2 text-lg">
                <Link>
                  <button className="see-details font-bold">See Details</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl p-0">
            <figure>
              <img src={academyCourseImage} alt="" className="w-full" />
            </figure>

            <div className="card-body">
              <h2 className="text-center text-2xl font-bold"> Class 1-4</h2>

              <div className="flex justify-around">
                <div className="font-semibold">
                  <p> 10,000+ Videos</p>
                </div>

                <div className="font-semibold">
                  <p>500 Subject</p>
                </div>
              </div>

              <hr className="hr-tag" />

              <div className="card-actions justify-center py-2 text-lg">
                <Link>
                  <button className="see-details font-bold">See Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* books card */}

      <div className="flex justify-center my-10 lg:my-16 xl:my-16 mx-0 lg:mx-24 xl:mx-24">
        {/* <div className="card w-full lg:card-side border bg-base-100 shadow-xl">
          <figure>
            <img
              src={omarBooks}
              alt="Album"
              className="omar-books p-3"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> Omar’s Basic Math </h2>
            <p className="text-green-600 font-bold text-xl">599 Taka</p>
            <p className="p-0 w-96">This book is specially written and edited for learning written and short mathematics. The book contains chapter-wise discussions, explanations of formulas and summaries, written solutions as well as short solutions with explanations for easy learning of mathematics at home quickly and effectively.This book is specially written and edited for learning written and short.</p>
            <div className="card-actions justify-start">
              <button className="books-button-omar">Know more</button>
            </div>
          </div>
        </div> */}

        <div className="card w-full card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src={omarBooks}
              alt="Movie"
              className="omar-books p-3"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Omar’s Basic Math</h2>
            <p className="">599 taka</p>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-start">
              <button className="books-button-omar">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBankDetails;
