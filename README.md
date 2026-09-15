# Dev Stack Project
Dev Stack project is a React-based web application. It's helps developers to explore different technologies and build their ideal development. Users can browse technologies, view their details, add technologies to their stack, remove individual technologies, and clear the entire stack.

## Live Demo
Live Demo: 

## GitHub Repository
GitHub: https://github.com/Hanjala13/dev-stack

-------------------

## Technologies Used
1. React
2. TypeScript
3. Vite
4. Tailwind CSS
5. React Toastify
6. JSON
7. DaisyUI

## Special Features
1. Add technologies to your stack
2. Toast notifications
3. Selected technology count

----------------------------------

# Question & Answer

1. What is JSX, and why is it used in React?
Ans: JSX (JavaScript XML) is a React syntax. It lets us write HTML-like markkup inside JavaScript or TypeScript.


2. What is the difference between props and state?
Ans: Props and State are both use for data handling but they have different purposes. Props a is way to send data from parent component to child component and State is own data of component which can changes over the time.


3. What does the useState hook do, and where did you use it in this project?
Ans: In this project I used useState to manage the json data and the changing UI state.


4. What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: useEffect hook is used to perfrom side effects in React. I used it in this project to load the json data when the component renders and update the state with the fetched data.


5. Why does every item in a .map() list need a unique key prop?
Ans: Each item in a .map() list needs a unique key so React can identify each item and efficiently and avoid unnecessary re-rendering.


6. What is conditional rendering? Show one place you used it (example: the empty stack message).
Ans: Conditional rendering means showing different UI based on a condition. In this project, I Used it to show an empty stack message when the stack has no items.


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Ans: A parent sends data to a child through props. To send data back, the parent passes a callback function as a prop, and the child calls that function with the data.
