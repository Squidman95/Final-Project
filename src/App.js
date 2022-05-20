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

  let UID = localStorage.getItem('UserID');
  if(UID === null) {
    UID = uuid();
    localStorage.setItem('UserID', UID);
  }
  if(userID === null) {
    setUserID(UID);
  }

  useEffect(() => {
    getBasket(userID)
      .catch(err => {
          createBasket(userID)
      });
  }, []);

  return (
    <div className="App">
      <Topbar isLoggedIn={false} setVisibility={setVisibility} visibility={visibility} productsInBasket={0}/>
      {props.page === "ProductPage" ? <ProductPage userId={userID} setVisibility={setVisibility} visibility={visibility}/> : null}
      {props.page === "BasketPage" ? <BasketPage userId={userID} setVisibility={setVisibility} visibility={visibility}/> : null}
      {/* {props.page === "SearchResultPage" ? <SearchResultPage /> : null} */}
      {/* {this.props.page === "LoginPage" ? <PortfolioPage/> : null} */}
      {props.page === "Frontpage" ? <Frontpage userId={userID} setVisibility={setVisibility} visibility={visibility}/> : null}
      <Popup setVisibility={setVisibility} visibility={visibility} />
        {/* <Toolbar /> */}
    </div>
  );
}

export default App;
