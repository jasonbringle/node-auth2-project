import axios from "axios"

export default function axiosWithAuth() {
    const token = localStorage.getItem("token");
    return axios.create({
        headers: {
            Authorization: token, // If you have the server asking for authentication type like 'Bearer' then you want to put here `Bearer ${token}` instead of just token
        }
    });
}