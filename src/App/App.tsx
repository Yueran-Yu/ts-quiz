import React, {ChangeEvent, FC, MouseEvent, useEffect, useState} from 'react';
import ConditionBoard from '../components/ConditionBoard/ConditionBoard';
import QuestionCard from '../components/QuestionCard/QuestionCard';
import useFetchData from "../hooks/useFetchData";
import {AppWrapper, CircleStyle, MainSection, QuestionBoard} from "./App.styles";
import {useLocalStorage} from "../hooks/useLocalStorage";
import LeaderBoard from "../components/LeaderBoard/LeaderBoard";
import {useBeforeunload} from "react-beforeunload";
import {incrementIndex} from "../hooks/incrementIndex";
import {useRecordsContext} from "../context/RecordsContext";
import CircularProgress from '@material-ui/core/CircularProgress';
import {updateTable} from "../Helper/updateTable"
import {updateRows} from "../Helper/updateRows"
import {getAllScoresFromOneDay, getAvg, getHighest, getLowest} from "../Helper/updateRecords"


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
	} = useRecordsContext()

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
			const key = new Date().toLocaleDateString()
			const newRow = {
				id: incrementIndex(),
				createdAt: key,
				category: formData.category,
				type: formData.type,
				difficulty: formData.difficulty,
				score: score,
				totalNumber: formData.amount
			}
			setRows(rows => updateRows(rows, newRow))
			setTable(table => updateTable(newRow, key, rows,10, table)
			)
		}
		// eslint-disable-next-line
	}, [number])


	useEffect(() => {
		table && Object.entries(table).map(([key, subRows]) => {
				let origin = getAllScoresFromOneDay(subRows)
				const high = getHighest(origin)
				const low = getLowest(origin)
				const avg = getAvg(subRows)

				setParentRecords(prev => {
					const recordObj = {
						date: key,
						frequency: subRows.length,
						highest: high,
						lowest: low,
						average: avg
					}

					let res = prev.find(p => p.date === key)
					if (res) {
						res.average = avg
						res.frequency = subRows.length
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
		<>
			{
				loading ? <CircularProgress style={CircleStyle}/> :
					<AppWrapper>
						<h1>Quick Quiz</h1>
						<MainSection>
							<QuestionBoard>
								{(gameOver && userAnswers.length <= questions.length) &&
                <button className="start_btn" onClick={startGame}>
                  Start
                </button>
								}
								{!gameOver && questions.length > 0 && <h2 className="score">Score: &nbsp;<span>{score}</span></h2>}
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
			}
		</>


	)
}

export default App;