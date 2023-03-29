import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrder } from "../../api/booking";
import image from '../../assats/mathematics-word (2).jpg'
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";

const Profile = () => {
   const {user}=useContext(AuthContext)



  const [orders, setOrders] = useState([]);
  const fetchOrder = () =>
  getOrder(user?.email).then((data) => setOrders(data));

  useEffect(() => {
      fetchOrder();
  }, [user]);





  return (

    <div className="mx-5 lg:mx-16 mb-5 bg-slate-100">


       <div className="text-center mt-5 lg:mt-10 mb-5 lg:mb-16">

          <h1 className="text-2xl lg:text-4xl font-bold"> <span className="text-blue-500">Md. Kowsar Ahamed</span> Welcome to  Omar's Academy
          </h1>

       </div>


      {/* course card */}


     <div className="grid  gap-10 p-10 lg:grid-cols-2 grid-cols-1">
     {
        orders?.map(order=>  <div className=" ">

        <div className="card w-full lg:card-side bg-base-100 shadow-xl">

          <figure>
            <img
              src={order.coursThumnil}
              alt="Album"
              className="w-96"
            />
          </figure>

          <div className="card-body">

            <h2 className="card-title">{order.courseName}</h2>

            <p>{order.aboutCours}</p>

            <div className="card-actions justify-end">

  <Link to={`/coursvideo/${order.coursId}`}>

            
              <button  className="btn btn-primary">start</button>
              </Link>
            </div>

          </div>

        </div>

        

      </div>)
      }
     </div>

    


    </div>

  );

};

export default Profile;
