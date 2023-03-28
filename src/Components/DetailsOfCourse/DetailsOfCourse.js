import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { WhislistContext } from '../../Context/WishLishtProbaider';
import DetailsCardOfCourse from '../DetailsCardOfCourse/DetailsCardOfCourse';
import DetailsTextOfCourse from '../DetailsTextOfCourse/DetailsTextOfCourse';

const DetailsOfCourse = () => {
  const {addToWishlist }=useContext(WhislistContext)
const handleaddToWishlish=(product)=>{
  addToWishlist(product)
}

const data=useLoaderData()
console.log(data)



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