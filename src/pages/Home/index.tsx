import { useEffect, useState } from "react";

import { useStore } from "effector-react"

import TransactionStore from "../../stores/TransactionStore/TransactionStore";

import GetTransactionsUseCase from "../../useCases/GetTransactionsUseCase/GetTransactionsUseCase";

import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import { HomeWrapper, PriceHighlight, TransactionsContainer, TransactionsTable, TransactionsTableEmpty } from "./styles";
import SearchStore from "../../stores/SearchStore/SearchStore";

export function Home() {
    const { isLoading, transactions } = useStore(TransactionStore);
    const { search } = useStore(SearchStore);

    const money = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    useEffect(() => {
        GetTransactionsUseCase.execute();
    }, []);

    const filteredTransactions = transactions.filter((transaction) => {
        return transaction.description.toLowerCase().includes(search.toLowerCase()) || transaction.category.description.toLowerCase().includes(search.toLowerCase())
    });
    
    return <HomeWrapper>
        <Header />
        <Summary />
        <SearchForm />

        <TransactionsContainer>
            <TransactionsTable>
                <thead>
                    <td>Descrição</td>
                    <td>Preço</td>
                    <td>Categoria</td>
                    <td>Data</td>
                </thead>
                <tbody>
                    {filteredTransactions.length > 0 && filteredTransactions.map(transaction => (
                        <tr>
                        <td width="50%">{transaction.description}</td>
                        <td>
                            <PriceHighlight variant={transaction.type === 0 ? "income" : "outcome"}>{money.format(transaction.amount)}</PriceHighlight>
                        </td>
                        <td>{transaction.category.description}</td>
                        <td>{transaction.createdAt}</td>
                    </tr>
                    ))}
                </tbody>
            </TransactionsTable>
            {!isLoading && filteredTransactions.length === 0 && (
                <TransactionsTableEmpty>
                    Adicione uma categoria e a sua primeira transação :)
                </TransactionsTableEmpty>
            )}
        </TransactionsContainer>
        </HomeWrapper>;
}