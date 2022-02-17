import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import List from './List';
import TodoItem from './TodoItem';

const TodosPage: FC = () => {

  const [todo, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos', {
        params: {
          _limit: 10
        }
      });
      console.log(response.data);

      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <List items={todo} renderItem={(item) => <TodoItem todo={item} key={item.id} />} />
  )
}

export default TodosPage