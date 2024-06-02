import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Main } from "./components/Main";
import { auth, getData } from "./utils/MainApi";
import { setData, setToken } from "./redux/slices/dataSlice";
import { setIsLoggedIn } from "./redux/slices/isLoggedInSlice";
import { useAppDispatch, useAppSelector } from "./redux/srore";
import NotificationContainer from "./components/NotificationContainer";
import createToast from "./hooks/createToast";
createToast

function App() {

  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const isLoggedIn = useAppSelector(
    (state) => state.isLoggedInSlice.isLoggedIn
  );
  const token = useAppSelector(
    (state) => state.dataSlice.token
  );

  React.useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispath(setToken(token));
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
  }, [dispath, isLoggedIn]);

  const handleLogin = (userName: string, password: string) => {
    console.log(userName, password);

    auth(userName, password)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res.data.token);
        dispath(setIsLoggedIn(true));
        dispath(setToken(res.data.token))
        localStorage.setItem("token", res.data.token);
        navigate("/", { replace: true });
        createToast("success", "Вы успешно залогинилось")
      })
      .catch((err) => {
        createToast("error", `Произошла ошибка: ${err.message}`)
        console.log(err)
      
      });
  };

  return (
    <>
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
      <NotificationContainer />
    </>
  );
}

export default App;
