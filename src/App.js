import './App.css';
import React, {useEffect, useState} from 'react'
import uuid from 'react-uuid'
import BasketPage from './Pages/BasketPage/BasketPage.jsx';
import Frontpage from './Pages/Frontpage/Frontpage.jsx';
import ProductPage from './Pages/ProductPage/ProductPage.jsx';
import PaymentPage from './Pages/PaymentPage/PaymentPage';
import { getBasket, createBasket } from './Service/BasketService';
import Popup from "./Components/Popup/Popup";
import Topbar from "./Components/Topbar/Topbar";

function App(props) {

    // Primarily for the popup:
    const [userID, setUserID] = useState(null);
    const [visibility, setVisibility] = useState(false);
    const [isLoggedIn, setLogin] = useState(false);

    // Topbar:
    const [topbarText, setTopbarText] = useState("Happy Shopping!");

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

    const productsInBasket = 0;

    return (
        <div className="App">
            <div className='App-topbar-container'> 
                <Topbar setLogin={setLogin} isLoggedIn={isLoggedIn} setVisibility={setVisibility} visibility={visibility} setTopbarText={setTopbarText} topbarText={topbarText} userID={userID} basketCount={productsInBasket}/>
            </div>
            <div className='App-content-container'>
                {props.page === "ProductPage" ? <ProductPage userId={userID} setVisibility={setVisibility} visibility={visibility}/> : null}
                {props.page === "BasketPage" ? <BasketPage userId={userID} setVisibility={setVisibility} visibility={visibility}/> : null}
                {props.page === "PaymentPage" ? <PaymentPage userId={userID} setVisibility={setVisibility} visibility={visibility}/> : null}
                {/* {props.page === "SearchResultPage" ? <SearchResultPage /> : null} */}
                {/* {this.props.page === "LoginPage" ? <PortfolioPage/> : null} */}
                {props.page === "Frontpage" ? <Frontpage userId={userID} setVisibility={setVisibility} visibility={visibility}/> : null}
                <Popup setVisibility={setVisibility} visibility={visibility} userID={userID} setUserID={setUserID} setLogin={setLogin} setTopbarText={setTopbarText} headerText={"Welcome! Log in or sign up to get membership discounts!"}/>
                {/* <Toolbar /> */}
            </div>
        </div>
    );
}

export default App;