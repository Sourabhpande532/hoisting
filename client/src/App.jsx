import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import EditProfile from "./pages/EditProfile";
import { Toaster } from "react-hot-toast";
import Auth from "./pages/Auth";
import PrivateRoute from "./components/PrivateRoute"
import Edit from "./pages/Edit";
import Register from "./pages/Register"

function App() {
  const BASE_URL = "https://hoisting-production.up.railway.app/"
  return (
    <>
      <Toaster
        position='top-right'
        toastOptions={{
          style: {
            fontSize: "1.8rem",
          },
        }}
      />
      <Routes>
        <Route element={<PrivateRoute BASE_URL={BASE_URL}/>}>
          <Route path='/' element={<Home BASE_URL={BASE_URL} />} />
          <Route path='/edit' element={<EditProfile BASE_URL={BASE_URL} />} />
        </Route>
        <Route path='/auth' element={<Auth BASE_URL={BASE_URL}/>} />
        <Route path="/edittask" element={<Edit BASE_URL={BASE_URL}/>}/>
        <Route path="/re" element={<Register BASE_URL={BASE_URL}/>}/>
      </Routes>
    </>
  );
}

export default App;
