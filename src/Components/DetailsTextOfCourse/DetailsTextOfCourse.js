import React from "react";
import "./DetailsTextOfCourse.css";
import dot from "../../assats/ic_round-arrow-right.png";
import books from '../../assats/book-store.png'

const DetailsTextOfCourse = ({data}) => {
  
  const {_id,courseName,coursThumnil,ThecherName,ThecherEducation,techerImg
    ,videoQuantity,videolecture,
      chapterQuantity,coursPrice,aboutCours
    ,keyPoint}=data
  return (
    <div  className="capitalize">
      {/* headline */}

      <div className="hidden lg:block mt-5 lg:mt-10 mb-5 lg:mb-10">
        <h1 className="text-2xl lg:text-4xl font-bold">{courseName}</h1>

        <p className="opacity-80 font-semibold mt-2">
          Course Details / Description
        </p>
      </div>

      {/* course teacher */}

      <div className=" mb-5 mt-16 lg:mt-20">
        {/* headline */}

        <div className="mb-3">
          <h1 className="text-2xl font-bold">Course's Teacher</h1>
        </div>

        <div className="card lg:card-side bg-base-100 border-2 rounded-none">
          <figure>
            <img
              src= {techerImg}
              alt="thecherImg"
              className="w-full"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{ThecherName}</h2>
            <p>{ThecherEducation}</p>
          </div>
        </div>
      </div>

      {/* What you’ll learn */}

      <div className="mt-16 mb-10">
        {/* headline */}

        <div className="mt-5 mb-2">
          <h1 className="text-2xl font-bold">What you’ll learn</h1>
        </div>

        {/* card */}

        <div className="card w-100 bg-base-100 border-2 rounded-none">
          <div className="card-body">
            <div className="">
              <ul>
 {
  keyPoint?.map(point=><li className="flex items-center mb-3">
   
<li className="list-disc ml-2	">  <span className=""> {point.name}</span></li>
</li>)
 }


                
               
              </ul>
            </div>

            <hr className="hr-tag text-gray-200" />

            {/* More about this course */}

            <div>
              {/* headline */}

              <div className="mt-5 mb-3">
                <h1 className="text-lg font-bold">More about this course</h1>
              </div>

              {/* details paragraph */}

              <div>
                <p className="font-semibold">
                 {aboutCours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Lectures */}

      <div className="mb-10 mt-0 lg:mt-5">
         
         <div className="text-start mt-5 mb-2">
            <h1 className="text-2xl font-bold">Video Lectures</h1>
         </div>
         
         {/* FAQ start */}


          {videolecture?.map(lecture=><div
          tabIndex={1}
          className="collapse collapse-arrow border border-base-300 bg-base-100"
        >
          <div className="collapse-title text-xl font-medium">
           {lecture.name}
          </div>
          <div className="collapse-content">
            <p tabIndex={1}> {lecture.details}</p>
          </div>
        </div>)}
 

        
         
        
         
        

        {/* fAQ end */}


      </div>

      {/* Books for mobile */}

      <div className="block lg:hidden">

        <div className="card card-compact lg:w-96 bg-base-100 shadow-xl rounded-none mb-5">
            
            <figure>

              <img
                src={books}
                alt="imageName"
                className="books-image"
              />

            </figure>

            <div className="card-body">

              <div className="flex justify-between items-center">

                  <h2 className="font-semibold text-xl">Omar’s Basic Math</h2>

                  <p className="font-semibold text-blue-600 ml-5 text-xl">500 Taka</p>


              </div>

              <div className="mt-5 mb-5">
                 <p className="font-semibold">This book is specially written and edited for learning written and short mathematics. The book contains chapter-wise discussions, explanations of formulas and summaries, written solutions as well as short solutions with explanations for easy learning of mathematics at home quickly and effectively.</p>
              </div>

              
             {/* Know more button */}

              <div className="card-actions justify-center">

                <button className="buy-now-button mt-5 mb-5">Know More</button>

              </div>

                  {/* details */}

              


            </div>

          </div>
           
        </div>


    </div>
  );
};

export default DetailsTextOfCourse;
