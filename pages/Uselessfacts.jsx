import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiends } from "../globals/apiends";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Loading from "../components/Loading";

const Uselessfacts = () => {
  const [facts, setJoke] = useState("Click the button below..!");
  const [loading, setLoading] = useState(false);

  const fetchexcuse = async () => {
    //fetch joke from api
    setLoading(true);
    await axios
      .get(`${apiends.uselessfact_random}`)
      .then((response) => {
        console.log(response.data);
        setJoke(response.data);
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
      toast("Fact Copied..!", {
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
          Random Useless Facts
        </span>{" "}
        that no one cares about...!{" "}
      </h1>

      <div className="bg-white shadow-lg max-w-6xl mx-auto px-2 py-6 rounded-lg flex flex-col justify-center items-center">
        {loading == true ? (
          <Loading />
        ) : (
          <div className="">
            <div className=" flex flex-col items-center mb-5">
              <h1
                onClick={() => copyText(facts.text ?? "")}
                className="font-semibold  text-lg"
              >
                {facts.text ?? facts}
              </h1>
              <div className=" bg-black h-3"></div>
              <p className="italic font-medium"></p>
              <h3>
                <span>{facts.source_url ? "🔗" : ""} </span>

                <a href={facts.source_url} target="blank">
                  {" "}
                  {facts.source ?? ""}
                </a>
              </h3>
            </div>
          </div>
        )}

        {/* button to get random advice */}
        <button
          onClick={fetchexcuse}
          className="bg-indigo-500 text-white font-semibold uppercase tracking-wide min-w-full md:min-w-fit p-2 md:px-40 rounded-lg shadow-md hover:bg-indigo-800"
        >
          Get Facts
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Uselessfacts;
