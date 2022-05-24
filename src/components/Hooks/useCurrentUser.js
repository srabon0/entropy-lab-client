import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


const useCurrentUser = () => {
    
  const [user, loading, error] = useAuthState(auth);
  const [isLoading,setIsLoading] = useState(true);


  const email = user.email
  const [internalUser, setInternalUser] =useState([]);
  useEffect(()=>{
      fetch(`http://localhost:5000/user/${user.email}`)
      .then(res=>res.json())
      .then(data=>{
        setInternalUser(data)
        setIsLoading(false);
      })
  },[user])

  return [internalUser]
   
};

export default useCurrentUser;