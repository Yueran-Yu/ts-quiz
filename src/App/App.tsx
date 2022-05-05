import React, {ChangeEvent, FC, MouseEvent, useEffect, useState} from 'react';
import ConditionBoard from '../components/ConditionBoard/ConditionBoard';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import useFetchData from "../hooks/useFetchData";
import {AppWrapper, MainSection, QuestionBoard} from "./App.styles";
import {useLocalStorage} from "../hooks/useLocalStorage";
import LeaderBoard from "../components/LeaderBoard/LeaderBoard";
import {useBeforeunload} from "react-beforeunload";
import {incrementIndex} from "../hooks/incrementIndex";
import {useRowContext} from "../context/rowContext";

const App: FC = () => {
	const initialData = {
		category: 9,
		amount: 10,
		type: 'boolean',
		difficulty: 'easy'
	}
	const [formData, setFormData] = useLocalStorage<FormProps>("formData", initialData)
	const {err, data} = useFetchData(formData)
	const [score, setScore] = useState<number>(0)
	const {
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
		table,
		setRows,
		setTable,
		setParentRecords
	} = useRowContext()

	const startGame = () => {
		setLoading(true)
		setGameOver(false)
		setQuestions(data)
		setScore(0)
		setUserAnswers([])
		setNumber(0)
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
		const nextQ = number + 1
		nextQ === questions.length && setGameOver(true);
		setNumber(nextQ);
	}

	const handleConditionChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
		const {name, value} = e.target
		setFormData(formData => ({...formData, [name]: value}))
		setGameOver(true)
	}

	useBeforeunload((e: any) => {
		if (userAnswers.length !== 0 && userAnswers.length !== number + 1 && !gameOver) {
			e.preventDefault()
		}
	})

	useEffect(() => {
		if (questions.length > 0 && number === questions.length) {
			const obj = {
				id: incrementIndex(),
				createdAt: new Date().toLocaleString(),
				category: formData.category,
				type: formData.type,
				difficulty: formData.difficulty,
				score: score,
				totalNumber: formData.amount
			}
			setRows(rows => [...rows, {...obj}])
			const key = new Date().toLocaleDateString()
			setTable(table => {
					let result = {} as ParentRowProps
					let keysLength = Object.keys(table).length

					if (keysLength > 10) {
						while (Object.keys(table).length > 10) {
							let temp = Object.keys(table).shift() as string
							delete table[temp]
							result = {...table, [key]: [...rows.filter(r => r.createdAt.includes(key)), obj]}
						}
					} else {
						result = {...table, [key]: [...rows.filter(r => r.createdAt.includes(key)), obj]}
					}
					return result
				}
			)
		}
		// eslint-disable-next-line
	}, [number])


	useEffect(() => {
		table && Object.entries(table).map(([k, v]) => {
				let origin = v.reduce((acc: number[], {score, totalNumber}) => [...acc, (score / totalNumber)], [])
				const high = (Math.max(...origin) * 100).toFixed(2)
				const low = (Math.min(...origin) * 100).toFixed(2)
				const avg = ((v.reduce((acc: number, {
					score,
					totalNumber
				}) => acc + (score / totalNumber), 0) / v.length) * 100).toFixed(2)

				setParentRecords(prev => {
					const recordObj = {
						date: k,
						frequency: v.length,
						highest: high,
						lowest: low,
						average: avg
					}

					let res = prev.find(p => p.date === k)
					console.log("res")
					console.log(res)
					if (res) {
						res.average = avg
						res.frequency = v.length
						res.highest = high
						res.lowest = low
						return [...prev]
					} else {
						return [recordObj, ...prev]
					}
				})
				return ""
			}
		)
		// eslint-disable-next-line
	}, [table])
	return (
		<AppWrapper>
			<h1>Quick Quiz</h1>
			<MainSection>
				<QuestionBoard>
					{(gameOver && userAnswers.length <= questions.length) &&
          <button className="start_btn" onClick={startGame}>
            Start
          </button>
					}
					{!gameOver && questions.length > 0 && <h2 className="score">Score: <span>{score}</span></h2>}
					{err ? <h2>Sorry, there is an error...</h2> :
						gameOver ? <h2>Click Start To Play!</h2> :
							loading ? <h2>Loading Questions...</h2> :
								questions && questions.length ?
									// We can't pass isCorrect property to QuestionCard, since we can never read the property =>isCorrect before the userAnswers object array to be rendered. So it will show this error: Uncaught error: TypeError: Cannot read properties of undefined (reading 'isCorrect')
									<QuestionCard
										questionNum={number + 1}
										nextQuestion={nextQuestion}
										totalQuestions={questions.length}
										question={questions[number].question}
										answers={questions[number].allAnswers}
										userAnswer={userAnswers && userAnswers[number]}
										checkAnswers={checkAnswers}
									/> :
									<h3>Oops! Question Out of Limit<br/>Please Select Again</h3>
					}
				</QuestionBoard>
				<ConditionBoard form={formData} handleConditionChange={handleConditionChange}/>
			</MainSection>
			<LeaderBoard/>
		</AppWrapper>
	)
}

export default App;
