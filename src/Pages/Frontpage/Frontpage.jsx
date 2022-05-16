import React from "react";
import Topbar from "../../Components/Topbar/Topbar";

const Frontpage = () => {
  return (
    <div>
      <h1>Frontpage</h1>
      <Topbar isLoggedIn={false} />
    </div>
  );
};

export default Frontpage;
