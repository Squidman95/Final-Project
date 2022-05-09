import React from "react";
import Topbar from "../../Components/Topbar/Topbar";

const Frontpage = () => {
  return (
    <div>
      <h1>Frontpage</h1>
      <Topbar isLoggedIn={true} />
    </div>
  );
};

export default Frontpage;
