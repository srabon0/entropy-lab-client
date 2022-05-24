import axios from "axios";
import React from "react";


const Modal = ({item, user,setOrder}) => {
   const {_id,productName,availableQ,minimumQ, pricePerUnit} = item
   const {displayName, email} = user

   const handleConfirmOrder = async (event) =>{
       event.preventDefault()
       const orderProduct = {

        productId : _id,
        productName:productName,
        pricePerUnit:pricePerUnit,
        customer:email,
        customerName:displayName,
        orderQ: event.target.orderQ.value
       }
       const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      };
       
       const url  = "http://localhost:5000/order"
       const {data} = await axios.post(url,orderProduct,{headers:headers});
       if(data.insertedId){
        console.log(data)
        setOrder(null)
       }



   }


  return (
    <div>
      <input type="checkbox" id="order-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="order-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Confirm Your Order For</h3>
          <p>Avaliable : {availableQ} unit</p>
          <form onSubmit={handleConfirmOrder} >
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="flex flex-col">
                  <label class="leading-loose">Product Name</label>
                  <input
                  defaultValue={productName}
                  readOnly
                  name="productName"
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Product Name"
                  />
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">Customer Name</label>
                  <input
                   readOnly
                   value={displayName}
                   name="customerName"
                    type="email"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="eg: 1000"
                  />
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">Customer email</label>
                  <input
                   readOnly
                   value={email}
                   name="customer"
                    type="email"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="eg: 1000"
                  />
                </div>
                <div class="flex items-center space-x-4">
                  <div class="flex flex-col">
                    <label class="leading-loose">Minimum Order Quantity</label>
                    <div class="relative focus-within:text-gray-600 text-gray-400">
                      <input
                       defaultValue={minimumQ}
                        name="orderQ"
                        type="text"
                        class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    
                      />
                      <div class="absolute left-3 top-2"></div>
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <label class="leading-loose">Per Unit Price</label>
                    <div class="relative focus-within:text-gray-600 text-gray-400">
                      <input
                        defaultValue={pricePerUnit}
                        readOnly
                        name="ppu"
                        type="text"
                        class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="eg: 150"
                      />
                      <div class="absolute left-3 top-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="pt-4 flex items-center space-x-4">
                <input
                  type="submit"
                  class="bg-blue-500 flex hover:cursor-pointer justify-center items-center w-full text-center text-white px-4 py-3 rounded-md focus:outline-none"
                  value="Confirm Order"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
