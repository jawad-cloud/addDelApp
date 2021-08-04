import React, { useEffect } from "react";
const Alert = ({ type, msg, showAlert }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      showAlert();
    }, 2000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
      <p className={`alert alert-${type}`}>{msg}</p>
    </>
  );
};
export default Alert;
