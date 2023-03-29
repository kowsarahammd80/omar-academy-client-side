import { useContext, useState } from "react"
import { postOrder } from "../../api/booking"
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider"

function Shopmodal({data}){

 const {user}=useContext(AuthContext)
  const[number,setNumber]=useState("")

    const {_id,courseName,coursThumnil,ThecherName,ThecherEducation,techerImg
        ,videoQuantity,videolecture,
          chapterQuantity,coursPrice
        ,keyPoint,aboutCours}=data
    
          
   
   
        const handeleOrder=()=>{
            const  order={
                coursThumnil:coursThumnil,
                courseName:courseName,
                coursPrice:coursPrice,
                aboutCours:aboutCours,
                coursId:_id,
                 userEmail:user.email,
                  userName:user.displayName,
                  phoneNumber:number
            }
            postOrder(order)

        }
   
   
   
   return <>
   
   
  

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal w-full">
<body>
  <div class=" w-full bg-gray-100  p-20">
    <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
         
        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img src={coursThumnil}  alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full items-center sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">{courseName}</h2>
              <p class="mt-1 text-md text-gray-700">Price: {coursPrice} Taka</p>
            </div>
             
          </div>
        </div>
      </div>

      <div class="mt-6 h-full  rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class=" my-4 w-full">
          <p class="text-gray-700">Subtotal : {coursPrice} Taka</p>

        </div>

     <div>
     <input type="text" disabled  readOnly placeholder="Type here"  value={user?.email } className=" my-5 input input-bordered input-primary w-full max-w-xs" />
     <input required  onChange={(e)=>setNumber(e.target.value)} type="text" placeholder="Phone-Number" className="input input-bordered input-primary w-full max-w-xs" />
     </div>

        
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">{coursPrice}</p>
             
          </div>
        </div>
        <button  onClick={handeleOrder} class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
     
    </div>
    <div className="modal-action">
      <label htmlFor="my-modal-5" className="btn">close </label>
    </div>
  </div>
  
</body>
    
  </div>
 
   </>


}



export default Shopmodal