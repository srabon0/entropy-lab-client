import React from 'react';
import { Confirm } from 'react-st-modal';
import { toast } from 'react-toastify';
import axiosInstance from "../../utils/axiosInstance"; // Import your axios instance here

const ProductRow = ({ product, index, refetch }) => {
  const cancelOrder = async (id) => {
    try {
      const url = `/removeitem/${id}`;
     
      const result = await Confirm('Are you sure you want to cancel the order?', 'Warning');

      if (result) {
        const { data } = await axiosInstance.delete(url);
        toast.success('Order cancelled - ',data);
        refetch();
      } else {
        // Confirmation not confirmed
      }
    } catch (error) {
      console.error('Error occurred while cancelling order:', error);
      toast.error('An error occurred while cancelling order');
    }
  };

  const { _id, productName, pricePerUnit, availableQ, minimumQ } = product;

  return (
    <tr>
      <th>{index + 1}</th>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{productName}</p>
        <p className="text-gray-900 whitespace-no-wrap">{pricePerUnit} TK/per unit</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap"> {availableQ} Unit </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap"> {minimumQ} Unit </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button onClick={() => cancelOrder(_id)} className="btn btn-sm btn-error mx-1">
          Delete
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"></td>
    </tr>
  );
};

export default ProductRow;
