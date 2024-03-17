import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/slices/todo";
import "./Admin.css";
import { Link } from "@mui/material";
import NavBar from "../NavBar/NavBar";

function Admin() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);
  const [inputValue, setInputValue] = useState({
    name: "",
    price: "",
    image: "",
  });

  function addTask() {
    dispatch(
      addTodo({
        ...inputValue,
        id: Date.now(),
      })
    );
  }
  return (
    <>
      <NavBar />
      <div className="block">
        <div className="blocks">
          <h3>Todo</h3>
          <div className="card">
            <input
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.target.value })
              }
              type="text"
              placeholder="name"
            />
            <input
              onChange={(e) =>
                setInputValue({ ...inputValue, price: e.target.value })
              }
              type="text"
              placeholder="price"
            />
            <input
              onChange={(e) =>
                setInputValue({ ...inputValue, image: e.target.value })
              }
              type="text"
              placeholder="image"
            />
            <Link to="/">
              <button onClick={addTask}>create</button>
            </Link>
       
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
