import React, {createContext, FC, ReactNode, useContext, useState} from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage";

const RowContext = createContext<RowContextProps | null>(null)
export const RowsProvider: FC<ReactNode> = ({children}) => {
	const [rows, setRows] = useLocalStorage<SubRowProps[]>("subRows", [])
	const [table, setTable] = useLocalStorage<ParentRowProps>("table", {})

	return (
		<RowContext.Provider value={{rows, setRows, table, setTable}}>
			{children}
		</RowContext.Provider>
	);
};


export const useRowContext = () => {
	return useContext(RowContext) as RowContextProps
}
