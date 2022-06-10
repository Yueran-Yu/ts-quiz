import React, {createContext, FC, ReactNode, useContext, useState} from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage";

const RecordsContext = createContext<RowContextProps | null>(null)
export const RowsProvider: FC<ReactNode> = ({children}) => {
		const [rows, setRows] = useLocalStorage<SubRowProps[]>("subRows", [])
		const [table, setTable] = useLocalStorage<ParentRowProps>("parentRow", {})
		const [loading, setLoading] = useState(true)
		const [gameOver, setGameOver] = useState(true)
		const [number, setNumber] = useState<number>(0)
		const [userAnswers, setUserAnswers] = useState<AnswerProps[]>([])
		const [questions, setQuestions] = useState<QuestionProps[]>([])
		const [parentRecords, setParentRecords] = useLocalStorage<RecordsProps[]>("highestScore", [])

		return (
			<RecordsContext.Provider value={{
				gameOver,
				setGameOver,
				loading,
				setLoading,
				userAnswers,
				setUserAnswers,
				setNumber,
				number,
				questions,
				setQuestions,
				rows,
				setRows,
				table,
				setTable,
				parentRecords,
				setParentRecords
			}}>
				{children}
			</RecordsContext.Provider>
		);
	}

export const useRecordsContext = () => {
	return useContext(RecordsContext) as RowContextProps
}
