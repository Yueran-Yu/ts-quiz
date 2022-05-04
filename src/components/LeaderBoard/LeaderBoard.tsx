import React from 'react';
import { CollapsibleTable } from '../Table/CollapsibleTable';
import {LeaderWrapper} from "./LeaderBoard.styles";

const LeaderBoard = () => {
	return (
		<LeaderWrapper>
			<h1>Leaderboard</h1>
			<div>Quiz Record Within 10 Days</div>
			<CollapsibleTable/>
		</LeaderWrapper>
	)
}

export default LeaderBoard;
