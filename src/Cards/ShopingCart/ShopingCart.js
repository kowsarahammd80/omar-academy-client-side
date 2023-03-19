import React, { useContext } from "react";
import { CoursContext } from "../../Context/CoursProbider";
import {Link} from  'react-router-dom'
 
const ShopingCart = () => {

  

 const {cart,cartTotal,  removeFromCart ,clearCart}=useContext(CoursContext)
 

  return (


    <>

    {
      cart?.length >0 ?  <body class="bg-gray-100">
      <div class="container mx-auto mt-10">
        <div class="flex shadow-md my-10">
          <div class="w-3/4 bg-white px-10 py-10">
            <div class="flex justify-between border-b pb-8">
              <h1 class="font-semibold text-2xl">Shopping Cart</h1>
              <h2 class="font-semibold text-2xl">{cart.length} Items</h2>
            </div>
            <div class="flex mt-10 mb-5">
              <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
          
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Qty
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>


{
  cart?.map(cours=>   <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
  <td class="w-32 p-4">
      <img src={cours.courseImg} alt=""/>
  </td>
  <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
    { cours?.courseName}
  </td>
  <td class="px-6 py-4">
     <h1>1</h1>
  </td>

 
  <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
  {cours.coursePrice === 0 || cours.coursePrice === "free" || cours.coursePrice ==="" ? "free" : <h1>{cours.coursePrice}     Taka </h1>   } 

  </td>
  <td class="px-6 py-4">
      <a 
    onClick={()=>removeFromCart(cours.id)}
       
      href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
  </td>
</tr>)
}



         
           
           
        </tbody>
    </table>
</div>


          
<div class="flex justify-between items-center my-4 text-2xl  font-semibold ">

<Link to="/">
<button>
<a
              href="#"
              class="flex font-semibold uppercase text-indigo-600 text-sm mt-10"
            >
              <svg
                class="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
</button>
</Link>



<button
 
 
 onClick={()=>clearCart()}
className="bg-red-400 text-sm rounded-md text-white uppercase p-2"> 
clear Cart
</button>




</div>
 


          </div>

          <div id="summary" class="w-1/4 px-8 py-10">
            <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div class="flex justify-between mt-10 mb-5">
              <span class="font-semibold text-sm uppercase">Items 3</span>
              <span class="font-semibold text-sm">590$</span>
            </div>
            <div>
              <label class="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select class="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div class="py-10">
              <label
                for="promo"
                class="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                class="p-2 text-sm w-full"
              />
            </div>
            <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div class="border-t mt-8">
              <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>:
<div class="w-full 



p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
   
<div  clssName="block	 m-auto  ">
<img className="m-auto" src="https://i.ibb.co/rvXwTn3/empty-cart.png" />
</div>

      
<Link to="/">
<button>
<a
              href="#"
              class="flex font-semibold uppercase text-indigo-600 text-sm mt-10"
            >
              <svg
                class="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
</button>
</Link>
    </div>


    }
    </>
   
  );
};

export default ShopingCart;
