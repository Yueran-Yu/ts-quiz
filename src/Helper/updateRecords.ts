export const getAllScoresFromOneDay = (subRows: SubRowProps[]) => {
	return subRows.reduce((prev: number[], current: SubRowProps) => {
		const {score, totalNumber} = current
		const subAverageScore = score / totalNumber
		return [...prev, subAverageScore]
	}, [])
}

export const getHighest = (allSubScores: number[]) => {
	return (Math.max(...allSubScores) * 100).toFixed(2)
}

export const getLowest = (allSubScores: number[]) => {
	return (Math.min(...allSubScores) * 100).toFixed(2)
}

export const getAvg = (subRows: SubRowProps[]) => {
	const rawAverage = subRows.reduce((prev: number, subRow: SubRowProps) => {
		const {score, totalNumber} = subRow
		return prev + score / totalNumber
	}, 0)
	return (rawAverage / subRows.length * 100).toFixed(2)
}
