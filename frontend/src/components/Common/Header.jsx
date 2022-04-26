import React, { useEffect, useState } from "react";
import CartLogo from "../../assets/img/cart.png";
import Imageicon from "../../assets/img/icon.png";
import { signOut } from "../../reducks/users/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

export default function Header() {
  const dispatch = useDispatch();
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const [checkUser, setCheckUser] = useState(false);

  const signOutButton = () => {
    dispatch(signOut());
    setCheckUser(false);
    dispatch(push("/signin"));
  };

  useEffect(() => {
    if (key != null) {
      setCheckUser(true);
    }
  }, [key]);

  return (
    <section class="nav">
      <div class="navbar">
      <h3>ShoeDen  
        <img src={Imageicon}/>

        </h3>
        <div class="signin">
        
              {checkUser ? (
                <span class="logout" onClick={signOutButton}>
                  Logout
                </span>
              ) : (
                <a href="/Signin" class="sign">
                  Sign in
                </a>
              )}
              {checkUser && (
                <a href="/cart" >
                  <img src={CartLogo} alt="" />
                </a>
              )}
            
        </div>
      </div>
    </section>
  );
}
