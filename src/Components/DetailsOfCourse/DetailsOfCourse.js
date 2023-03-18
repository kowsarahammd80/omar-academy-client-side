import React from 'react';
import DetailsCardOfCourse from '../DetailsCardOfCourse/DetailsCardOfCourse';
import DetailsTextOfCourse from '../DetailsTextOfCourse/DetailsTextOfCourse';

const DetailsOfCourse = () => {

  return (

    <div className='mx-5 lg:mx-16'>

      {/* grid  */}
         
         <div className='flex flex-col-reverse  lg:flex-row'>
              
               <div className='w-full'>
                   
                   <DetailsTextOfCourse/>

               </div> 

               <div className='w-full'>

                  <DetailsCardOfCourse/>

               </div>

         </div>

    </div>

  );

};

export default DetailsOfCourse;