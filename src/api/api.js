import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "455241d3-47b3-41f0-8bd1-28ed96c874d5"
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then((response) => {
            return response.data;
        })
    }

} 
