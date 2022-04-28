import React, {ChangeEvent, FC, MouseEvent, useState} from 'react';
import ConditionBoard from './components/ConditionBoard/ConditionBoard';
import useFetchData from "./hooks/useFetchData";

const App: FC = () => {
	const [loading, setLoading] = useState(false)
	const [gameOver, setGameOver] = useState(true)
	const [formData, setFormData] = useState<FormProps>({
		amount: 10,
		type: 'multiple',
		difficulty: 'easy',
		category: 9
	})
	const [quiz, setQuiz] = useState<QuizProps>({
		questions: [],
		number: 0,
		userAnswers: [],
		score: 0,
	})

	const x = useFetchData(formData)
	console.log("here we go")
	console.log(x)

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

	const handleConditionChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
		const {name, value} = e.target
		setFormData(form => ({...form, [name]: value}))
		console.log("changed")
		console.log(name)
		console.log(value)
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
