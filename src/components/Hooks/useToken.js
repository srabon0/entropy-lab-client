import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance'; 

const useToken = (user) => {
  const [token, setToken] = useState('');
  const email = user?.user?.email;
  const currentUser = { email: email };
  
  useEffect(() => {
    if (email) {
      axiosInstance.put(`/user/${email}`, currentUser)
        .then(response => {
          console.log(response.data);
          const token = response.data.token;
          localStorage.setItem('accessToken', token);
          setToken(token);
        })
        .catch(error => {
          console.error('Error occurred while setting token:', error);
        });
    }
  }, [email]);

  return [token, setToken];
};

export default useToken;
