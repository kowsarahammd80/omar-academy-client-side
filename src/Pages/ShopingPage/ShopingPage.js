import React, { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import { BuynowContext } from "../../Context/BuyProbider";


function ShopingPage(){
     const {user}=useContext(AuthContext)
     console.log(user)
    const {cartProduct}=useContext(BuynowContext)
    console.log(cartProduct + "inside shoping page")
    const {_id,coursPrice,coursThumnil,courseName,ThecherName
    }=cartProduct



    const  removefromlocalstorage=()=>{
        localStorage.removeItem("buy")
    }




    const  handeleOrder=()=>{
   
          const order={
        

          }

     



    }






 

return(
  cartProduct? <div class="h-screen bg-gray-100 pt-20">
  <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
  <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
    <div class="rounded-lg md:w-2/3">
      <div class="justify-between mb-6 rounded-lg items-center bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img src={coursThumnil}  alt="product-image" class="w-full rounded-lg sm:w-40" />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-lg font-bold text-gray-900">{courseName}</h2>
            <p class="mt-1 text-md text-gray-700"> Thecher: {ThecherName}</p>
          </div>
          <div class="mt-4 flex justify-between items-center sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          
            <div class="flex items-center space-x-4">
              <p class="text-md">{coursPrice} Taka</p>

            
            </div>
          </div>
        </div>
      </div>
     
    </div>

    <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      <div class="mb-2 flex justify-between">
        <p class="text-gray-700">Subtotal</p>
        <p class="text-gray-700">{coursPrice}</p>
      </div>
      
      <hr class="my-4" />
      <div class="flex justify-between">
        <p class="text-lg font-bold">Total</p>
        <div class="">
          <p class="mb-1 text-lg font-bold">{coursPrice} Taka</p>
          <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
          <input type="text" placeholder="Type here" className="input input-bordered input-info w-full " />
        </div>
      </div>
      <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
    </div>
  </div>
</div>:<h1>youre Cart is  emty</h1>
)
}


export  default ShopingPage