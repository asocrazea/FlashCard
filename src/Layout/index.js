import React from "react";
import Header from "./Header";
//import NotFound from "./NotFound";
import View from "./View";
import HomeButton from "./Buttons/HomeButton";
import CreateDeckButton from "./Buttons/CreateDeckButton";
import EditButton from "./Buttons/EditButton";
import Study from "./Buttons/Study";

function Layout() {
  return (
    <>
      <Header />
      <div className="Nav">
        <HomeButton />
        <CreateDeckButton />
        <EditButton />
        <Study />
      </div>

      <div className="container">
        <View />
      </div>
    </>
  );
}
export default Layout;
