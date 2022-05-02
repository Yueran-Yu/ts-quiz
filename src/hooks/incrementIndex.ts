export const incrementIndex = ((a: number) => {
	return () => {
		a = Math.round(Date.now() * Math.random());
		return a
	}
})(0)
