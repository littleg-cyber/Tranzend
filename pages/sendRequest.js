import React from 'react';
import InputAmount from '../components/SendRequest'; // Update the path based on your file structure

const SendRequestPage = () => {
  // Function to handle the next step after getting the amount
  const handleNextStep = () => {
    // Perform actions for the next step here, e.g., proceed to the next page or process the amount
    // Further actions...
  };

  return (
    <div
      className=" send-request-page text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <div className="send-request-title">
        <h1>Send or Request</h1>
      </div>
      <div>
        <InputAmount onNext={handleNextStep} />
      </div>
    </div>
  );
};

export default SendRequestPage;
