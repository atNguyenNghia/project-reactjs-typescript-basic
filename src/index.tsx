import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import App from "./App";
// import boostrap 
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './css/todolist.css';
import TodoList from './pages/TodoList';
import NewsPage from './pages/NewsApp';
import {WorkList} from './components/TodoList/worklist'

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route path="/todolist"
         element={<TodoList />} />
        <Route path="/itemnews"
        element={<NewsPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
  );
