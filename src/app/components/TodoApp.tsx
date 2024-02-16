import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { addTodo, toggleTodo } from '../services/slice/todoSlice';

const TodoApp = () => {
    const dispatch: AppDispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos.todos);
    const [newTodo, setNewTodo] = useState('');
  
    const handleAddTodo = () => {
      if (newTodo.trim() !== '') {
        dispatch(addTodo(newTodo));
        setNewTodo('');
      }
    };
  
    const handleToggleTodo = (id: number) => {
      dispatch(toggleTodo(id));
    };
  
    return (
      <div>
        <h1>Lista de Todo</h1>
        <ul>
          {todos.map(todo => (
            <li key={todo.id} onClick={() => handleToggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </li>
          ))}
        </ul>
        <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    );
  };
  
  export default TodoApp;