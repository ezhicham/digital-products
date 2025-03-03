'use client';

import React from 'react';

const PayeerButton: React.FC = () => {
  const handlePayment = async () => {
    const response = await fetch('/api/payeer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 10, // Amount in your currency's smallest unit
        currency: 'USD',
        description: 'Test Payment',
      }),
    });

    const data = await response.json();
    if (data.paymentUrl) {
      window.location.href = data.paymentUrl;
    } else {
      console.error('Payment initiation failed');
    }
  };

  return (
    <button onClick={handlePayment}>
      Pay with Payeer
    </button>
  );
};

export default PayeerButton;
