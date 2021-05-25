import React, { useState } from "react";
import './App.css';
// Importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
const [inputText, setInputText] = useState(""); 
const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>To Do App</h1>
      </header>
      <Form setInputText={setInputText}todos={todos} setTodos={setTodos} inputText={inputText} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
