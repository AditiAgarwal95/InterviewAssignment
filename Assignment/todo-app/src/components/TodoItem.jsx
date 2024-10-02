import React from 'react';
import './todoItem.css'

function TodoItem({todoItem, setTodoId}) {

function handleDelete(e, todoItem){
    setTodoId(todoItem.id)
}

  return (
    <div>
      <ul className='itemList'>
        <li> {todoItem.id}  </li>
        <li> {todoItem.desc} </li>
        <li> {todoItem.status} </li>
        <li><button onClick={(todoItem)=>{ handleEdit(e, todoItem)}}> Edit </button> 
        <button onClick={(e)=> { handleDelete(e, todoItem)}}> Delete </button></li>
      </ul>
    </div>
  )
}

export default TodoItem
