import React from "react";
import Header from "./Header";
//import NotFound from "./NotFound";
import View from "./View";
import CreateDeckButton from "./Buttons/CreateDeckButton";

function Layout() {
  return (
    <>
      <Header />

      <div className="Nav"></div>

      <div className="container">
        <View />
      </div>
    </>
  );
}
export default Layout;
