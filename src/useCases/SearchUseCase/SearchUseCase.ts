import { SearchParams } from "../../domains/search";

import { updateSearch } from "../../stores/SearchStore/SearchEvents"

const execute = ({
    search,
}: SearchParams): void => {

    updateSearch(search)

};

// { search: string } -> 

// execute("blabla")
// execute({ search: "blabla" })

const SearchUseCase = {
    execute,
};

export default SearchUseCase;
