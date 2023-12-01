import React from 'react';
import InputAmount from '../components/SendRequest'; // Update the path based on your file structure

const SendRequestPage = () => {
  // Function to handle the next step after getting the amount
  const handleNextStep = (amount) => {
    // Perform actions for the next step here, e.g., proceed to the next page or process the amount
    console.log('Amount received in SendRequestPage:', amount);
    // Further actions...
  };

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {/* Other components or layout */}
      <h1>Send or Request</h1>
      <InputAmount onNext={handleNextStep} />
      {/* Other components or layout */}
    </div>
  );
};

export default SendRequestPage;
