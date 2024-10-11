import React, { useState } from 'react';

const PaymentList = ({ initialPayments }) => {
  const [payments, setPayments] = useState(initialPayments);

  const markAsPaid = (index) => {
    console.log('Button clicked for payment:', index);
    const updatedPayments = [...payments];
    updatedPayments[index].status = 'Paid';
    setPayments(updatedPayments);
  };

  return (
    <div className="mt-4 me-5">
      <h3>Payment Tracking</h3>
      <ul className="list-group">
        {payments.map((payment, index) => (
          <li key={`payment-${index}`} className="list-group-item p-3">
            {payment.amount} - Status: {payment.status}
            {payment.status !== 'Paid' && (
              <button
                className="btn btn-sm btn-success ms-3"
                onClick={() => markAsPaid(index)}
              >
                Mark as Paid
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentList;
