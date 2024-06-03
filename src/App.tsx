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
import { setisLoading } from "./redux/slices/isLoadingSlice";

function App() {
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  // const isLoggedIn = useAppSelector(
  //   (state) => state.isLoggedInSlice.isLoggedIn
  // );
  const token = useAppSelector((state) => state.dataSlice.token);

  const data = (token: string | null) => {
    if (token) {
      dispath(setToken(token));
      dispath(setIsLoggedIn(true));
      dispath(setisLoading(true));
      getData(token)
        .then((res) => {
          dispath(setData(res.data.data));
          createToast("success", "Данные успешно получены.");
        })
        .catch((err) =>
          createToast("error", `Произошла ошибка: ${err.message}`)
        )
        .finally(() => {
          dispath(setisLoading(false));
        });
    } else {
      navigate("/sign-in", { replace: true });
    }
  };

  React.useEffect(() => {
    data(localStorage.getItem("token"));
  }, []);

  const handleLogin = (userName: string, password: string) => {
    auth(userName, password)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispath(setIsLoggedIn(true));
        dispath(setToken(res.data.token));
        localStorage.setItem("token", res.data.token);
        navigate("/", { replace: true });
        createToast("success", "Вы успешно залогинились");
        data(res.data.token);
      })
      .catch((err) => {
        createToast("error", `Произошла ошибка: ${err.message}`);
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
