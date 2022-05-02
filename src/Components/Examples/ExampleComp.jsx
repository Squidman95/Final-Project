import React, { useEffect, useState } from 'react';
import SearchResult from '../../Pages/SearchResultPage/SearchResultPage';
import FrontPage from '../../Pages/Frontpage/Frontpage'
import Popup from '../Popup/Popup';

const ExampleComponent = (props) => {
    const [visibility, setVisibility] = useState(false); // For the login/signup popup

    return(
        <div>
            <FrontPage />
            <SearchResult/>
            <Popup onClose={setVisibility} show={visibility}/>
        </div>
    );
}

export default ExampleComponent;