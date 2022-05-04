import React, {FC, useState} from 'react';
import {
	TableRow,
	TableCell,
	IconButton,
	KeyboardArrowUpIcon,
	KeyboardArrowDownIcon,
	Collapse,
	Box,
	Typography,
	Table,
	TableHead,
	TableBody
} from "./index";
import {useRowContext} from "../../context/rowContext";
import {Capitalize} from "../../Helper/capitalize";
import {Categories} from "../../hooks/constraints";

const Row: FC<RowProps> = ({date, frequency, highest, lowest, average}) => {
	const [open, setOpen] = useState(false)
	const {table} = useRowContext()
	return (
		<>
			<TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
				<TableCell>
					<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">{date}</TableCell>
				<TableCell align="center">{frequency}</TableCell>
				<TableCell align="center">{highest}%</TableCell>
				<TableCell align="center">{lowest}%</TableCell>
				<TableCell align="center">{average}%</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{margin: 1}}>
							<Typography variant="h6" gutterBottom component="div">History</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>No.</TableCell>
										<TableCell align="center">Date</TableCell>
										<TableCell align="center">Category</TableCell>
										<TableCell align="center">Type</TableCell>
										<TableCell align="center">Difficulty</TableCell>
										<TableCell align="center">Score (Correct/ Questions)</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{
										Object.entries(table).map(([key, value]) =>
											key === date &&
											value.slice(0).reverse().map(({
																											id,
																											createdAt,
																											category,
																											type,
																											difficulty,
																											score,
																											totalNumber
																										}, index) =>
												<TableRow key={id}>
													<TableCell component="th" scope="row">{index + 1}</TableCell>
													<TableCell align="center">{createdAt}</TableCell>
													<TableCell align="center">{Categories[category]}</TableCell>
													<TableCell align="center">{Capitalize(type)}</TableCell>
													<TableCell align="center">{Capitalize(difficulty)}</TableCell>
													<TableCell
														align="center">{((score / totalNumber) * 100).toFixed(2)}%
														({score} / {totalNumber})</TableCell>
												</TableRow>
											)
										)
									}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	)
}

export default Row;
