import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


const useCurrentUser = () => {
    
  const [user, loading, error] = useAuthState(auth);

  const [isLoading,setIsLoading] = useState(true);
  
  const [internalUser, setInternalUser] =useState([]);
  useEffect(()=>{
      if(user){
    const email = user.email
      fetch(`http://localhost:5000/user/${email}`)
      .then(res=>res.json())
      .then(data=>{
        setInternalUser(data)
        setIsLoading(false);
      })
      }
  },[user,loading])

  return [internalUser]
   
};

export default useCurrentUser;