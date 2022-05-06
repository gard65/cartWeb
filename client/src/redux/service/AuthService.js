import $api from "../../http/index.js";

export default class AuthService {
    static async registration(userData) {
        const {name, email, telephone, age, password,gender } = userData;
        const response = await $api.post("/registration", {name, email, telephone, age, password,gender});
        localStorage.setItem("token", response.data.accessToken);
        return response;
    }

    static async login(userData) {
        const {email, password} = userData;
        const response = await $api.post("/login", {email, password});
        localStorage.setItem("token", response.data.accessToken);
        return response;
    }

    static async logout() {
        await $api.post("/logout");
        localStorage.removeItem("token");
    }

}
