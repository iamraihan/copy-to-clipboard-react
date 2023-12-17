"use client";

import { toast } from "react-toastify";

const toastType = ["info", "success", "warning", "error", "default"];

const toastAlert = (type, toastBody, position, toastId) => {
  if (toastId) toast.dismiss(toastId.current);

  if (toastType?.includes(type)) {
    toast[type](toastBody, {
      position,
      toastId,
    });
  } else {
    toast(toastBody || "Default Toast", {
      position,
      toastId,
    });
  }
};

export default toastAlert;
