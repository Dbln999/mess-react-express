import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import { MessagePage } from "./pages/MessagePage";

export const useRoutes = () => {
  return (
    <Routes>
      <Route
        path="/register"
        exact
        element={<RegisterPage></RegisterPage>}
      ></Route>
      <Route
        path="/messages"
        exact
        element={<MessagePage></MessagePage>}
      ></Route>
        <Route
            path="*"
            exact
            element={<MessagePage></MessagePage>}
        ></Route>
    </Routes>
  );
};
