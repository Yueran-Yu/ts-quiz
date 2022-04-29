import React, {ChangeEvent, FC, MouseEvent, useState} from 'react';
import ConditionBoard from '../components/ConditionBoard/ConditionBoard';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import useFetchData from "../hooks/useFetchData";
import {AppWrapper, MainSection, QuestionBoard} from "./App.styles";

const App: FC = () => {
	const [loading, setLoading] = useState(false)
	const [gameOver, setGameOver] = useState(true)
	const [score, setScore] = useState<number>(0)
	const [number, setNumber] = useState<number>(0)
	const [formData, setFormData] = useState<FormProps>({
		category: 9,
		amount: 10,
		type: 'boolean',
		difficulty: 'easy'
	})
	const {err, data} = useFetchData(formData)
	const [questions, setQuestions] = useState<QuestionProps[]>([])
	const [userAnswers, setUserAnswers] = useState<AnswerProps[]>([])

	const startGame = () => {
		setLoading(true)
		setGameOver(false)
		setQuestions(data)
		setLoading(false)
	}

	const checkAnswers = (e: MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			const isCorrect = e.currentTarget.value === questions[number].correct_answer
			const _answer = e.currentTarget.value
			setUserAnswers(userAnswers => (
				[...userAnswers, {
					question: questions[number].question,
					answer: _answer,
					isCorrect,
					correctAnswer: questions[number].correct_answer
				}]))

			isCorrect && setScore(score => score + 1)
		}
	}

	const nextQuestion = () => {
		setNumber(num => {
			if (num === questions.length) {
				setGameOver(true)
				return num
			} else {
				return num + 1
			}
		})
	}

	const handleConditionChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
		const {name, value} = e.target
		setFormData(formData => ({...formData, [name]: value})
		)
	}

	return (
		<AppWrapper>
			<h1>Quick Quiz Game</h1>
			<MainSection>
				<QuestionBoard>
					{(gameOver || userAnswers.length === formData.amount) &&
          <button className='start' onClick={startGame}>
            Start
          </button>
					}
					{!gameOver && <h2 className="score">Score:{score} </h2>}
					{err ? <h1>Sorry, there is an error...</h1> :
						gameOver ? <h4>Click Start To Play</h4> :
							loading ? <h4>Loading Questions...</h4> :
								questions && questions.length ?
									// We can't pass isCorrect property to QuestionCard, since we can never read the property =>isCorrect before the userAnswers object array to be rendered. So it will show this error: Uncaught error: TypeError: Cannot read properties of undefined (reading 'isCorrect')
									<QuestionCard
										questionNum={number + 1}
										totalQuestions={questions.length}
										question={questions[number].question}
										answers={questions[number].allAnswers}
										userAnswer={userAnswers && userAnswers[number]}
										checkAnswers={checkAnswers}
									/> :
									<h4>Oops! Question Not Exists<br/>Please Select Again</h4>
					}
					{
						//1. game is not over
						//2. game is not loading
						//3. empty answer is not allow
						//4. the question length is not reach the total amount of questions
						!gameOver &&
						!loading &&
						userAnswers.length === number + 1 &&
						number + 1 !== formData.amount ?
							<button className="next" onClick={nextQuestion}>Next Question</button> : ""
					}
				</QuestionBoard>
				<ConditionBoard form={formData} handleConditionChange={handleConditionChange}/>
			</MainSection>
		</AppWrapper>
	)
}

export default App;