import { toast } from "react-hot-toast"

export const  postOrder=(orderinfo)=>{


    if(orderinfo){
        fetch("http://localhost:5000/order",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(orderinfo),
          }
        )
        .then(res=>res.json())
        .then(data=>{
             console.log(data)
             toast.success("ordersuccefully")
        })
    }
 

}


export const getOrder = async email => {
  const response = await fetch(`http://localhost:5000/getorder?email=${email}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',

      },
    }
  )
  const bookings = await response.json()
  return bookings
}


