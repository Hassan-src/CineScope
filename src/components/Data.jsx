import { useEffect } from "react";

const KEY = "6d8be6f5";
function Data() {
  useEffect(function () {
    async function fetchMovie() {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}`,
        );
        const data = await response.json();
      } catch {}
    }
  }, []);
  return <div></div>;
}

export default Data;
//
