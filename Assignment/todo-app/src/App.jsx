import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import FilterComponent from './components/FilterComponent'
import TodoForm from './components/TodoForm'

function App() {
  const [searchQuery, setSearchQuery] = useState('')    //state lifting
  const [newTask, setNewTask] = useState({})
  
  return (
    <>
    <FilterComponent setSearchQuery={setSearchQuery} />
    <TodoList searchQuery={searchQuery} newTask={newTask} /> 
    <TodoForm setNewTask={setNewTask}/> 
    </>
  )
}

export default App
