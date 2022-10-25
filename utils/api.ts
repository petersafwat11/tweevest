import axios from "axios";

// const token = "f7129b85fb2f977b7fb5564ba064012b";
// axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

console.log("process.env.TOKEN :", process.env.TOKEN);
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,

  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${process.env.TOKEN}`,
  },
  //   auth: {
  //     username: process.env.USERNAME || "",
  //     password: process.env.PASSWORD || "",
  //   },
});
