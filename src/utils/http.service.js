import http from "./http.utils";
const login = data => {
    return http.post("/signin", data);
};

export default {

    login

};