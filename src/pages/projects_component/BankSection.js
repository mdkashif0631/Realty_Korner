import React from 'react';
import './BankSection.css'; // Optional: For styling

const bankLogos = [
  { name: 'SBI', src: "/img/sbi.png"},
  { name: 'HDFC', src: '/img/hdfc.png' },
  { name: 'ICICI', src: '/img/icici.png' },
  { name: 'AXIS', src: '/img/axis.png' },
  { name: 'PNB', src: '/img/pnb.png' },
];

const BankSection = () => {
  return (
    <div className="bank-logo-container">
      {bankLogos.map((bank, index) => (
        <div key={index} className="bank-logo-card">
          <img src={bank.src} alt={bank.name} className="bank-logo-image" />
        </div>
      ))}
    </div>
  );
};

export default BankSection;
