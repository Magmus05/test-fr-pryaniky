import axios from "axios";
import { IAddData, IEditData } from "../types/types";

const host = "https://test.v5.pryaniky.com";
const urlLogin = "/ru/data/v3/testmethods/docs/login";
const urlGetData = "/ru/data/v3/testmethods/docs/userdocs/get";
const urlAddData = "/ru/data/v3/testmethods/docs/userdocs/create";
const urlRemoveData = "/ru/data/v3/testmethods/docs/userdocs/delete/";
const urlEditData = "/ru/data/v3/testmethods/docs/userdocs/set/";

export const auth = (username: string, password: string) => {
  return fetch(`${host}${urlLogin}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username, password: password }),
  });
};

export const getData = (token: string | null) => {
  if (token !== null) {
    return fetch(`${host}${urlGetData}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth": token,
      },
    });
  }
};

export const addData = ({ token, data }: IAddData) => {
  if (token.length > 0) {
    return fetch(`${host}${urlAddData}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-auth": token,
      },
      body: JSON.stringify(data),
    });
  }
};
type removeDataItemType = {
  token: string;
  id: string | undefined;
};
export const removeDataItem = ({ token, id }: removeDataItemType) => {
  return axios({
    method: "POST",
    url: `${host}${urlRemoveData}${id}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-auth": token,
    },
  });
};

export const editDataItem = ({ token, id, data }: IEditData) => {
  return axios({
    method: "POST",
    url: `${host}${urlEditData}${id}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-auth": token,
    },
    data: data,
  });
};
