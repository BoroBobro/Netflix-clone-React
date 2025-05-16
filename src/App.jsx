import React from "react";
import MyNav from "./component/MyNav";
import TvShow from "./component/TvShow";
import MyFooter from "./component/MyFooter";
import CenterContent from "./component/CenterContent";

const App = () => {
return (
  <>
    <MyNav />
    <div className="app-content">
    <TvShow />
    <CenterContent/>
</div>
    <MyFooter />
  </>
);
};

export default App;