import axios from "axios";
import React from "react";

import { Confirm } from "react-st-modal";
import { toast } from "react-toastify";

const UserRow = ({ index, order,refetch}) => {
    const {_id,productName, productId, pricePerUnit,transactionId,customer,orderQ,shipped} = order

    const handleShipping = async(id) => {
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          };
        const url = `https://powerful-mesa-47934.herokuapp.com/order/delivered/${id}`;
        const proceed = await Confirm('Are you ready for shipment ?', 
        'Warning');
        if (proceed) {
          const {data} = await axios.put(url,{headers:headers});
          if(data){
              console.log(data)
              toast.success("Deliverd");
              refetch();
          }else{
              toast.error("operation failed")
          }
          
        }
      };

     

    
  return (
    <>
      <tr>
          <th>{index+1}</th>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          
          
              <p className="text-gray-900 whitespace-no-wrap">{productName}</p>
              <p className="text-gray-900 whitespace-no-wrap text-sm">{productId}</p>
              <p className="text-gray-900 whitespace-no-wrap text-sm">{customer}</p>
            
          
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{pricePerUnit} TK </p> 
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{orderQ} Unit </p> 
        </td>
        
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          {
            transactionId ? <span className="relative inline-block px-3 py-1 font-semibold text-black leading-tight">
            <span
              aria-hidden
              className="absolute inset-0 bg-info rounded-sm"
            ></span>
            <span className="relative">Paid</span>
          </span>
          :<span className="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-error opacity-50 rounded-sm"
          ></span>
          <span className="relative">Unpaid</span>
        </span> 
           
            
           
          } 
        </td>
        {
          shipped ? <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button disabled = { transactionId ? false : true } onClick={() => handleShipping(_id)}>
          <span className="relative inline-block px-3 py-1 font-semibold text-white leading-tight ">
            <span
              aria-hidden
              className={`absolute inset-0 rounded-sm ${transactionId ? "bg-success text-white" : "bg-error"   }`}
            ></span>
            <span className="relative">Delivered</span>
          </span>
          </button>
        </td> :

          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <button disabled = { transactionId ? false : true } onClick={() => handleShipping(_id)}>
          <span className="relative inline-block px-3 py-1 font-semibold text-white leading-tight ">
            <span
              aria-hidden
              className={`absolute inset-0 rounded-sm ${transactionId ? "bg-success text-white" : "bg-error"   }`}
            ></span>
            <span className="relative">Ship</span>
          </span>
          </button>
        </td>
        }

      </tr>
    </>
  );
};

export default UserRow;
