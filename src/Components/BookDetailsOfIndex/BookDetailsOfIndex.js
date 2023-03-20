import React from 'react';
import './BookDetailsOfIndex.css'

const BookDetailsOfIndex = () => {

  return (

    <div className='body mt-10 lg:mt-16'>
         
          <div className="mx-3 lg:mx-24 p-3">

            {/* index */}

               <div className='text-center mt-10'>
               
                 <h1 className='font-bold text-4xl'>Index</h1>
                
               </div>

               <div className='mt-5 mb-5 flex-none lg:flex justify-center font-semibold text-lg gap-6'>
                    
                    <p>A. Arithmetic</p>
                    <p>B. Algebra</p>
                    <p>C. Geometry, Measurement and Trigonometry</p>
                    <p>D. Mental Toughness</p>
                    <p>E. Statics and others</p>

               </div>

          </div>

    </div>

  ); 

};

export default BookDetailsOfIndex;