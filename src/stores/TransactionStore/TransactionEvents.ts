import { createEvent } from "effector";

import { TransactionValues } from "../../domains/transaction";
import { RequestError } from "../../domains/request"

export const loadTransaction = createEvent("loadTransaction");
export const loadCreateTransactionDone = createEvent<TransactionValues>("loadCreateTransactionDone");
export const loadTransactionDone = createEvent<TransactionValues[]>("loadTransactionDone");
export const loadTransactionFail = createEvent<RequestError>("loadTransactionFail");