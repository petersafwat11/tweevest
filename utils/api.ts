import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'content-type': 'application/json',
    },
    auth: {
        username: process.env.USERNAME || "",
        password: process.env.PASSWORD || ""
    }
});