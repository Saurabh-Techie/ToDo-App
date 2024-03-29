import React from 'react'

function TodoInput() {
  return (
    <>
      <h1>ToDo App</h1>
      <div className="input-container">
        <input type="text" className='input-box-todo'/>
        <button className='add-btn'>+</button>


      </div>
    </>
  )
}

export default TodoInput