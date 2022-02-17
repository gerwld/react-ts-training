import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { IUser } from '../types/types';
import {useParams} from 'react-router-dom';

interface UserItemPageParams {
  id: string;
}

const UsersItemPage:FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id);
      console.log(response.data);
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
    <button>Back</button>
    <h1>Страница пользователя {user?.name}</h1>
    <p>Email: {user?.email}</p>
    <p>Adress: {user?.address.city}, {user?.address.street}, {user?.address.zipcode}</p>
    </div>
  )
}

export default UsersItemPage