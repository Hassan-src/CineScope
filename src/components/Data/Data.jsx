import { useEffect } from "react";
import { API_BASE_URL, API_OPTIONS } from "../../services/api";
function Data() {
  useEffect(function () {
    async function fetchMovie() {
      const response = await fetch(
        `${API_BASE_URL}/trending/movie/week`,
        API_OPTIONS,
      );
      const data = await response.json();
      console.log(data);
    }
    fetchMovie();
  }, []);
  return <div></div>;
}

export default Data;
//
