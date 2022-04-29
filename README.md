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
    
