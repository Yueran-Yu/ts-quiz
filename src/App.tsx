import React, {ChangeEvent, FC, MouseEvent, useState} from 'react';
import ConditionBoard from './components/ConditionBoard/ConditionBoard';
import useFetchData from "./hooks/useFetchData";

const TOTAL_QUESTIONS = 10
const App: FC = () => {
	const [loading, setLoading] = useState(false)
	const [gameOver, setGameOver] = useState(true)
	const [formData, setFormData] = useState<FormProps>({
		type: 'multiple',
		difficulty: 'easy',
		category: 'general_knowledge'
	})
	const [quiz, setQuiz] = useState<QuizProps>({
		questions: [],
		number: 0,
		userAnswers: [],
		score: 0,
	})

	// const x = useFetchData()

	const startTrivia = async () => {
		setLoading(true)
		setGameOver(false)
		setQuiz({...quiz, questions: [], score: 0, userAnswers: [], number: 0})
		setLoading(false)
	}

	const checkAnswer = (e: MouseEvent<HTMLButtonElement>) => {
	}
	const nextQuestion = () => {
	}

	const callback = () => {

	}

	const handleConditionChange = (e: ChangeEvent<HTMLFormElement | HTMLInputElement>) => {
		const {name, value} = e.target
		setFormData(form => ({...form, [name]: value}))
	}

	return (
		<div>
			<h1>Quick Quiz Game</h1>
			<ConditionBoard form={formData} handleConditionChange={handleConditionChange}/>
			<button className='start' onClick={startTrivia}>
				Start
			</button>
			<p className="score">Score: </p>
			<p>Loading Questions...</p>
			{/*<QuestionCard*/}
			{/*	questionNum={quiz.number + 1}*/}
			{/*	totalQuestions={TOTAL_QUESTIONS}*/}
			{/*	question={quiz.questions[quiz.number].question}*/}
			{/*	answers={quiz.questions[quiz.number].answers}*/}
			{/*	userAnswer={quiz.userAnswer.length}*/}
			{/*	callback={callback}/>*/}
			<button className="next" onClick={nextQuestion}>Next Question</button>
		</div>
	)
}

export default App;
