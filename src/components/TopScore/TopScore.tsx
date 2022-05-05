import React from 'react';
import {TopScoreWrapper} from "./TopScore.styles";
import {useRowContext} from "../../context/rowContext";

export const TopScore = () => {
	const {parentRecords} = useRowContext()
	const max = parentRecords.reduce((prev: RecordsProps, curr) => (parseFloat(prev.highest) >= parseFloat(curr.highest) ? prev : curr), {} as RecordsProps)
	return (
		<TopScoreWrapper>
			<h4><span>Highest</span> Score within Score Within 10 days</h4>
			<div>Date: <span>{max.date}</span> &nbsp;&nbsp; Score: <span>{max.highest} %</span></div>
		</TopScoreWrapper>
	)
}
