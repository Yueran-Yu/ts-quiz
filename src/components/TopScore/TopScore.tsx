import React from 'react';
import {TopScoreWrapper} from "./TopScore.styles";
import {useRecordsContext} from "../../context/RecordsContext";

export const TopScore = () => {
	const {parentRecords} = useRecordsContext()
	const max = parentRecords.reduce((prev: RecordsProps, curr) => (parseFloat(prev.average) >= parseFloat(curr.average) ? prev : curr), {} as RecordsProps)
	return (
		<TopScoreWrapper>
			<h4><span>Highest</span> Score Within 10 days</h4>
			<div>Date: <span>{max.date}</span> &nbsp;&nbsp; Score: <span>{max.average} %</span></div>
		</TopScoreWrapper>
	)
}
