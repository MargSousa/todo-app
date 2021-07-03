import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import List from './components/List';
import Completed from './components/Completed';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const data = [
  {
    id: 0,
    task: 'Oranges',
    completed: false
  },
  {
    id: 1,
    task: 'Pizza',
    completed: false
  },
  {
    id: 2,
    task: 'Cookies',
    completed: false
  },
  {
    id: 3,
    task: 'Apples',
    completed: true
  },
  {
    id: 4,
    task: 'Nachos',
    completed: true
  },
]

function App() {

  const [list, setList] = useState([]);

  const activeItems = list.filter(item => item.completed === false );
  const completedItems = list.filter(item => item.completed === true);

  useEffect(() => {
    const localList = JSON.parse(localStorage.getItem("list"));
    if(localList.length > 0) {
      setList(localList);
    } else {
      setList(data);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list])

  const addNewItem = (item) => {
    const newItem = {
      id: uuidv4(),
      task: item,
      completed: false
    };

    setList([...list, newItem])
  }

  const handleDeleteItem = (id) => {
    const filteredData = list.filter(item => item.id.toString() !== id);
    setList(filteredData);
  }

  const handleDeleteAll = () => {
    const cleanData = list.filter(item => item.completed === false);
    setList(cleanData);
  }

  const updateList = (event) => {
    const updatedList = list.map(item => {
      if (item.id.toString() === event.target.id) {
        if (event.target.checked)  {
          item.completed = true
        } else {
          item.completed = false
        }
      }
      return item
    })
    setList(updatedList);
  }

  return (
    <Router>
      <div className="App">
        <div className="main-title">#todo</div>
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/">
          <List data={list} type="all" addNewItem={addNewItem} updateList={updateList} />
        </Route>
        <Route exact path="/active">
          <List data={activeItems} type="active" addNewItem={addNewItem} updateList={updateList} />
        </Route>
        <Route exact path="/completed">
          <Completed data={completedItems} type="completed" deleteItem={handleDeleteItem} updateList={updateList} deleteAll={handleDeleteAll} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
