import { nanoid } from 'nanoid';
import Form from '../components/Form/Form';
import Text from '../components/Text/Text';
import { useEffect, useState } from 'react';
import TodoList from '../components/TodoList/TodoList';

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem('todos');
    if (savedTodos !== null) {
      return JSON.parse(savedTodos);
    }
    return [];
  });
  const addNewTodo = task => {
    const newTodo = {
      id: nanoid(5),
      text: task,
    };
    setTodos(prev => {
      return [...prev, newTodo];
    });
  };

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };
  return (
    <>
      <Form onSubmit={addNewTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};

export default Todos;
