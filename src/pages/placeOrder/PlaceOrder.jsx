import React, { useContext } from "react";
import "./PlaceOreder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input className="field-class" type="text" placeholder="First Name" />
          <input className="field-class" type="text" placeholder="Last Name" />
        </div>
        <input
          className="field-class"
          type="email"
          placeholder="Email Adress"
        />
        <input
          className="field-class"
          type="text"
          placeholder="Door.no/Adress/street"
        />
        <div className="multi-fields">
          <input className="field-class" type="text" placeholder="City" />
          <input className="field-class" type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input
            className="field-class"
            type="text"
            maxLength="6"
            placeholder="Zip code"
          />
          <input className="field-class" type="text" placeholder="Country" />
        </div>
        <input className="field-class" type="text" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Crat Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <strong>Total</strong>
              <strong>{getTotalCartAmount() + 2}</strong>
            </div>
          </div>
          <button>Proceed To Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
