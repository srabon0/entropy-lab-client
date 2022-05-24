import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Myorders = () => {
    const [user, loading, error] = useAuthState(auth);
  
    const [orders,setOrders] = useState([]);
    
    useEffect(()=>{
        const getMyOrders = async()=>{
            const url =` http://localhost:5000/order/${user.email}`
            const {data} = await axios.get(url)
            setOrders(data)
        }
        if(user){
            getMyOrders()
        }


    },[])

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
    return (
        <div>
           {orders.length}
        </div>
    );
};

export default Myorders;