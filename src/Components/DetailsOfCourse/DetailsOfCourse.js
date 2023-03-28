import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { WhislistContext } from '../../Context/WishLishtProbaider';
import ShopingPage from '../../Pages/ShopingPage/ShopingPage';
import DetailsCardOfCourse from '../DetailsCardOfCourse/DetailsCardOfCourse';
import DetailsTextOfCourse from '../DetailsTextOfCourse/DetailsTextOfCourse';

const DetailsOfCourse = () => {

  const data=useLoaderData()





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
                   data={data}
                  
                   
                   />

               </div> 

               <div className='w-full'>

                  <DetailsCardOfCourse
                 
                  data={data}
                  handleaddToWishlish={handleaddToWishlish}
                  
                  />

               </div>

         </div>


    </div>

  );

};

export default DetailsOfCourse;