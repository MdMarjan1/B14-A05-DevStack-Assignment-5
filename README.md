# B14-A05-DevStack-Assignment-5
## Project Name: Dev Stack

**Dev Stack** is a web app that helps developers discover and curate the technologies they need for their next project. Browse popular frontend, backend, database, and DevOps tools by category, then build your own personalized tech stack by adding the ones you like — all in one clean, responsive interface.

## Technology: ES6, TypeScript, React, Daisy UI, Tailwindcss, React-Icon, React-toastify, vite, json, ApI

## Features

- 🗂️ **Curated Tech Directory** — Browse technologies across categories (Frontend, Backend, Database, Language, Styling, DevOps), each showing difficulty level and rating.
- ➕ **Build Your Own Stack** — Add technologies to your personal stack with one click. Already-added items are automatically disabled to prevent duplicates, and you can remove a single item or clear the entire stack anytime.
- 🔔 **Instant Feedback, Fully Responsive** — Every action is confirmed with a toast notification, and the layout adapts seamlessly from mobile to desktop.


## Simple Answer
- **What is JSX, and why is it used in React?**- JSX means JavaScript xml, we use JSX  beacause its support to write HTMl in jsx file.

- **What is the difference between props and state?** - Props are data passed from a parent component to a child — read-only, the child can't change them. State data owned inside (mutable).

- **1. What does the `useState` hook do, and where did you use it in this project? 2 line answer daw  English** - lets a component hold and update its own local data, and updating it triggers a re-render so the UI reflects the new value.In this project, it was used to store the list of added technologies in the stack context, updating whenever a technology was added or removed.

- **What does the useEffect hook do, and why did you need it to load the JSON data?** - useEffect runs side effects — like fetching data — after a component renders, since data fetching can't happen directly during render.

- **Why does every item in a .map() list need a unique key prop?** - A unique `key` lets React correctly identify and track each list item across re-renders, so it updates only what changed instead of causing bugs from misplaced or reused DOM elements.

- **What is conditional rendering? Show one place you used it (example: the empty stack message).** - Conditional rendering means showing different UI based on a condition, and it was used in the Your Stack panel to show an empty-state message when no technologies are added, switching to the list once one is.

- **How do you pass data from a parent component to a child component, and how does a child send something back to the parent?** - A parent passes data to a child through props, and the child sends data back by calling a function passed down as a prop (like `addToStack` or `onRemove`), which updates state in the parent.





