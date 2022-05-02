import React, { useEffect, useState } from 'react';
import SearchResult from '../../Pages/SearchResultPage/SearchResultPage';
import FrontPage from '../../Pages/Frontpage/Frontpage'
import Popup from '../Popup/Popup';

const ExampleComponent = (props) => {
// Popup code
    const [visibility, setVisibility] = useState(false);
    const popupCloseHandler = (e) => {
        setVisibility(e);
    };
// Popup end

    return(
        <div>
            <FrontPage />
            <SearchResult/>
            <Popup
                onClose={popupCloseHandler}
                show={visibility}
                title="Log in to get membership discounts!"
                >
            </Popup>
        </div>
    );
}

export default ExampleComponent;