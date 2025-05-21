// import React from "react";
// import MyNav from "./component/MyNav";
// import TvShow from "./component/TvShow";
// import MyFooter from "./component/MyFooter";
// import CenterContent from "./component/CenterContent";

// const App = () => {
// return (
//   <>
//     <MyNav />
//     <div className="app-content">
//     <TvShow />
//     <CenterContent/>
// </div>
//     <MyFooter />
//   </>
// );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNav from "./component/MyNav";
import MyFooter from "./component/MyFooter";
import CenterContent from "./component/CenterContent";
import TvShow from "./component/TvShow";
import MovieDetails from "./component/MovieDetails";

const App = () => {
  return (
    <Router>
      <MyNav />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<CenterContent />} />
          <Route path="/tv-shows" element={<TvShow />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        </Routes>
      </div>
      <MyFooter />
    </Router>
  );
};

export default App;