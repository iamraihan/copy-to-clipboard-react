"use client";

import { ToastContainer } from "react-toastify";

export const GlobalProvider = ({ children }) => {
  return (
    // if its use more provider like redux store provider etc so remove unnecessary react fragment
    <>
      {children}
      <ToastContainer />;
    </>
  );
};
