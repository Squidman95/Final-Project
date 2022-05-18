import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import { getAllProducts } from '../../Service/ProductService';
    
const Frontpage = () => {

  getAllProducts().then(function(products) {
    console.log(products);
  });

  return (
    <div>
      <h1>Frontpage</h1>
      <Topbar isLoggedIn={true} />
    </div>
  );
};

export default Frontpage;
