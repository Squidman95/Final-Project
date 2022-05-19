// import React from "react";
import React, { useEffect, useState } from 'react';
import Topbar from "../../Components/Topbar/Topbar";
import { getAllProducts } from '../../Service/ProductService';
import Popup from '../../Components/Popup/Popup';    
import SearchResult from '../../Pages/SearchResultPage/SearchResultPage';    


const Frontpage = () => {
  const [visibility, setVisibility] = useState(false); // For the login/signup popup

  getAllProducts().then(function(products) {
    console.log(products);
  });

  return (
    <div>
      <h1>Frontpage</h1>
      <SearchResult/>
      <Topbar isLoggedIn={true} />
      {/* <Popup onClose={setVisibility} show={visibility}/>  */}
    </div>
  );
};

export default Frontpage;
