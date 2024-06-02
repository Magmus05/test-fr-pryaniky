import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { IsLoggedInContext } from "../context/IsLoggedInContext";
import { useForm, SubmitHandler } from "react-hook-form";


const defaultTheme = createTheme();
type LoginProp = {
  handleLogin: (userName: string, password: string) => void;
};

type InputsFormType = {
  userName: string;
  password: string;
};

export const LoginPage: React.FC<LoginProp> = ({ handleLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<InputsFormType>({ mode: "onChange" });

  const onSubmit: SubmitHandler<InputsFormType> = (data) => {
    console.log(data.userName, data.password);
    handleLogin(data.userName, data.password);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Войти
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              {...register("userName", {
                required: "Поле UserName обязательно",
                minLength: {
                  value: 2,
                  message: "Имя должено быть больше 2 букв",
                },
              })}
              fullWidth
              id="userName"
              label="UserName"
              name="userName"
              autoComplete="userName"
              autoFocus
              error={!!errors.userName}
              helperText={errors.userName ? `${errors.userName?.message}` : ""}
            />

            <TextField
              margin="normal"
              {...register("password", {
                required: "Поле Password обязательно",
                minLength: {
                  value: 4,
                  message: "Пароль должен быть больше 4 символов",
                },
              })}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!!errors.password}
              helperText={errors.password ? `${errors.password?.message}` : ""}
              color={errors.password ? "success" : "primary"}
            />

            <Button
              type="submit"
              disabled={!isValid}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
