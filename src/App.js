/**
 * 1. I put a new function inside of the useEffect. Because, use a raw async function in the useEffect is a bad idea.
 * 2. I added an export in NumberAndScroll component.It is normal in React for every component to be exported so that it can be used in other parts of the code.
 * 3. Thinking of SEO, a change div to p.
 * 4. I added some styles to make it easier to scroll the page.
 **/

import React, { useState, useEffect } from "react";

//Added styles to make the scroll easier to see.
import "./App.css";

const fetchRandomNumber = () => Promise.resolve(Math.random());

export const NumberAndScroll = () => {
  //Added export
  const [number, setNumber] = useState();
  const [scroll, setScroll] = useState();

  useEffect(() => {
    
    //Added async function
    const fetchData = async () => {
      setNumber(await fetchRandomNumber());
    };

    fetchData();

    window.addEventListener("scroll", () => setScroll(window.scrollY));

    return () =>
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
  }, []);

  return (
    <div className="main-div">
      <p> Number: {number} </p> {/* Changed div to p */}
      <p> Scroll: {scroll} </p>
    </div>
  );
};
