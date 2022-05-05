import React from 'react';
import {CollapsibleTable} from '../Table/CollapsibleTable';
import {LeaderWrapper} from "./LeaderBoard.styles";
import {TopScore} from "../TopScore/TopScore";

const LeaderBoard = () => {
	return (
		<LeaderWrapper>
			<h1>Leaderboard</h1>
			<TopScore/>
			<CollapsibleTable/>
		</LeaderWrapper>
	)
}

export default LeaderBoard;
