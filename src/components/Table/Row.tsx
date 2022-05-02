import React, {useState} from 'react';
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

const Row = () => {
	const [open, setOpen] = useState(false)
	const {rows} = useRowContext()

	return (
		<>
			<TableRow sx={{'& > *': {borderBottom: 'unset'}}}>
				<TableCell>
					<IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">2022-05-01</TableCell>
				<TableCell align="right">Times</TableCell>
				<TableCell align="right">Highest</TableCell>
				<TableCell align="right">Lowest</TableCell>
				<TableCell align="right">Average</TableCell>
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
										<TableCell align="right">Category</TableCell>
										<TableCell align="right">Type</TableCell>
										<TableCell align="right">Difficulty</TableCell>
										<TableCell align="center">Score (Correct/ Questions)</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{
										rows.map(({
																id,
																createdAt,
																category,
																type,
																difficulty,
																score,
																totalNumber
															}, index) =>
											<TableRow key="1">
												<TableCell component="th" scope="row">{index + 1}</TableCell>
												<TableCell align="center">{createdAt}</TableCell>
												<TableCell align="right">{Categories[category]}</TableCell>
												<TableCell align="right">{Capitalize(type)}</TableCell>
												<TableCell align="right">{Capitalize(difficulty)}</TableCell>
												<TableCell
													align="center">{((score / totalNumber) * 100).toPrecision(2)}%
													({score} / {totalNumber})</TableCell>
											</TableRow>
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
