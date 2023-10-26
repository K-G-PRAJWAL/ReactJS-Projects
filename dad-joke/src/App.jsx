import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "./App.css";



function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://icanhazdadjoke.com/", {
          headers: {
            Accept: "application/json",
          },
        });
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
const shareOnTwitter = () => {
  const textToShare = data.joke;
const encodedText = encodeURIComponent(textToShare)
const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedText}`;
window.open(twitterUrl, "_blank");
}
  return (
    <>
      <div className="container">
        <h1>{data.joke}</h1>
        <div className="btn-container">
        <button onClick={() => window.location.reload(true)}>Next</button>
        <button className="twitter" onClick={shareOnTwitter}>Tweet</button>
        </div>
      </div>
    </>
  );
}

export default App;
