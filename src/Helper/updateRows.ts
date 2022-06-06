export const updateRows = (rows:SubRowProps[],newRow: SubRowProps) => {
		return  [...rows, {...newRow}]

}
