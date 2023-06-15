import { AxiosError } from "axios";

import Api from "../../clients/api/Api";

import { CategoryValues, NewCategoryParams } from "../../domains/category";
import { RequestError } from "../../domains/request";

const createCategory = async ({
    description,
}: NewCategoryParams): Promise<CategoryValues> => {
    return Api.post({
        url: "/Category",
        body: {
            description,
        },
    })
        .then((response) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

const getCategories = async (): Promise<CategoryValues[]> => {
    return Api.get({
        url: "/Category/list",
    })
        .then((response) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

export const CategoryService = {
    createCategory,
    getCategories,
};
