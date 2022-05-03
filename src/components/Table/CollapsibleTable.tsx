import React from 'react';
import {TableContainer, Paper, Table, TableHead, TableBody, TableRow, TableCell} from "./index";
import Row from "./Row";
import {useRowContext} from "../../context/rowContext";

export const CollapsibleTable = () => {
	const {table} = useRowContext()

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
						Object.entries(table).map(([k, v]) => {
							let origin = v.reduce((acc: number[], {score, totalNumber}) => [...acc, (score / totalNumber)], [])
							const high = (Math.max(...origin) * 100).toFixed(2)
							const low = (Math.min(...origin) * 100).toFixed(2)
							const avg = ((v.reduce((acc: number, {
								score,
								totalNumber
							}) => acc + (score / totalNumber), 0) / v.length) * 100).toFixed(2)
							return <Row key={k} frequency={v.length} date={k} highest={high} lowest={low} average={avg}/>
						})
					}
				</TableBody>
			</Table>
		</TableContainer>
	)
}
