import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiends } from "../globals/apiends";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Loading from "../components/Loading";

const Jokes = () => {
  const [jokes, setJoke] = useState("Making a jokes database, Stay tuned..!");
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [loading, setLoading] = useState(false);

  
  const fetchJoke = async () => {
    //fetch joke from api
    setLoading(true);
    await axios
      .get(
        `${apiends.jokes_api_random}firstName=${
          firstname ?? "Johny"
        }&lastName=${lastname ?? "Sins"}`
      )
      .then((response) => {
        console.log(response.data);
        setJoke(response.data.value);
        setLoading(false);
        // console.log(jokes.joke);
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
      toast("Joke Copied..!", {
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
    <>
      <div className="min-h-screen p-2">
        <h1 className="text-xl font-medium m-5  max-w-6xl mx-auto">
          <span className="text-2xl font-bold text-indigo-500 text-center">
            Random Jokes
          </span>{" "}
          to lighten up your mood 😁 or make it more worst 🤪...!{" "}
          <span className="text-base font-light">
            (if you think it is trash)
          </span>{" "}
        </h1>

        <div className="bg-white shadow-lg max-w-6xl mx-auto px-2 py-6 rounded-lg flex flex-col justify-center items-center">
          {loading == true ? (
           <Loading />
          ) : (
            <div onClick={() => copyText(jokes.joke)} className="h-40">
              <h1 className="font-medium text-lg cursor-copy">
                {jokes.joke ?? jokes}
              </h1>
            </div>
          )}

          {/* button to get random joke */}
          <button
            
            className="bg-indigo-500 text-white font-semibold uppercase tracking-wide min-w-full md:min-w-fit p-2 md:px-40 m-5 rounded-lg shadow-md hover:bg-indigo-800"
          >
            {" "}
            Get Joke
          </button>
        </div>

        <ToastContainer />
      </div>
    </>
  );
};

export default Jokes;
