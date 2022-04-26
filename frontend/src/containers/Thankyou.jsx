import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../reducks/users/selectors";

const OrderConfirmation = () => {
  const selector = useSelector((state) => state);
  const user = JSON.parse(localStorage.getItem("LOGIN_USER_KEY"));
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <div> 
      <div class="heading">
        <h4>- Thank you for your ordering -</h4>
      </div>

      <div class="note">
        <p>
          Thank you for your ordering{" "}
          <span class="color">{user.user_name}</span>. We received your request.{" "}
          <br />
          <br />
          Our staff will be contacting with you to tell next steps.
        </p>
      </div>

      <div >
        <a href="/">
          <button class="btn3">Back to Home</button>
        </a>
      </div>
    </div>
  );
};

export default OrderConfirmation;
