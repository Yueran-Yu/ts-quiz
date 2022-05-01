import React from 'react';
import {TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell} from "./index";
import Row from "./Row";

export const CollapsibleTable = () => {

	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead>
					<TableRow>
						<TableCell/>
						<TableCell>Date</TableCell>
						<TableCell align="right">Times</TableCell>
						<TableCell align="right">Highest</TableCell>
						<TableCell align="right">Lowest</TableCell>
						<TableCell align="right">Average</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<Row />
				</TableBody>
			</Table>
		</TableContainer>
	)
}
