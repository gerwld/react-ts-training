import React from 'react'
import UsersPage from './components/UsersPage';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import TodosPage from './components/TodosPage';
import UsersItemPage from './components/UsersItemPage';
import TodosItemPage from './components/TodosItemPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/todos">Todos</NavLink>

      </div>
      <Routes>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/todos/:id" element={<TodosItemPage />} />
        <Route path="/user/:id" element={<UsersItemPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;