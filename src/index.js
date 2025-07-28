import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
// import Server from "./Server";
// import Testing_ from "./Testing_";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Server/> */}
    <App/>
    {/* <Testing_/> */}
  </React.StrictMode>
);

