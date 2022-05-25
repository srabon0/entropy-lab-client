import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { Confirm } from "react-st-modal";
import { Prompt, Alert } from "react-st-modal";
import { toast } from "react-toastify";
import { useQuery } from "react-query";
const Myorders = () => {
  const [user, loading, error] = useAuthState(auth);
  const url = ` http://localhost:5000/order/${user.email}`;
  const {
    isLoading,
    error2,
    data: orders,
    refetch,
  } = useQuery("orders", () => fetch(url).then((res) => res.json()));

  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  if (error || error2) {
    return (
      <div>
        <p>Error: {error || error2}</p>
      </div>
    );
  }
  return (
    <section class="container mx-auto p-6">
      <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div class="w-full overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="text-sm tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th class="px-3 py-2">#SL</th>
                <th class="px-3 py-2">Product Name</th>
                <th class="px-3 py-2">Order Quantity</th>
                <th class="px-3 py-2">Price Per Unit</th>
                <th class="px-3 py-2">Pay Total</th>
                <th class="px-3 py-2">Action</th>
                <th class="px-3 py-2">X</th>
              </tr>
            </thead>
            <tbody class="bg-white">
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
    const url = `http://localhost:5000/order/pay/${id}`;
    const headers = {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };
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
      const { data } = axios.put(url, transactionId, { headers: headers });
      if (data) {
        console.log(data);
        toast.success("Payment SuccessFul");
        refetch();
      }
    } else {
      toast("Invalid Transaction id");
    }
  };

  const cancelOrder = async (id) => {
    const url = `http://localhost:5000/item/${id}`;
    const headers = {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    };
    const result = await Confirm(
      "Are you Sure You want to cancel the order?",
      "Warning"
    );

    if (result) {
      const { data } = axios.delete(url, { headers: headers });
      toast.success("Order cancelled");
      refetch();
    } else {
      // Сonfirmation not confirmed
    }
  };
  return (
    <>
      <tr class="text-gray-700">
        <td class="px-3 py-2 border">{index + 1}</td>
        <td class="px-3 py-2 text-ms  border">{productName}</td>
        <td class="px-3 py-2 text-xs border">
          <span class="px-3 py-1 leading-tight text-green-700 bg-green-100 rounded-sm">
            {orderQ}
          </span>
        </td>
        <td class="px-3 py-2 text-sm border">{pricePerUnit}</td>
        <td class="px-3 py-2 text-sm border">{orderQ * pricePerUnit}</td>
        <td class="px-3 py-2 text-sm border">
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
