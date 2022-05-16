import React from 'react'

export default function ToDo({todo}) {
  return (
    <div>
        <input type="checkbox" checked={todo.complete} />
        {todo.name}
    </div>
  )
}
