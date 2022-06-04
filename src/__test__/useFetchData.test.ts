import useFetchData from "../hooks/useFetchData"
import {renderHook, act} from "@testing-library/react-hooks"

import axios from "axios"
import MockAdapter from "axios-mock-adapter"

test("useFetchData performs GET request", async () => {
	const initialValue = {category: 9, amount: 5, type: "boolean", difficulty: "easy"}
	const mock = new MockAdapter(axios)
	const mockData = {category: 9, amount: 10, type: "boolean", difficulty: "hard"}
	const url = "http://mock"
	mock.onGet(url).reply(200, mockData)
	const {result, waitForNextUpdate} = renderHook(() => useFetchData(initialValue))


	expect(result.current.data).toEqual({
		category: 9,
		amount: 5,
		type: "boolean",
		difficulty: "easy"
	})

	await waitForNextUpdate()
	expect(result.current.data).toEqual({
		category: 9,
		amount: 10,
		type: "boolean",
		difficulty: "hard"
	})
})
