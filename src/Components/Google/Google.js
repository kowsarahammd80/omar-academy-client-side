import React, { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import "./Google.css";
import { GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { saveuserInfo } from "../../api/userinfo";
import useToken from "../../Hooks/Custom-Hook/useToken";

const Google = () => {
  const { googleProvider, setLoading, loading } = useContext(AuthContext);

  const provider = new GoogleAuthProvider();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";


  const [signinEmail,setSigniemail]=useState("")
  const [token]=useToken(signinEmail)
if(token){
  navigate(from, { replace: true });
}
   
  const googleHandle = () => {
    googleProvider(provider)
      .then((result) => {
        const user = result.user;

        setLoading(true);
        if (loading) {
          return <Loading />;
        }
        //get token 
          setSigniemail(user.email)  


        setLoading(false);

        const information = {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          photoURL: user.photoURL,
        };
      ///save  datafase
        saveuserInfo(information);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <button onClick={googleHandle} className="google-button">
        Sign In With Google
      </button>
    </div>
  );
};

export default Google;
