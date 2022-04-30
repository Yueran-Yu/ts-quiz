import React from 'react';
import {LeaderWrapper} from "./LeaderBoard.styles";

const LeaderBoard = () => {
	return (
		<LeaderWrapper>
			<h3>Leader Board</h3>
			<h4>How many times played so far</h4>
			<h4>The Highest Score</h4>
			<h4>The Lowest Score</h4>
			<h4>The average Score</h4>
			<h4>Each time details</h4>
			<p>Date, Score, Category, Type, Difficulty, total Amount</p>
		</LeaderWrapper>
	);
};

export default LeaderBoard;
