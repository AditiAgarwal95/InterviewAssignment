# InterviewAssignment
Todo APP with operations
Step to run:
Change to todo-app directory
1. npm install
2. npm run dev

Please note this app is created using Vite.

Notes:
1. Search, Delete and Add implemented.
2. Search has been implemented with debouncing for optimization.
3. useRef has been used for persisting the value of timer in between renders.
4. Add task has been implemented inside TodoForm, but the related code inside TodoList has been commented.
5. Because I tried doing it through State Lifiting since only one level of child components was involved.
  But although it was working, it had some issue. So, I wanted to implement it using context API.
  So that TodoFOrm and TodoList could communicate directly through Contextn API.
  But time didn't allow, so this is my final code.
6. Key prop has not been given while rendering the data list because I planned on generating a unique key rather than using
   index as the key.

