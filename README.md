1. dangerouslySetInnerHTML
2. the original json file, the type of category is number "https://opentdb.com/api.php?amount=10&category=9", but at
   first, I thought it mst be string, but after double check the API structure, I find out that the type of Category's
   parameter should be numbered!
3. the double exclamation marks ***!!value***  is used to cast value to boolean
4. the following values are considered by javascript to be falseys:
    - Empty string: ""
    - 0
    - null
    - undefined
    - NaN
5. the following values are considered by javascript to be truthys:
    - Object: {}
    - Array: []
    - Not empty string "anything"
    - Number other than zero: 2,3,5
    - Date: new Date()
6. We can't pass **isCorrect** property to **QuestionCard**, since we can never read the property =>isCorrect before
   the **userAnswers** object array to be rendered. So it will show this
   error: ```Uncaught error: TypeError: Cannot read properties of undefined (reading 'isCorrect')```
7. Property **number**, has two sides, one it should be used as the index of Questions, so it should be started from 0.
   Another side, it should be displayed on the screen as the first question count, so it should be ***1*** in the screen
   when the game start.

Now I need to consider store some data in the browser.

8. What should I store?
    - The condition board should be stored, since if the user refresh the page, the condition will back to the initial
      state, this is not professional.
    -
9. Where should I store?
10. #### Persist the data by encapsulating a custom hook - **useLocalStorage**
11. Implement react-beforeunload to prevent the browser from refreshing.
12. Instead of using localstorage to generate an incremented index, IIFE(immediately invoked function expressions) will
    be a better choice to populate the unique index
13. think about how to solve infinite loop problem with useEffect and useState 14 reviewed HOW TO UPDATE data within the
    original item in the array or object

```typescript
    parentRecords.find(p => {
	if (p.date === k) {
		p.average = avg
		p.highest = high
		p.lowest = low
		p.frequency = v.length
		setParentRecords([...parentRecords])
	} else {
		setParentRecords(prev => [...prev, {...recordObj}])
	}
})
```


    
