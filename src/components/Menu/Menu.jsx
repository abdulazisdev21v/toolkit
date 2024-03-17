import React from "react";
import NavBar from "../NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import "./Menu.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteTodo } from "../../store/slices/todo";

const Menu = () => {
  const dispath = useDispatch();
  const todo = useSelector((state) => state.todo.todo);
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {todo?.map((el, index) => (
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
        ))}
      </div>
    </>
  );
};

export default Menu;
