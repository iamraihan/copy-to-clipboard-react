"use client";

import Input from "@/helper/ui/inputs/Input";
import { toastAlert, copyToClipBoard } from "@/utils/index";
import { useRef, useState } from "react";
import { Clipboard, Loader } from "react-feather";

export default function Home() {
  // state
  const [mutationData, setMutationData] = useState({});
  const [applying, setApplying] = useState(false);
  const [passData, setPassData] = useState(false);

  // toast ref
  const toastId = useRef();

  // button disabled
  const IsDisabled = !mutationData.first_name || !mutationData.last_name;
  const handleChange = (type, value) => {
    setMutationData((prevData) => ({ ...prevData, [type]: value })); // to get data previous state current state data
  };

  const handleApply = () => {
    setApplying(true);
    setTimeout(() => {
      setApplying(false);
      setPassData(true); // its look like pass payload to api
      toastAlert(
        "success",
        "Your name added successfully!",
        "top-right",
        toastId
      );
    }, 2000);
  };
  return (
    <div className="max-w-xl mx-auto flex flex-col justify-center h-screen">
      <Input
        placeholderText="Your name"
        onChange={(e) => handleChange("first_name", e.target.value)}
        customClass="mb-2"
      />
      <Input
        placeholderText="Your name"
        onChange={(e) => handleChange("last_name", e.target.value)}
      />
      <div className="w-28 mt-5">
        <button
          className="bg-green-500 rounded-lg px-5 py-3 disabled:bg-gray-200 text-white"
          onClick={handleApply}
          disabled={IsDisabled}
        >
          {applying ? (
            <div className="flex items-center gap-2">
              <span className="animate-spin">
                <Loader />
              </span>
              <span className=""> Saving...</span>
            </div>
          ) : (
            "Save"
          )}
        </button>
      </div>
      {mutationData.first_name && mutationData.last_name && passData ? (
        <div className="flex items-center gap-2 mt-3 ml-2">
          <p className=" text-black text-2xl">
            {mutationData?.first_name || ""}
          </p>
          <p className=" text-black text-2xl">
            {mutationData?.last_name || ""}
          </p>
          <span onClick={() => copyToClipBoard(mutationData.first_name)}>
            <Clipboard className="cursor-pointer " />
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
