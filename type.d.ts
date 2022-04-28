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

interface CardProps {
	questionNum: number
	totalQuestions: number
	question: string
	answers: string[]
	userAnswer: any
	callback: () => void
}

interface QuizProps {
	questions: QuestionProps[],
	number: number,
	userAnswers: AnswerObject[],
	score: number,
}


interface AnswerObject {
	question: string
	answer: string
	correct: boolean
	correctAnswer: string
}

interface ConditionBoardProps {
	form: FormProps
	handleConditionChange: (e: React.ChangeEvent<HTMLFormElement|HTMLInputElement>) => void

}

interface FormProps {
	type: string
	difficulty: string
	category: string
}

