import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiends } from "../globals/apiends";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Loading from "../components/Loading";

const Word = () => {
  const [word, setJoke] = useState("Click the button below..!");
  const [loading, setLoading] = useState(true);

  const fetchadvice = async () => {
    //fetch joke from api
    setLoading(true);
    await axios
      .get(`${apiends.word_random}`)
      .then((response) => {
        console.log(response.data[0]);
        setJoke(response.data[0]);
        setLoading(false);
        // console.log(advice.joke);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen p-2">
      <h1 className="text-xl font-medium m-5  max-w-6xl mx-auto">
        <span className="text-2xl font-bold text-indigo-500 text-center">
          Random English Word
        </span>{" "}
        with definition and pronunciation...!{" "}
      </h1>

      <div className="bg-white shadow-lg max-w-6xl mx-auto px-2 py-6 rounded-lg flex flex-col justify-center items-center">
        {loading == true ? (
          <Loading />
        ) : (
          <div className="h-40 flex flex-col items-center">
            <h1 className="font-semibold  text-4xl">{word.word ?? word}</h1>
            <div className=" bg-black h-3"></div>
            <p className="italic font-medium">{word.definition ?? ""}</p>
            <h3>
              <span className="animate-bounce">
                {word.pronunciation ? "🔊" : ""}{" "}
              </span>
              {word.pronunciation ?? ""}
            </h3>
          </div>
        )}

        {/* button to get random advice */}
        <button
          onClick={fetchadvice}
          className="bg-indigo-500 text-white font-semibold uppercase tracking-wide min-w-full md:min-w-fit p-2 md:px-40 rounded-lg shadow-md hover:bg-indigo-800"
        >
          new word
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Word;
