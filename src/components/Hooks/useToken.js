import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user=>{
    const [token,setToken] = useState('');
    const email = user?.user?.email;
    const currentUser = {email:email}
    const headers = { 
        'content-type': 'application/json'
    };
    useEffect(()=>{
        if(email){
            axios.put(`https://powerful-mesa-47934.herokuapp.com/ user/${email}`, currentUser, { headers})
            .then(response=>{
                console.log(response.data);
                const token = response.data.token;
                localStorage.setItem('accessToken',token);
                setToken(token);
            })
        }
    },[user])
    return [token,setToken]
}

export default useToken;
