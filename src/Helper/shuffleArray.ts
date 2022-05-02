export const shuffleArray = (arr: any[]) => {
	let currentIndex = arr.length
	let randomIndex

	// While there remain elements to shuffle
	while (currentIndex !== 0) {
		// pick a remaining element
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--
		// swap it with the current element
		[arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
	}
	return arr
}