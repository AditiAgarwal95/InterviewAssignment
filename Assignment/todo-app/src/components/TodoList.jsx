import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem';
import { todoArray } from '../todoData';

function TodoList({searchQuery}) {

 const [todoData, setTodoData] = useState([...todoArray])
 const [todoId, setTodoId] = useState(0)
 const [filteredData, setFilteredData] = useState([])

    useEffect(()=>{
        setFilteredData([...todoData])
    }, [todoData])

    useEffect(()=>{
        setTodoData(todoData.filter((todo)=>{
            return todo.id !== todoId
        }))
    }, [todoId])

   // filter the todo list when search query changes
   useEffect(()=>{
     setFilteredData(todoData.filter((todo)=>{
         return todo.status.toLowerCase().includes(searchQuery.toLowerCase())
     }))
   }, [searchQuery])

//    useEffect(()=>{
//       setTodoData([...todoData, {...newTask}])
//    }, [newTask])

  return (
    <div>
      {
        filteredData.map((item)=>{
            return <TodoItem todoItem={item} setTodoId={setTodoId} />
        })
      }
    </div>
  )
}

export default TodoList
