// import React, { useEffect, useState } from "react";
// import "./AdsBox.css"; // or use styled-components

// const AdsBox = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShow(true);
//       // Hide after 5 seconds
//       setTimeout(() => setShow(false), 20000);
//     }, 15000); // Trigger every 15 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={`slide-box ${show ? "show" : ""}`}>
//       <strong>🎉 Hot Deal!</strong><br />
//       Get 50% OFF for a limited time!
//     </div>
//   );
// };

// export default AdsBox;
