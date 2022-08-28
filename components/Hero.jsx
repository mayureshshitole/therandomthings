import React from "react";
import Link from "next/link";
const Hero = () => {
  let things = [
    {
      id: "2",
      name: "Advice",
      link: "/Advice",
      desc: "Feeling low? Take guidance or recommendations offered with regard to prudent future action.😉",
    },
    {
      id: "3",
      name: "Facts",
      link: "/Uselessfacts",
      desc: "Facts that can make you wowwhh..!! Random interesting facts.😮",
    },
    {
      id: "4",
      name: "Excuses",
      link: "/Excuses",
      desc: "Thinking an excuse to avoid boring party, office, tution and many more situations...!🔥",
    },
    {
      id: "5",
      name: "Word",
      link: "/Word",
      desc: "Learn some heavy English words and lex in your gang by using it..!🤪",
    },
    { id: "1", name: "Jokes", link: "/Jokes", desc: "Coming Soon..!⌚" },
  ];
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl md:max-w-6xl mx-auto flex flex-col justify-center items-center">
        <div className="mt-16 md:mt-40  w-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Get some{" "}
            <span className="text-indigo-600 font-bold">
              Random sh*ts bruhh😎..!
            </span>
          </h1>
          <p className="mt-10 md:mt-16 px-3 md:max-w-4xl mx auto text-center md:tracking-wide md:text-lg ">
            This portal is all about Random{" "}
            <span className="text-indigo-600">
              jokes, excuses, facts, motivational quotes, advices, anti-boredom
              activities n so on..!{" "}
            </span>
            <span className="text-indigo-600">
              Just click on what you want, get that random thing, share with
              your friends n thats it..
            </span>
            who knows what will pop up on your screen randomly and may be it
            will impact on you🤷‍♂️..
          </p>
        </div>
      </div>
      <div className="h-20 md:h-36"></div>
      <div>
        <p className="text-center font-semibold text-xl first-letter:text-indigo-500 first-letter:text-3xl italic py-4">
          Get the <span className="text-indigo-500 text-3xl">Random</span>...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl md:max-w-6xl mx-auto">
          {things.map((item) => {
            return (
              <div key={item.id}>
                <Link href={`${item.link}`} passHref>
                  <div className="flex flex-col h-40 p-5 justify-center items-center text-center shadow-md shadow-amber-600  bg-white rounded-lg">
                    <div className=" text-indigo-600  text-2xl font-bold ">
                      <h2>{item.name}</h2>
                    </div>
                    <p className="p-2">{item.desc}</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
