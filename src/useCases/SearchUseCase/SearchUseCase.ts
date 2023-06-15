import { RequestError } from "../../domains/request";

import { SearchParams } from "../../domains/search";
import { TransactionValues } from "../../domains/transaction";
import { TransactionService } from "../../services/TransactionService/TransactionService";

import { updateSearch } from "../../stores/SearchStore/SearchEvents"
import { loadTransaction, loadTransactionDone, loadTransactionFail } from "../../stores/TransactionStore/TransactionEvents";

const execute = ({
    search,
}: SearchParams): Promise<void> => {

    loadTransaction()
    return TransactionService.searchTransactions({ search })
        .then((transactions: TransactionValues[]) => {
            loadTransactionDone(transactions);
        })
        .catch(({ hasError, message }: RequestError) => {
            loadTransactionFail({ hasError, message });
        });

};

const SearchUseCase = {
    execute,
};

export default SearchUseCase;
