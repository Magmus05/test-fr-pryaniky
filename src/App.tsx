import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Main } from "./components/Main";
import { auth, getData } from "./utils/MainApi";
import { setData } from "./redux/slices/dataSlice";
import { setIsLoggedIn } from "./redux/slices/isLoggedInSlice";
import { useAppDispatch, useAppSelector } from "./redux/srore";

function App() {
  const [token, setToken] = React.useState<string | null>("");
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const isLoggedIn = useAppSelector(
    (state) => state.isLoggedInSlice.isLoggedIn
  );

  React.useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setToken(token);
      dispath(setIsLoggedIn(true));

      getData(token)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          dispath(setData(res.data));
        })
        .catch((err) => console.log(err))
        .finally(() => {
          // setLoading(false);
        });
    }
  }, [isLoggedIn]);

  const handleLogin = (userName: string, password: string) => {
    console.log(userName, password);

    auth(userName, password)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.data.token);
        dispath(setIsLoggedIn(true));
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={token && <ProtectedRoute element={<Main />} />}
      />

      <Route
        path="/sign-in"
        element={<LoginPage handleLogin={handleLogin} />}
      />
    </Routes>
  );
}

export default App;
