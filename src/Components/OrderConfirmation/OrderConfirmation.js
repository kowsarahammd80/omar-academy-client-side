import React from "react";

const OrderConfirmation = () => {
  return (
    <div>
      <div className="text-center my-10">
        <h1 className="text-3xl xl:text-4xl lg:text-4xl font-bold">
          Order Information
        </h1>
      </div>

      <div className="mx-5 lg:mx-52 xl:mx-52 md:mx-40 my-10">

        <div className="card w-full bg-base-100 shadow-md border">

          <div className="card-body">

            <h2 className="text-center font-bold text-2xl">

              Your order has been received.

            </h2>

            <p className="text-center font-semibold text-2xl opacity-90 mx-0 lg:mx-48 xl:mx-48">

              Thank You, Dear Aminur for staying with us. To know your order
              status please call <span className="text-blue-400">+880 1571 245 208</span> and tell us this order ID:
              <span className="text-blue-400"> 6554265542 </span>

            </p>

          </div>

        </div>

      </div>

    </div>

  );
};

export default OrderConfirmation;
