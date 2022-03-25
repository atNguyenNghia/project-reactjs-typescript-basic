import React from "react";
import NewsPage from '../../pages/NewsApp'
import {
    Link,
  } from 'react-router-dom';

export  const MainNews = () => {
    return(
        <>  
            <Link to="" className="mb-4 fs-1 text-danger text-decoration-none text-app"> Read news information </Link> {" "}
            <div>
                <NewsPage/>
            </div>
        </>
       
    )
}