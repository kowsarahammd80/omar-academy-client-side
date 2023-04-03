//get all  cours
 export const getacadmicCours=async()=>{
   const response=await fetch("http://localhost:5000/academic/cours")
   const data=await response.json()
   return data
}
 export const getuniversityTest=async()=>{
   const response=await fetch("http://localhost:5000/university/cours")
   const data=await response.json()
   return data
}
 export const getjobPreparetion=async()=>{
   const response=await fetch("http://localhost:5000/jobpreparetion/cours")
   const data=await response.json()
   return data
}