import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline, GeistProvider, Input, Button } from "@geist-ui/react";

function App() {
    const [todos, setTodos] = React.useState([
        {
            text: "test",
            isDone: false
        },
        {
            text: "test2",
            isDone: false
        },
        {
            text: "test3",
            isDone: false
        }
    ]);
    const addtodo = (text) => {
        // by default new todo will be false done
        const newTodos = [ ...todos, { text, isDone: false } ];
        setTodos(newTodos);
        setInputTodo("");
    }; 
    const marktodo = (index) => {
        const newTodos = todos.find((todo, i) => i === index);
        
        newTodos.isDone = true; 
    }

    const [inputTodo, setInputTodo] = React.useState("");
    return (
        <>
            <Input placeholder="What's on your mind?" onChange={(e) => setInputTodo(e.target.value)} value={inputTodo}>
            
            </Input>
            <Button onClick={() => addtodo(inputTodo)} >Add Todo</Button>
            { todos.map(todo => <p>{todo.text}</p>) }
        </>
    ); 
}

ReactDOM.render(
  <GeistProvider>
    <CssBaseline />
    <App />
  </GeistProvider>,
  document.getElementById("root")
); 