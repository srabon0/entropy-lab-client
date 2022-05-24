import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import Modal from './Modal/Modal'
import OrderItem from "./Modal/OrderItem";

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
  const navigate = useNavigate()
  const [order,setOrder] = useState(null)
  const [user, loading, error] = useAuthState(auth);
  
  const [item, setItem] = useState([]);
  useEffect(() => {
    const getItem = async () => {
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      };
      const url = `http://localhost:5000/item/${id}`;
      const { data } = await axios.get(url, { headers: headers });
      console.log(data);
      setItem(data);
    };
    getItem();
  }, [id]);

  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if(!user){
    navigate('/login')

  }

  return (
    <>
    
      <OrderItem key={item._id} item={item} setOrder={setOrder}></OrderItem>

      {
order && <Modal  user={user} item={item} setOrder={setOrder}></Modal>
      }

      </>
    
  );
};

export default SingleItem;
