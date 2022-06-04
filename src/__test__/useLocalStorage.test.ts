import {useLocalStorage} from "../hooks/useLocalStorage"
import {renderHook, act} from "@testing-library/react-hooks"


describe("useLocalStorage", () => {
	it("returns default value", () => {
		const initKey = "test"
		const defaultValue = {name: "Sam", age: 12}
		const {result} = renderHook(() => useLocalStorage(initKey, defaultValue))
		expect(result.current[0]).toEqual(defaultValue)
	})

	it('is callable', () => {
		const initKey = "test"
		const {result} = renderHook(() => useLocalStorage(initKey, 'something'))
		expect(result.current).toBeDefined()
	})


	it('stores the initialState as serialized json in localstorage', () => {
		const initKey = 'testKey';
		const initialState = { a: 1, b: 2 };
		renderHook(() => useLocalStorage(initKey, initialState));
		expect(localStorage.getItem(initKey)).toEqual(JSON.stringify(initialState));
	});

	it("returns new value that passed in the setValue", () => {
		const initKey = "allData"
		const defaultVal = {name: "Sam", age: 12}
		const {result} = renderHook(() => useLocalStorage(initKey, defaultVal))
		const newVal = {name: "Apple", age: 14}

		act(() => {
			result.current[1](newVal)
		})

		expect(result.current[0]).toEqual(newVal)
		expect(localStorage.getItem(initKey)).toEqual(JSON.stringify(newVal))
	})
})

