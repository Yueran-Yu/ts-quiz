import {useEffect, useState} from 'react';
import axios from "axios";
import {shuffleArray} from "../utils";

const useFetchData = ({amount, type, difficulty, category}: FormProps) => {
	const [data, setData] = useState<QuestionProps>(
		{
			category: "",
			correct_answer: " ",
			difficulty: "",
			incorrect_answers: [],
			question: "",
			type: "",
			allAnswers: []
		})

	const [err, setErr] = useState<string>('')

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
			.then(resp => setData(
				resp.data.results.map((question: DataProps) => ({
						...question,
						allAnswers: shuffleArray([...question.incorrect_answers, question.correct_answer])
					})
				)
			))
			.catch(e => setErr(e.message))
	}, [amount, category, type, difficulty])

	return data
};

export default useFetchData;
