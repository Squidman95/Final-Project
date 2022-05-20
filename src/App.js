import './App.css';
import BasketPage from './Pages/BasketPage/BasketPage.jsx';
import Frontpage from './Pages/Frontpage/Frontpage.jsx';
import ProductPage from './Pages/ProductPage/ProductPage.jsx';
// import SearchResultPage from './Pages/SearchResultPage/SearchResultPage.jsx';

function App(props) {

  return (
    <div className="App">
      {props.page === "ProductPage" ? <ProductPage /> : null}
      {props.page === "BasketPage" ? <BasketPage/> : null}
      {/* {props.page === "SearchResultPage" ? <SearchResultPage /> : null} */}
      {/* {this.props.page === "LoginPage" ? <PortfolioPage/> : null} */}
      {props.page === "Frontpage" ? <Frontpage/> : null}
    </div>
  );
}

export default App;
