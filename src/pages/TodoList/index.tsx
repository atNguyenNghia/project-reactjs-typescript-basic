import React, { Component, useEffect, useState } from 'react';
import { type } from 'os';
import { stringify } from 'querystring';

const getLocalItmes = () => {
  let list = localStorage.getItem('lists');
  console.log(list);
  if (list) {
      return JSON.parse(`${list}`);
  } else {
      return [];
  }
}

const ToDoList = () => {

  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState(getLocalItmes());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
      if (!inputData) {
          alert('Please fill data!');
      } else if(inputData && !toggleSubmit) {
          setItems(
              items.map((elem:any) => {
                  if (elem.id === isEditItem) {
                      return { ...elem, name: inputData }
                  }
                  return elem;
              })
          )
               setToggleSubmit(true);
               setInputData('');
               setIsEditItem(null);
      } else {
          const allInputData = { id: new Date().getTime().toString(), name:inputData }
          setItems([...items, allInputData]);
          setInputData('')
      }
  }

  
  // delete the items
  const deleteItem = (index:any) => {
      const updateditems = items.filter((elem:any) => {
          return index !== elem.id;
      });

      setItems(updateditems);
  }

  
  const editItem = (id:any) => {
      let newEditItem = items.find((elem:any) => {
          return elem.id === id
      });
      console.log(newEditItem);
      setToggleSubmit(false);
      setInputData(newEditItem.name);
      setIsEditItem(id);

  }
  

  // remove all 
  const removeAll = () => {
       setItems([]);
  }

  // add data to localStorage
  useEffect(() => {
     localStorage.setItem('lists', JSON.stringify(items))
  }, [items]);

  return (
      <>
          <div className="main-div">
              <div className="child-div">
                  <div className="addItems">
                      <input type="text" placeholder="✍ Add Items..."
                      className='form-control'
                         value={inputData} 
                         onChange={(e) => setInputData(e.target.value) }
                      />
                      {
                          toggleSubmit ? <i title="Add Item" onClick={addItem} className='btn btn-outline-danger'> Add</i> :
                               <i onClick={addItem} className="btn btn-outline-danger"> Update</i>
                      }
                     
                  </div>

                  <div className="showItems">
                      
                      {
                          items.map((elem:any) => {
                              return (
                                  <div className="eachItem" key={elem.id}>
                                      <h3>{elem.name}</h3>
                                      <div className="todo-btn">
                                          <i className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)}>edit</i>
                                          <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)}>delete</i>
                                      </div>
                                </div>
                              )
                          })
                      }
                     
                  </div>
              
                  {/* clear all button  */}
                  <div className="showItems">
                      <button className="btn effect04 text-light" data-sm-link-text="Remove All" onClick={removeAll}> <span> CHECK LIST </span> </button>
                  </div>
              </div>
        </div>  
      </>
  )
}

export default ToDoList