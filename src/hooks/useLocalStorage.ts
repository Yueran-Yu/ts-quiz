import {Dispatch, SetStateAction, useEffect, useState} from "react";

export const useLocalStorage = <T>(key: string, defaultValue: T): [T, Dispatch<SetStateAction<T>>] => {
	const [value, setValue] = useState<T>(() => {
		try {
			const tempValue = window.localStorage.getItem(key)
			if (tempValue) {
				return JSON.parse(tempValue)
			} else {
				return defaultValue
			}
		} catch (error) {
			console.warn(`localStorage getItem Error`, error)
		}
	})

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [key, value])

	return [value, setValue]
}

