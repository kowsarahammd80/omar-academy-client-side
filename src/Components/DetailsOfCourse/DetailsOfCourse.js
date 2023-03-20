import React, { useContext } from 'react';
import { WhislistContext } from '../../Context/WishLishtProbaider';
import DetailsCardOfCourse from '../DetailsCardOfCourse/DetailsCardOfCourse';
import DetailsTextOfCourse from '../DetailsTextOfCourse/DetailsTextOfCourse';

const DetailsOfCourse = () => {


  const {addToWishlist }=useContext(WhislistContext)
 

const handleaddToWishlish=(product)=>{
  addToWishlist(product)
}


  return (

    <div className='mx-5 lg:mx-16'>

      {/* grid  */}
         
         <div className='flex flex-col-reverse  lg:flex-row'>
              
               <div className='w-full'>
                   
                   <DetailsTextOfCourse 
                   
                   
                   />

               </div> 

               <div className='w-full'>

                  <DetailsCardOfCourse
                  handleaddToWishlish={handleaddToWishlish}
                  
                  />

               </div>

         </div>

    </div>

  );

};

export default DetailsOfCourse;