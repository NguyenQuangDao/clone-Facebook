import React from "react";
import "./App.css";
import { Spin } from "antd";
import { Routes, Route } from "react-router-dom";
import { ContextProivider } from "./Context/userContext";
import { useUserContext } from "./Context/userContext";
import PageHome from "./components/PageHome/PageHome";
import PagePosts from "./components/PagePosts/PagePosts";
import PagePersonal from "./components/PagePersonal/PagePersonal";
import PageContact from "./components/PageContact/PageContact";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import Dashboard from "./Admin/Dashboard/Dashboard";
import CameraAdmin from "./Admin/CameraAdmin/CameraAdmin";
function App() {
  const { loading } = useUserContext();
  return (
    <div className="App">
      {loading && <Spin></Spin>}
      <ContextProivider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PageHome />} />
          <Route path="/posts" element={<PagePosts />} />
          <Route path="/Personal" element={<PagePersonal />} />
          <Route path="/contact" element={<PageContact />} />
          {/* Admin */}
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/camera" element={<CameraAdmin />} />
        </Routes>
      </ContextProivider>
    </div>
  );
}

export default App;
