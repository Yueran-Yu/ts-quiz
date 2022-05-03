interface DataProps {
	category: string
	correct_answer: string
	difficulty: string
	incorrect_answers: string[]
	question: string
	type: string
}

interface QuestionProps extends DataProps {
	allAnswers: string[]
}

interface CategoryProps {
	[key: number]: string
}

interface FetchData {
	data: QuestionProps[]
	err: string
}

interface CardProps {
	questionNum: number
	totalQuestions: number
	question: string
	answers: string[]
	userAnswer: AnswerProps | undefined
	checkAnswers: (e: React.MouseEvent<HTMLButtonElement>) => void
}

interface AnswerProps {
	question: string,
	answer: string,
	isCorrect: boolean,
	correctAnswer: string,
}

interface ConditionBoardProps {
	form: FormProps
	handleConditionChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void
}

interface FormProps {
	amount: number
	type: string
	difficulty: string
	category: number
}

interface SubRowProps {
	id: number
	createdAt: string
	category: number
	type: string
	difficulty: string
	score: number
	totalNumber: number
}

interface RowProps{
	date: string
	frequency: number
	highest: string
	lowest: string
	average: string
}

interface ParentRowProps {
	[key: string]: SubRowProps[]
}

interface RowContextProps {
	rows: SubRowProps[]
	setRows: React.Dispatch<React.SetStateAction<SubRowProps[]>>
	table: ParentRowProps
	setTable: React.Dispatch<React.SetStateAction<ParentRowProps>>
}


