import React from 'react';
import {TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell} from "./index";
import Row from "./Row";
import {useRowContext} from "../../context/rowContext";

export const CollapsibleTable = () => {
	const {parentRecords} = useRowContext()


	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead>
					<TableRow>
						<TableCell/>
						<TableCell>Date</TableCell>
						<TableCell align="center">Frequency</TableCell>
						<TableCell align="center">Highest</TableCell>
						<TableCell align="center">Lowest</TableCell>
						<TableCell align="center">Average</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{
						parentRecords && parentRecords.map(({date, frequency, highest, lowest, average}, index) =>
							<Row key={index} frequency={frequency} date={date} highest={highest} lowest={lowest} average={average}/>
						)
					}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
