import { AxiosError } from "axios";

import Api from "../../clients/api/Api";

import { NewAccountParams } from "../../domains/newAccount";
import { RequestError } from "../../domains/request";

const createUser = async ({
    name,
    email,
    password,
    confirmPassword,
}: NewAccountParams): Promise<void> => {
    return Api.post({
        url: "/User/Create",
        body: {
            name,
            email,
            password,
            confirmPassword,
        },
    })
        .then((response) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response.data;
        });
};

export const NewAccountService = {
    createUser,
};
