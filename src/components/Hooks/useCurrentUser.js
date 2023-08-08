import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axiosInstance from '../../utils/axiosInstance';

const useCurrentUser = () => {
  const [user, loading, error] = useAuthState(auth);
  const [isLoading, setIsLoading] = useState(true);
  const [internalUser, setInternalUser] = useState([]);

  useEffect(() => {
    if (user) {
      const email = user.email;
      const url = `/user/${email}`;
     

      const fetchUserData = async () => {
        try {
          const response = await axiosInstance.get(url);
          setInternalUser(response.data);
          setIsLoading(false);
        } catch (error) {
          console.error('Error occurred while fetching user data:', error);
          setIsLoading(false);
        }
      };

      fetchUserData();
    }
  }, [user, loading]);

  return [internalUser];
};

export default useCurrentUser;
