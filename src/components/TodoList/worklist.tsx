import React from "react";
import TodoList from '../../pages/TodoList'
import {
    Link,
    Outlet,
  } from 'react-router-dom';

export  const WorkList = () => {
    return(
        <>  
            <Link to="" className="mb-4 fs-1 text-danger   text-decoration-none text-app">Todo  List App </Link> {" "}
            
            {/* <Outlet  key={1}/> */}
            <TodoList/>
        </>
       
    )
}