1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById() can select an element by its unique id
  getElementsByClassName() can select multiple elements by class name
  querySelector() can select the first matching element using CSS selectors
  querySelectorAll() can select all matching elements


2. How do you create and insert a new element into the DOM?
- use document.createElement() function


3. What is Event Bubbling? And how does it work?
- a JavaScript event propagation method
  where an event starts from the target element and then moves to its parent elements


4. What is Event Delegation in JavaScript? Why is it useful?
- Event Delegation is a technique in JavaScript where a parent element handles events for its child elements
  It is useful cause it improves performance and reduces memory usage 

5. What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() can stop the browser's default behavior of an element
  stopPropagation() can stop the event from moving to parent elements