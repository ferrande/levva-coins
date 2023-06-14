import { createStore } from "effector";

import { updateSearch } from "./SearchEvents";
import { SearchState } from "./SearchState";

const initialState: SearchState = {
    search: "",
};

const TransactionStore = createStore<SearchState>(initialState)
    .on(updateSearch, (_, data) => ({
        search: data
    }))

export default TransactionStore;