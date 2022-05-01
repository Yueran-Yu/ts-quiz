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

const Row = () => {
	const [open, setOpen] = useState(false)
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
										<TableCell>Date</TableCell>
										<TableCell align="right">Category</TableCell>
										<TableCell align="right">Type</TableCell>
										<TableCell align="right">Difficulty</TableCell>
										<TableCell align="right">Score (correct/questions)</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow key="1">
										<TableCell component="th" scope="row">1</TableCell>
										<TableCell>2022-04-30</TableCell>
										<TableCell align="right">General Knowledge</TableCell>
										<TableCell align="right">Boolean</TableCell>
										<TableCell align="right">Easy</TableCell>
										<TableCell align="right">80% (8/10)</TableCell>
									</TableRow>
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
