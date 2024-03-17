import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "../page/ProductPage";
import Admin from "../components/admin/Admin";
import Menu from "../components/Menu/Menu";

const MainRoutes = () => {
  const TODO = [
    { path: "/", elment:<ProductPage/>  },
    { path: "/admin", elment:<Admin/>  },
    { path: "/menu", elment:<Menu/> }


  ];

  return (
      <Routes>
        {TODO.map((el, ind) => (
          <Route  path={el.path} element={el.elment} key={ind} />
        ))}
      </Routes>
  );
};

export default MainRoutes;
