import React from 'react';
import books from '../../../assats/book-store.png'

const OnlineBooksAadd = () => {

  return (

    <div className='mb-5 mt-16 lg:mt-20 mx-3 lg:mx-0'>
       
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

  );

};

export default OnlineBooksAadd;