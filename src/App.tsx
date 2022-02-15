import React, { useEffect, useState } from 'react'
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser, ITodo } from './types/types';
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';

function App() {
  const [users, setUsers] = useState<IUser[]>([
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
      },
    },
    {
      "id": 2,
      "name": "Antonia Mueller",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
      },
    },
    {
      "id": 3,
      "name": "Lyle Leannon",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
      },
    },

  ]);
  const [todo, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

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
    <div>
      <Card onClick={(num) => console.log(num, 'click')} variant={CardVariant.primary} height='200px' width='200px'>
        <button>Кнопка</button>
      </Card>
      <List items={users} renderItem={(user) => <UserItem user={user} key={user.id} />} />
      <List items={todo} renderItem={(item) => <TodoItem todo={item} key={item.id} />} />
    </div>
  )
}

export default App;