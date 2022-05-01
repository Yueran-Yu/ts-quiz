import React from 'react';
import { CollapsibleTable } from '../Table/CollapsibleTable';
import {LeaderWrapper} from "./LeaderBoard.styles";

const LeaderBoard = () => {
	return (
		<LeaderWrapper>
			<h2>Leaderboard</h2>
			<h4>Quiz Record Within 30 Days</h4>
			<CollapsibleTable/>
			<div>
				<h4>Details</h4>

			</div>
		</LeaderWrapper>
	);
};

export default LeaderBoard;
