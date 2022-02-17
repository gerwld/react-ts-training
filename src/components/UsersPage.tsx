import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types';
import Card, { CardVariant } from './Card';
import EventsExaple from './EventsExaple';
import List from './List';
import UserItem from './UserItem';

const UsersPage:FC = () => {

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

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <EventsExaple />
      <Card onClick={(num) => console.log(num, 'click')} variant={CardVariant.primary} height='200px' width='200px'>
        <button>Кнопка</button>
      </Card>
      <List items={users} renderItem={(user) => <UserItem user={user} key={user.id} />} />
    </div>
  )
}

export default UsersPage