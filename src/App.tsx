import React from 'react';

// phân trang web thành 3 component chính
//  Header , Main , Footer 
import {
  Link,
  Outlet,
} from 'react-router-dom';
import { Footer } from './components/Footer/footer';
import {Header} from './components/Header/header'
import { Main } from './components/Main/main';


function App() {
  return (
      <div className="App">
          <>
            <Header/>
            <Main/>
            <Footer />
          </>
      </div>

  );
}

export default App;
