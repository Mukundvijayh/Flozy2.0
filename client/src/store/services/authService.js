import { postRequest } from "../../utils/apiHelper";

export const authService = {
    login
}

async function login(data) {
    return await postRequest('sales/auth/login/', data)
}