export const incrementIndex = (function (a: number) {
	return function () {
		a = Math.round(Date.now() * Math.random());
		return a
	}
})(0)
