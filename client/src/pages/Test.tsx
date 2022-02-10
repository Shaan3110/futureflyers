import axios from "axios";
import { GoogleAuthProvider, signInWithPopup, UserCredential, }                     from "firebase/auth";
import React, { useEffect, useState }                                               from 'react';
import { useNavigate } from "react-router-dom";
import { auth }                                                                     from "../utils/firebase";

const Test = () => {
    const url =
    "https://localhost:5000";
  const [authenticate, setAuthenticate] = useState(false);
  const [loggingin, setloggingin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UserCredential>();
  const navigate = useNavigate();
  useEffect(() => {
    if(loggingin)
    {
    (async () => {
      const token = await data?.user?.getIdToken(true);
      let idtoken:string = token!;
      localStorage.setItem("idtoken",idtoken)

      const res = await axios
        .get(`${url}/user`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .catch((err: any) => {
          console.log(err);
          setLoading(false);
        });

      console.log(res);
    //   console.log(res?.data?.users?.length);

      if (res?.status===200) {
        navigate("/got")
      } else {
        alert("response not received");
      }
      setLoading(false);
    })();
    }
}, [authenticate]);
    
    const googleAuthentication = async () => {
        let googleProvider = new GoogleAuthProvider();
        
        const res = await signInWithPopup(auth, googleProvider).catch(
            ( err: any ) => {
                console.log(err);
            }
        );
        if(!res) {
            console.log("No response received");
        } else {
            console.log(res)
            setData(res);
            setloggingin(true);
            (authenticate) ? setAuthenticate(false) : setAuthenticate(true);
            setLoading(true);
        }
    };
    return <>
        <div>Google Authentication</div>
        <button onClick={googleAuthentication}>Sign Up</button>
    </>
};

export default Test;
