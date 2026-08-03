import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Home/Homepage";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Bookmarks from "./pages/Bookmarks/Bookmarks";
import LogIn from "./pages/LogIn/LogIn";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
// TODO linking the movies to its own page and showing the information there 2. showing the series page 3.fixing the sidebar 4.Implementing the bookmark page 5.Implementing the logIn page and a login dommy
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<Series />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
