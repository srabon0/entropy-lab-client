import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { Confirm } from "react-st-modal";
import { Prompt } from "react-st-modal";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
import axiosInstance from '../../utils/axiosInstance'
const Myorders = () => {
  const [user, loading, error] = useAuthState(auth);
  const {
      isLoading,
      error: error2,
      data: orders,
      refetch
  } = useQuery("orders", async () => {
      try {
          const response = await axiosInstance.get(`/order/${user.email}`);
          return response.data;
      } catch (error) {
          throw new Error(`An error occurred: ${error.message}`);
      }
  });

  if (loading || isLoading) {
      return <Loading />;
  }
  if (error || error2) {
      return (
          <div>
              <p>Error: {error || error2}</p>
          </div>
      );
  }
  return (
    <section className="container mx-auto p-6">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-sm tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-3 py-2">#SL</th>
                <th className="px-3 py-2">Product Name</th>
                <th className="px-3 py-2">Order Quantity</th>
                <th className="px-3 py-2">Price Per Unit</th>
                <th className="px-3 py-2">Pay Total</th>
                <th className="px-3 py-2">Action</th>
                <th className="px-3 py-2">X</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {orders.map((order, index) => (
                <OrderRow
                  refetch={refetch}
                  index={index}
                  key={order._id}
                  order={order}
                ></OrderRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Myorders;

const OrderRow = ({ refetch, order, index }) => {
  const { _id, productName, orderQ, pricePerUnit, transactionId, shipped } =
    order;

  const payForOrder = async (id) => {
    var txnId = await Prompt(
      "Please Provide a TXNid,this must be a 10 digit number",
      {
        isRequired: true,
        defaultValue: "",
      }
    );

    if (txnId.length > 10) {
      const transactionId = { transactionId: txnId };
      console.log(transactionId);
      const { data } = await axiosInstance.put(`/pay/${id}`, transactionId);
      if (data.modifiedCount) {
        console.log(data);
        toast.success("Payment SuccessFul");
        refetch();
      }
    } else {
      toast("Invalid Transaction id");
    }
  };

  const cancelOrder = async (id) => {
    const result = await Confirm(
      "Are you Sure You want to cancel the order?",
      "Warning"
    );

    if (result) {
      const { data } = await axiosInstance.delete(`/item/${id}`);
      console.log(data);
      toast.success("Order cancelled");
      refetch();
    } else {
      // Сonfirmation not confirmed
    }
  };
  return (
    <>
      <tr className="text-gray-700">
        <td className="px-3 py-2 border">{index + 1}</td>
        <td className="px-3 py-2 text-ms  border">{productName}</td>
        <td className="px-3 py-2 text-xs border">
          <span className="px-3 py-1 leading-tight text-green-700 bg-green-100 rounded-sm">
            {orderQ}
          </span>
        </td>
        <td className="px-3 py-2 text-sm border">{pricePerUnit}</td>
        <td className="px-3 py-2 text-sm border">{orderQ * pricePerUnit}</td>
        <td className="px-3 py-2 text-sm border">
          {transactionId ? (
            <button className="btn btn-sm btn-success text-white mx-1">Paid</button>
          ) : (
            <button
              className="btn btn-sm btn-warning mx-1"
              onClick={() => payForOrder(_id)}
            >
              Pay
            </button>
          )}
        </td>
        <td>
          {shipped ? (
            <button className="btn btn-sm btn-secondary text-white mx-1">
              Product Shipped
            </button>
          ) : 
          
          transactionId ? (
            <button
            
              className="btn btn-sm btn-info mx-1"
            >
              Shipment Pending
            </button>
          ) : (
            <button
              onClick={() => cancelOrder(_id)}
              className="btn btn-sm btn-error mx-1"
            >
              Cancel Order
            </button>
          )
          
          }
        </td>
      </tr>
    </>
  );
};
