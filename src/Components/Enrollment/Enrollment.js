import React from "react";
import "./Enrollment.css"; // Import your CSS for styling
import qrcode1 from '../Assets/qr1.png';
import qrcode2 from '../Assets/qr2.png';

const Enrollment = () => {
  return (
    <div className="enrollment-container">
      <h2>Now opening</h2>
      <div className="enrollment-header">
        <div className="enrollment-start-date">
          <strong>Starting at</strong> <br />
          Feb 15, 2024
        </div>
        <div className="enrollment-price">
          <strong>Price</strong> <br />
          $150
        </div>
        <div className="enrollment-discount">
          <strong>Early bird discount</strong> <br />
          10% off for register before Feb 05, 2024
        </div>
      </div>
      <div className="enrollment-content">
        {/* Enrollment Form */}
        <div className="enrollment-step step-1">
          <h3>Step 1</h3>
          <h4>Enrollment form</h4>
          <form className="enrollment-form">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="tel" name="phone" placeholder="Phone" />
            <textarea name="note" placeholder="Note"></textarea>
            <button type="submit" className="enroll-button">
              Enroll Now
            </button>
          </form>
        </div>

        {/* Payment Information */}
        <div className="enrollment-step step-2">
          <h3>Step 2</h3>
          <h4>Payment</h4>
          <div className="payment-info">
            <p>Pay via bank</p>
            <ul>
              <li>Account number: 12348765</li>
              <li>Account name: Jose Callion</li>
              <li>Bank name: HSBC Bank Canada</li>
              <li>Bank address: 789 EML Street Vancouver</li>
              <li>SWIFT: BKKBVNVXHAN</li>
            </ul>
            <div className="qr-code">
              <img src={qrcode1} alt="QR code for bank payment" />
            </div>
            <p>Pay via PayPal</p>
            <p>Email: josecallion@gmail.com</p>
            <div className="qr-code">
              <img src={qrcode2} alt="QR code for PayPal payment" />
            </div>
          </div>
        </div>

        {/* Confirmation Information */}
        <div className="enrollment-step step-3">
          <h3>Step 3</h3>
          <h4>Please check our email for enrollment confirmation!</h4>
          <p>
            We will send you an enrollment confirmation and an invitation to our Eduma Community.
          </p>
          <p>
            Join this community and dive into the various discussions, threads, and activities
            happening in the community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
