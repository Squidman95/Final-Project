import './App.css';
import React, {useEffect, useState} from 'react'
import uuid from 'react-uuid'
import BasketPage from './Pages/BasketPage/BasketPage.jsx';
import Frontpage from './Pages/Frontpage/Frontpage.jsx';
import ProductPage from './Pages/ProductPage/ProductPage.jsx';
import { getBasket, createBasket } from './Service/BasketServices';
import Popup from "./Components/Popup/Popup";
import Topbar from "./Components/Topbar/Topbar";
// import SearchResultPage from './Pages/SearchResultPage/SearchResultPage.jsx';

var userID = 1;
const UserContext = React.createContext(1);
function App(props) {

  const [userID, setUserID] = useState(null);
  const [visibility, setVisibility] = useState(false);


  if(userID === null) {
    setUserID(uuid());
  }

  useEffect(() => {
    getBasket(userID)
      .catch(err => {
          createBasket(userID)
      });
  }, []);

  return (
      <div className="App">
        <Popup setVisibility={setVisibility} show={visibility} />
        <Topbar isLoggedIn={false} userId={userID} setVisibility={setVisibility} show={visibility} />
        {props.page === "ProductPage" ? <ProductPage userId={userID} visibility={setVisibility} show={visibility}/> : null}
        {props.page === "BasketPage" ? <BasketPage userId={userID} visibility={setVisibility} show={visibility}/> : null}
        {/* {props.page === "SearchResultPage" ? <SearchResultPage /> : null} */}
        {/* {this.props.page === "LoginPage" ? <PortfolioPage/> : null} */}
        {props.page === "Frontpage" ? <Frontpage userId={userID} visibility={setVisibility} show={visibility}/> : null}
        
          {/* <Toolbar /> */}
      </div>
  );
}

export default App;
