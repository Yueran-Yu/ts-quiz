import React from 'react';
import { CollapsibleTable } from '../Table/CollapsibleTable';
import {LeaderWrapper} from "./LeaderBoard.styles";

const LeaderBoard = () => {
	return (
		<LeaderWrapper>
			<h2>Leaderboard</h2>
			<h4>Quiz Record Within 30 Days</h4>
			<CollapsibleTable/>
		</LeaderWrapper>
	);
};

export default LeaderBoard;
