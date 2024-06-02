import React from "react";
import Box from "@mui/material/Box";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { setOpenModal } from "../redux/slices/openModalSlice";
import { useAppDispatch, useAppSelector } from "../redux/srore";

import { setAddItemData } from "../redux/slices/dataSlice";
import { addData } from "../utils/MainApi";
import createToast from "../hooks/createToast";

type InputsFormType = {
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSignatureName: string;
  employeeSigDate: string;
};

export const FormForAddItem: React.FC = () => {
  const dispath = useAppDispatch();

  const token = useAppSelector(
    (state) => state.dataSlice.token
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<InputsFormType>({ mode: "onChange" });

  const onSubmit: SubmitHandler<InputsFormType> = (newItem) => {
    dispath(setOpenModal(false));
    const date = new Date();
    newItem.companySigDate = date.toISOString();
    newItem.employeeSigDate = date.toISOString();

    addData({ token: token, data: newItem })
      ?.then((res) => {
        return res.json();
      })
      .then((obj) => {
        console.log(obj);
				dispath(setAddItemData(obj.data))
        createToast("success", "Документ успешно добавлен");
      })
      .catch((err) => {
        createToast("error", "Произошла ошибка")
        console.log(err);
      });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Добавить документ
      </Typography>

      <TextField
        // InputProps={{
        //   sx: {
        //     input: {
        //       padding: "5px 14px",
        //     },
        //   },
        // }}
        // InputLabelProps={{
        //   sx: {
        //     transform: "translate(14px, 5px) scale(1)", // задаем свой отступ
        //   },
        // }}

        size="small"
        margin="normal"
        {...register("companySignatureName", {
          required: "Поле companySignatureName обязательно",
          minLength: {
            value: 2,
            message: "Имя должено быть больше 2 букв",
          },
        })}
        fullWidth
        id="companySignatureName"
        label="CompanySignatureName"
        name="companySignatureName"
        autoComplete="companySignatureName"
        autoFocus
        error={!!errors.companySignatureName}
        helperText={
          errors.companySignatureName
            ? `${errors.companySignatureName?.message}`
            : ""
        }
      />
      <TextField
        size="small"
        margin="normal"
        {...register("documentName", {
          required: "Поле documentName обязательно",
          minLength: {
            value: 2,
            message: "Имя должено быть больше 2 букв",
          },
        })}
        fullWidth
        id="documentName"
        label="DocumentName"
        name="documentName"
        autoComplete="documentName"
        autoFocus
        error={!!errors.documentName}
        helperText={
          errors.documentName ? `${errors.documentName?.message}` : ""
        }
      />

      <TextField
        size="small"
        margin="normal"
        {...register("documentStatus", {
          required: "Поле documentStatus обязательно",
          minLength: {
            value: 2,
            message: "Имя должено быть больше 2 букв",
          },
        })}
        fullWidth
        id="documentStatus"
        label="DocumentStatus"
        name="documentStatus"
        autoComplete="documentStatus"
        autoFocus
        error={!!errors.documentStatus}
        helperText={
          errors.documentStatus ? `${errors.documentStatus?.message}` : ""
        }
      />

      <TextField
        size="small"
        margin="normal"
        {...register("documentType", {
          required: "Поле documentType обязательно",
          minLength: {
            value: 2,
            message: "Имя должено быть больше 2 букв",
          },
        })}
        fullWidth
        id="documentType"
        label="DocumentType"
        name="documentType"
        autoComplete="documentType"
        autoFocus
        error={!!errors.documentType}
        helperText={
          errors.documentType ? `${errors.documentType?.message}` : ""
        }
      />

      <TextField
        size="small"
        margin="normal"
        {...register("employeeNumber", {
          required: "Поле employeeNumber обязательно",
          minLength: {
            value: 2,
            message: "Имя должено быть больше 2 букв",
          },
        })}
        fullWidth
        id="employeeNumber"
        label="EmployeeNumber"
        name="employeeNumber"
        autoComplete="employeeNumber"
        autoFocus
        error={!!errors.employeeNumber}
        helperText={
          errors.employeeNumber ? `${errors.employeeNumber?.message}` : ""
        }
      />

      <TextField
        size="small"
        margin="normal"
        {...register("employeeSignatureName", {
          required: "Поле employeeSignatureName обязательно",
          minLength: {
            value: 2,
            message: "Имя должено быть больше 2 букв",
          },
        })}
        fullWidth
        id="employeeSignatureName"
        label="EmployeeSignatureName"
        name="employeeSignatureName"
        autoComplete="employeeSignatureName"
        autoFocus
        error={!!errors.employeeSignatureName}
        helperText={
          errors.employeeSignatureName
            ? `${errors.employeeSignatureName?.message}`
            : ""
        }
      />
      <Button
        type="submit"
        disabled={!isValid}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Добавить
      </Button>
    </Box>
  );
};
