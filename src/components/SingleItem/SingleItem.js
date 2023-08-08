import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import Modal from './Modal/Modal'
import OrderItem from "./Modal/OrderItem";
import axiosInstance from '../../utils/axiosInstance'

// const item = {
//     productName:productName ,
//     img: imgurl,
//     availableQ: avq,
//     minimumQ:minq,
//     pricePerUnit: ppu,
//     desc:desc
//   }

const SingleItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [user, loading, error] = useAuthState(auth);

  const [item, setItem] = useState([]);
  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axiosInstance.get(`/item/${id}`);
        console.log(response.data);
        setItem(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getItem();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (!user) {
    navigate('/login');
  }

  return (
    <>
      <OrderItem key={item._id} item={item} setOrder={setOrder} />

      {order && <Modal user={user} item={item} setOrder={setOrder} />}
    </>
  );
};

export default SingleItem;