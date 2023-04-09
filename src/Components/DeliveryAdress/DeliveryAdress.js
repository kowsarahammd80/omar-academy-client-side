import React from 'react';
import './DeliveryAdress.css'

const DeliveryAdress = () => {

  return (

    <div className='mx-10 lg:mx-60 xl:mx-60'>

       <div>
          <h1 className='text-2xl lg:text-4xl xl:text-4xl font-bold mt-5 mb-5'>Delivery Address</h1>
       </div>

      <div className='flex justify-center'>
         
      <form className='w-full '>
           
           <div>
           <input type="text" placeholder="Profile Name" className="input input-bordered w-full rounded-none mb-4" />
           <input type="text" placeholder="Registered Mobile Number" className="input input-bordered w-full rounded-none mb-4" />
           <input type="text" placeholder="E-mail Address" className="input input-bordered w-full rounded-none mb-4" />
           <input type="text" placeholder="Alternative Phone Number" className="input input-bordered w-full rounded-none mb-4" />
  
           </div>

           <div>
               <h1 className='text-2xl lg:text-4xl xl:text-4xl font-bold my-10'>Address</h1>
               
               <div className='grid grid-cols-2 gap-4 mb-5'>

               <input type="text" placeholder="House No." className="input input-bordered w-full rounded-none" />

               <input type="text" placeholder="Village/Mohalla/Para" className="input input-bordered w-full rounded-none" />

               <input type="text" placeholder="Road No." className="input input-bordered w-full rounded-none" />

               <input type="text" placeholder="Post Office" className="input input-bordered w-full rounded-none" />

               <input type="text" placeholder="Block No." className="input input-bordered w-full rounded-none " />

               <input type="text" placeholder="Upazila" className="input input-bordered w-full rounded-none" />

               <input type="text" placeholder="Postal Code" className="input input-bordered w-full rounded-none" />

               <input type="text" placeholder="Profile Name" className="input input-bordered w-full rounded-none" />
                 
              </div>
           </div>

           <div className='mt-10 mb-5'>

              <div className='my-8'>
                 <h1 className='text-2xl lg:text-4xl xl:text-4xl font-bold'>Nearest Important Palce</h1>
              </div>


              <div>
              <input type="text" placeholder="Nearest Place Name" className="input input-bordered w-full rounded-none mb-5" />

              <input type="text" placeholder="Nearest Place Name" className="input input-bordered w-full rounded-none mb-4" />


              </div>


           </div>

           <div className='my-5'>
               <button className='button-address-submit'>Submit</button>
           </div>

         </form>

      </div>
       
    </div>
  );

};

export default DeliveryAdress;