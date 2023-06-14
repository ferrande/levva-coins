import { MagnifyingGlass } from "phosphor-react";

import { SearchFormContainer } from "./styles";

import { useState } from "react";
import SearchUseCase from "../../useCases/SearchUseCase/SearchUseCase";

export function SearchForm() {

    const [text, setText] = useState("");

    function onClick(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        SearchUseCase.execute({search: text})
    }

    return (
        <SearchFormContainer>
            <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Busque por transações"/>

            <button onClick={onClick}>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    );
}