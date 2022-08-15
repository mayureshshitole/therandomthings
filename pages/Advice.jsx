import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiends } from "../globals/apiends";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Loading from "../components/Loading";

const Advice = () => {
  const [advices, setJoke] = useState("Click the button below..!");
  const [loading, setLoading] = useState(false);

  const fetchadvice = async () => {
    //fetch joke from api
    setLoading(true);
    await axios
      .get(`${apiends.advice_random}`)
      .then((response) => {
        console.log(response.data);
        setJoke(response.data.slip);
        setLoading(false);
        // console.log(advice.joke);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const copyText = (copytext) => {
    console.log("inside copy text");
    try {
      navigator.clipboard.writeText(copytext);
      toast("Advice Copied..!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen p-2">
      <h1 className="text-xl font-medium m-5  max-w-6xl mx-auto">
        <span className="text-2xl font-bold text-indigo-500 text-center">
          Random Advices
        </span>{" "}
        to When you need it...!{" "}
      </h1>

      <div className="bg-white shadow-lg max-w-6xl mx-auto px-2 py-6 rounded-lg flex flex-col justify-center items-center">
        {loading == true ? (
          <Loading />
        ) : (
          <div onClick={() => copyText(advices.advice ?? "")} className="h-40">
            <h1 className="font-medium text-lg cursor-copy">
              {advices.advice ?? advices}
            </h1>
          </div>
        )}

        {/* button to get random advice */}
        <button
          onClick={fetchadvice}
          className="bg-indigo-500 text-white font-semibold uppercase tracking-wide min-w-full md:min-w-fit p-2 md:px-40 rounded-lg shadow-md hover:bg-indigo-800"
        >
          Get Advice
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Advice;
