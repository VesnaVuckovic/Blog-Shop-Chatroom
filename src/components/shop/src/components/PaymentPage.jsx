import React from 'react';
import { useLocation } from 'react-router-dom';


const PaymentPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const total = searchParams.get('total');

  return (
    <div className="payment-page">
      <div className="payment-header">
        <h2>Payment</h2>
      </div>
      <div className="payment-body">        
        <div className="payment-form">
          <h3>Payment Details</h3>
          <form>
            <label>Name on Card</label>
            <input type="text" />

            <label>Card Number</label>
            <input type="text" />

            <label>Expiration Date</label>
            <input type="text" placeholder="MM/YY" />

            <label>CVV</label>
            <input type="text" />

            <button type="submit">Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
