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
	amount?: number
	type?: string
	difficulty?: string
	category?: number
}

