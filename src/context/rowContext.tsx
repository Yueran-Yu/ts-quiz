import React, {createContext, FC, ReactNode, useContext} from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage";

const RowContext = createContext<RowContextProps|null>(null)
export const RowsProvider: FC<ReactNode> = ({children}) => {
	const [rows, setRows] = useLocalStorage<SubRowProps[]>("subRows", [])

	return (
		<RowContext.Provider value={{rows, setRows}}>
			{children}
		</RowContext.Provider>
	);
};


export const useRowContext = () => {
	return useContext(RowContext) as RowContextProps
}
