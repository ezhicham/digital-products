'use client';

import React from 'react';

interface PayeerButtonProps {
  amount: number;
  
}

const PayeerButton: React.FC<PayeerButtonProps> = ({ amount }) => {
  const handlePayment = async () => {
    const response = await fetch('/api/payeer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount, // Use the props value for amount
        currency:"USD", // Use the props value for currency
        description:"pay with Payer", // Use the props value for description
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
    <button className='text-white bg-primary rounded-sm p-2' onClick={handlePayment}>
      Pay with Payeer
    </button>
  );
};

export default PayeerButton;
