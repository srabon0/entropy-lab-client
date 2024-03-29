import React from "react";
import axiosInstance from '../../../utils/axiosInstance'
import { toast } from "react-toastify";
import useCurrentUser from "../../Hooks/useCurrentUser";


const Modal = ({ item, user, setOrder }) => {
  const { _id, productName, availableQ, minimumQ, pricePerUnit } = item;
  const { displayName, email } = user;
  const [internalUser] = useCurrentUser();
  console.log(internalUser);

  const handleConfirmOrder = async (event) => {
    event.preventDefault();
    const orderProduct = {
      productId: _id,
      productName: productName,
      pricePerUnit: pricePerUnit,
      customer: email,
      customerName: displayName,
      orderQ: event.target.orderQ.value,
    };
    

    try {
      const response = await axiosInstance.post('/order', orderProduct);

      if (response.data.insertedId) {
        console.log(response.data);
        toast.success('Order Confirmed');
        setOrder(null);
      }
    } catch (error) {
      console.error(error);
      toast.error('Order Confirmation Failed');
    }
  };


  return (
    <div>
      <input type="checkbox" id="order-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="order-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Confirm Your Order For</h3>
          <p>Avaliable : {availableQ} unit</p>
          <form onSubmit={handleConfirmOrder} >
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                  <label className="leading-loose">Product Name</label>
                  <input
                  defaultValue={productName}
                  readOnly
                  name="productName"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Product Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Buyer Name Name</label>
                  <input
                   defaultValue={displayName || internalUser?.name}
                 
                   name="name"
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Buyer Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Customer email</label>
                  <input
                   readOnly
                   value={email}
                   name="customer"
                    type="email"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="eg: 1000"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col">
                    <label className="leading-loose">Minimum Order Quantity</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <input
                       defaultValue={minimumQ}
                        name="orderQ"
                        type="text"
                        className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    
                      />
                      <div className="absolute left-3 top-2"></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Per Unit Price</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <input
                        defaultValue={pricePerUnit}
                        readOnly
                        name="ppu"
                        type="text"
                        className="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="eg: 150"
                      />
                      <div className="absolute left-3 top-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center space-x-4">
                <input
                  type="submit"
                  className="bg-blue-500 flex hover:cursor-pointer justify-center items-center w-full text-center text-white px-4 py-3 rounded-md focus:outline-none"
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
