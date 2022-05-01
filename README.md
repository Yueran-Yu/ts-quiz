- dangerouslySetInnerHTML
- the original json file, the type of category is number "https://opentdb.com/api.php?amount=10&category=9", but at
  first, I thought it mst be string, but after double check the API structure, I find out that the type of Category's
  parameter should be numbered!
- the double exclamation marks ***!!value***  is used to cast value to boolean
- the following values are considered by javascript to be falseys:
    - Empty string: ""
    - 0
    - null
    - undefined
    - NaN
- the following values are considered by javascript to be truthys:
    - Object: {}
    - Array: []
    - Not empty string "anything"
    - Number other than zero: 2,3,5
    - Date: new Date()
- We can't pass **isCorrect** property to **QuestionCard**, since we can never read the property =>isCorrect before
  the **userAnswers** object array to be rendered. So it will show this
  error: ```Uncaught error: TypeError: Cannot read properties of undefined (reading 'isCorrect')```
- Property **number**, has two sides, one it should be used as the index of Questions, so it should be started from 0.
  Another side, it should be displayed on the screen as the first question count, so it should be ***1*** in the screen
  when the game start.

Now I need to consider store some data in the browser.

- What should I store?
    - The condition board should be stored, since if the user refresh the page, the condition will back to the initial
      state, this is not professional.
    -
- Where should I store?

#### Persist the data by encapsulating a custom hook - **useLocalStorage**

- Implement react-beforeunload to prevent the browser from refreshing.
-Instead of using localstorage to generate an incremented index, IIFE(immediately invoked function expressions) will be a better choice to populate the unique index

    
