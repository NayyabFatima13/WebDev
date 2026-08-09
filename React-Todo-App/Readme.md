# 📝 Todo App

A full-stack Todo application built with **React.js** and **Express.js**.
The application allows users to create, edit, delete, and manage todos. Todo data is handled by an Express.js backend and stored persistently in a JSON file instead of browser localStorage.

## 🚀 Features

- ✅ Add new todos
- ✏️ Edit existing todos
- 🗑️ Delete todos
- ☑️ Mark todos as completed
- 🔄 Mark todos as incomplete
- 🔍 Filter todos:
  - All
  - Active
  - Completed
- ⏳ Loading state while fetching data
- ❌ Error handling in the UI
- 💾 Persistent todo data using Express.js and `todos.json`
- 🔄 Immutable React state updates
- 🌐 REST API for Todo operations
- 📱 Responsive user interface

---

## 🛠️ Technologies Used

### Frontend

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Fetch API
- React Hooks (`useState`, `useEffect`)

### Backend

- Node.js
- Express.js
- CORS
- File System (`fs`)
- REST API

### Data Storage

- JSON file (`todos.json`)

---

## 📂 Project Structure

```text
todo-react-app/
│
├── todo-backend/
│   │
│   ├── data/
│   │   └── todos.json
│   │
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── todo-frontend/
│   │
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoForm.jsx
│   │   │   ├── TodoItem.jsx
│   │   │   ├── TodoList.jsx
│   │   │   └── FilterButtons.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── package-lock.json
│
└── README.md

```
# ⚙️ Installation & Setup
## 1. Clone the Repository
git clone https://github.com/your-username/todo-react-app.git

## Move into the project:
cd todo-react-app

## 🖥️ Backend Setup
- Open a terminal and move into the backend folder:
cd todo-backend

### Install dependencies:
npm install
- Start the development server:
npm run dev
- The backend will run on:
http://localhost:5000
- You should see:
Server running on http://localhost:5000

## 💻 Frontend Setup
- Open another terminal.
- Move into the frontend folder:
cd todo-frontend
### Install dependencies:
npm install
- Start the React development server:
npm run dev
- The frontend will normally run on:
http://localhost:5173
- Open the URL in your browser.

# 🔗 API Endpoints
The React frontend communicates with the Express backend using REST APIs.
### Base URL:
http://localhost:5000/api/todos
- <img width="566" height="212" alt="image" src="https://github.com/user-attachments/assets/2a327f10-67be-45bd-8f36-d9f730faa32b" />

# 🔄 Application Flow
The application follows this architecture:
- <img width="204" height="232" alt="image" src="https://github.com/user-attachments/assets/57cf7b1a-7709-4b86-bee4-06f7cc8718cb" />

# 🧪 Testing the API
You can test the backend directly from your browser for GET requests.
- Test server
http://localhost:5000
- Test API
http://localhost:5000/api
- Get all todos
http://localhost:5000/api/todos
- For POST, PUT, and DELETE requests, you can use tools such as Postman or Thunder Client.

# 🚧 Future Improvements
The current project uses a JSON file as temporary storage. Future improvements could include:
- 🔐 User authentication
- 👤 Individual user todo lists
- 🗄️ MongoDB or MySQL database
- 🔎 Search todos
- 📅 Todo due dates
- ⭐ Todo priorities
- 🏷️ Todo categories
- 🌙 Dark mode
- 📱 Improved mobile UI
- 🔔 Notifications
- ☁️ Deployment
- 🔒 Better API validation
