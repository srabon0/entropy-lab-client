import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance'; // Import your axios instance here

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      const url = `/isThePersonAdmin/${email}`;
      const isAdmin = async () => {
        try {
          const { data } = await axiosInstance.get(url);
          setAdmin(data.admin);
          setAdminLoading(false);
          console.log(data.admin);
        } catch (error) {
          console.error('Error occurred while checking admin status:', error);
          setAdminLoading(false);
        }
      };

      isAdmin();
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;
