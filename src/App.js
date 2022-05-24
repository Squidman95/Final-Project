import './App.scss';
import React, {useEffect, useState} from 'react'
import uuid from 'react-uuid'
import BasketPage from './Pages/BasketPage/BasketPage.jsx';
import Frontpage from './Pages/Frontpage/Frontpage.jsx';
import ProductPage from './Pages/ProductPage/ProductPage.jsx';
import { getBasket, createBasket } from './Service/BasketService';
import Popup from "./Components/Popup/Popup";
import Topbar from "./Components/Topbar/Topbar";
import PaymentPage from './Pages/PaymentPage/PaymentPage';

function App(props) {

    // Primarily for the popup:
    const [userID, setUserID] = useState(null);
    const [visibility, setVisibility] = useState(false);
    const [isLoggedIn, setLogin] = useState(false);

    // Topbar:
    const [topbarText, setTopbarText] = useState("Happy Shopping!");

    useEffect(() => {
      let UID = localStorage.getItem('UserID');
      if(UID === null) {
          UID = uuid();
          localStorage.setItem('UserID', UID);
      }
      setUserID(UID);
    }, []);

    
    const [basket, setBasket] = useState([]);
    useEffect(() => {
      if(userID !== null && userID !== undefined && userID !== 'null') {
        createBasket(userID)
          .then(response => response)
          .then((result) => {
            setBasket(result.items);
          })
          .catch(error => console.log('error', error));
        console.log(userID);
      }
    }, [userID]);

    function updateBasket() {
      getBasket(userID) // something wrong with the userID?
        .then((result) => {
          setBasket(result.items);
        });
    }


    return (
        <div className="App">
            <div className='App-topbar-container'> 
                <Topbar setLogin={setLogin} isLoggedIn={isLoggedIn} setVisibility={setVisibility} visibility={visibility} setTopbarText={setTopbarText} topbarText={topbarText} userID={userID} basket={basket}/>
            </div>
            <div className='App-content-container'>
                {props.page === "ProductPage" ? <ProductPage userID={userID} setVisibility={setVisibility} visibility={visibility} setBasket={setBasket}/> : null}
                {props.page === "BasketPage" ? <BasketPage userID={userID} setVisibility={setVisibility} visibility={visibility} setBasket={setBasket} basket={basket}/> : null}
                {props.page === "PaymentPage" ? <PaymentPage userID={userID} setVisibility={setVisibility} visibility={visibility}/> : null}
                {/* {props.page === "SearchResultPage" ? <SearchResultPage /> : null} */}
                {/* {this.props.page === "LoginPage" ? <PortfolioPage/> : null} */}
                {props.page === "Frontpage" ? <Frontpage userID={userID} setVisibility={setVisibility} visibility={visibility}/> : null}
                <Popup setVisibility={setVisibility} visibility={visibility} userID={userID} setUserID={setUserID} setLogin={setLogin} setTopbarText={setTopbarText} updateBasket={updateBasket} headerText={"Welcome! Log in or sign up to get membership discounts!"}/>
                {/* <Toolbar /> */}
            </div>
        </div>
    );
}

export default App;