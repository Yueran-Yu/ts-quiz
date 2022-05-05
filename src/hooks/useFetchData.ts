import {useEffect, useState} from 'react';
import axios from "axios";
import {shuffleArray} from "../Helper/shuffleArray";
import {useRowContext} from "../context/rowContext";

const useFetchData = ({amount, type, difficulty, category}: FormProps): FetchData => {
	const [data, setData] = useState<QuestionProps[]>([])
	const [err, setErr] = useState<string>('')
	const {setLoading} = useRowContext()

	useEffect(() => {
		const options = {
			methods: 'GET',
			baseURL: "https://opentdb.com/api.php?",
			params: {
				amount,
				category,
				type,
				difficulty
			}
		}
		axios.request(options)
			.then(resp => {
				setData(
					resp.data.results.map((question: DataProps) => ({
							...question,
							allAnswers: shuffleArray([...question.incorrect_answers, question.correct_answer])
						})
					)
				)
				setLoading(false)
			})
			.catch(e => setErr(e.message))
		// eslint-disable-next-line
	}, [amount, category, type, difficulty])
	return {err, data}
};

export default useFetchData;
