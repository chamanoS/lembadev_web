import React, { useState, useEffect } from "react";
import "./humor.css";

const jokes = [
  {
    type: "motivation",
    text: "Believe you can and you're halfway there."
  },
  {
    type: "humor",
    text: "I told my wife she was drawing her eyebrows too high. She looked surprised."
  },
  {
    type: "motivation",
    text: "It does not matter how slowly you go as long as you do not stop."
  },
  {
    type: "humor",
    text: "I'm reading a book about anti-gravity. It's impossible to put down."
  },
  {
    type: "motivation",
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts."
  },
  {
    type: "humor",
    text: "Why don't scientists trust atoms? Because they make up everything."
  }
];

export const Humor = () => {
  const [currentJoke, setCurrentJoke] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const filteredJokes = jokes.filter((joke) => joke.type === "motivation");
      const randomIndex = Math.floor(Math.random() * filteredJokes.length);
      setCurrentJoke(filteredJokes[randomIndex]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="containex">
      {currentJoke ? (
        <div className={`joke ${currentJoke.type}`}>
          <p>{currentJoke.text}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
}
