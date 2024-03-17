import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import "./Menu.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTodo } from "../../store/slices/todo";
import Paginate from "../paginate/Paginate";

const Menu = () => {
  const dispath = useDispatch();
  const todo = useSelector((state) => state.todo.todo);

  const [page, setPage] = useState(1)
  const itemPage = 3
  const count = Math.ceil(todo.length / itemPage)

  function currentPage(){
    const next = (page - 1) * itemPage
    const prev = next + itemPage

    return todo.slice(next,prev)
  }


  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {todo? (currentPage().map((el, index) => (
          <div key={index}>
            {
              <div className="menu">
                <div className="menu-text">
                  <img src={el.image} alt="" />
                  <h4>{el.name}</h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h4>{el.price}</h4>
                    <DeleteIcon
                      onClick={() => dispath(deleteTodo(el.id))}
                      sx={{ marginTop: "49px", marginLeft: "20px" }}
                    />
                  </div>
                </div>
              </div>
            }
          </div>
        ))) :(
            <h1>loading</h1>
        )}
      </div>
        <Paginate count={count}  setPage={setPage}/>
    </>
  );
};

export default Menu;
