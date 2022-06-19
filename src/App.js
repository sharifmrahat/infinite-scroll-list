import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RequireAuth from "./pages/RequireAuth";

function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setUser(userData.login);
  }, [user]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth user={user} setUser={setUser}>
              <Home user={user} setUser={setUser}></Home>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser}></Login>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
