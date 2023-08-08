import React from "react";
import { Confirm } from "react-st-modal";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance"; // Import your axios instance here

const UserRow = ({ index, order, refetch }) => {
  const { _id, productName, productId, pricePerUnit, transactionId, customer, orderQ, shipped } = order;

  const handleShipping = async (id) => {
    try {
      const url = `/order/delivered/${id}`;
      const proceed = await Confirm('Are you ready for shipment ?', 'Warning');
      
      if (proceed) {
        const { data } = await axiosInstance.put(url);
        
        if (data) {
          console.log(data);
          toast.success("Delivered");
          refetch();
        } else {
          toast.error("Operation failed");
        }
      }
    } catch (error) {
      console.error("Error occurred during shipping:", error);
      toast.error("An error occurred while shipping");
    }
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{productName}</p>
        <p className="text-gray-900 whitespace-no-wrap text-sm">{productId}</p>
        <p className="text-gray-900 whitespace-no-wrap text-sm">{customer}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{pricePerUnit} TK</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{orderQ} Unit</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {transactionId ? (
          <span className="relative inline-block px-3 py-1 font-semibold text-black leading-tight">
            <span aria-hidden className="absolute inset-0 bg-info rounded-sm"></span>
            <span className="relative">Paid</span>
          </span>
        ) : (
          <span className="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
            <span aria-hidden className="absolute inset-0 bg-error opacity-50 rounded-sm"></span>
            <span className="relative">Unpaid</span>
          </span>
        )}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button disabled={transactionId ? false : true} onClick={() => handleShipping(_id)}>
          <span className={`relative inline-block px-3 py-1 font-semibold text-white leading-tight ${transactionId ? "bg-success" : "bg-error"}`}>
            <span aria-hidden className="absolute inset-0 rounded-sm"></span>
            <span className="relative">{shipped ? "Delivered" : "Ship"}</span>
          </span>
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
