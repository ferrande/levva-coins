import { AxiosError } from "axios";

import Api from "../../clients/api/Api";

import { RequestError } from "../../domains/request";
import { NewTransactionParams, TransactionValues } from "../../domains/transaction";
import { SearchParams } from "../../domains/search";

const createTransaction = async ({
    description,
    amount,
    type,
    categoryId,
}: NewTransactionParams): Promise<void> => {
    return Api.post({
        url: "/Transaction",
        body: {
            description,
            amount,
            type,
            categoryId,
        },
    })
        .then((response) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

const getTransactions = async (): Promise<TransactionValues[]> => {
    return Api.get({
        url: "/Transaction/list",
    })
        .then((response) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

const searchTransactions = async ({ search }: SearchParams): Promise<TransactionValues[]> => {
    return Api.get({
        url: `/Transaction/${search}`,
    })
        .then((response) => {
            return response.data;
        })
        .catch((err: AxiosError<RequestError>) => {
            throw err.response?.data;
        });
};

export const TransactionService = {
    createTransaction,
    getTransactions,
    searchTransactions,
};
