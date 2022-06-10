export const ObjectLength = <T>(obj: T) => Object.keys(obj).length

export const AddNewRowToTable = (newRow: SubRowProps, key: string, rows: SubRowProps[], table: ParentRowProps):ParentRowProps => {
	return {...table, [key]: [...rows.filter(r => r.createdAt.includes(key)), newRow]}
}

export const deleteFirstDateParentRow = (LimitedEntries: number, table: ParentRowProps):ParentRowProps => {
	let tableLength = ObjectLength(table)
	if (tableLength > LimitedEntries) {
		let lastDateKey = Object.keys(table).shift() as string
		delete table[lastDateKey]
	}
	return table
}

export const updateTable = (newRow: SubRowProps, key: string, rows: SubRowProps[], LimitedEntries: number, table: ParentRowProps) => {
	let result
	let tableLength = ObjectLength(table)

	if (tableLength > LimitedEntries) {
		const cutTable = deleteFirstDateParentRow(10, table)
		result = AddNewRowToTable(newRow, key, rows, cutTable)
	} else {
		result = AddNewRowToTable(newRow, key, rows, table)
	}
	return result
}



