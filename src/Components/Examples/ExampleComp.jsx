import React, { useEffect, useState } from 'react';
import SearchResult from '../../Pages/SearchResultPage/SearchResultPage';
import FrontPage from '../../Pages/Frontpage/Frontpage'

const ExampleComponent = (props) => {
   

    return(
        <div>
            <FrontPage />
            <SearchResult/>
        </div>
    );
}

export default ExampleComponent;