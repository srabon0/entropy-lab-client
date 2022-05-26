import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
        const url = `https://powerful-mesa-47934.herokuapp.com/isThePersonAdmin/${email}`
        const headers = {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          };
        const isAdmin = async() =>{
            const {data} = await axios.get(url,{headers:headers});
            setAdmin(data.admin);
            setAdminLoading(false)
            console.log(data.admin);
        }
        isAdmin();

     
    }
  }, [user]);
  return [admin, adminLoading];
};

export default useAdmin;

