import React, { FC } from 'react'
import { IUser } from '../types/types';
import UserItem from './UserItem';
import { useNavigate } from 'react-router-dom';

interface  UserListProps {
  users: IUser[]
}

const UserList:FC<UserListProps> = ({users}) => {
  const hist = useNavigate();

  return (
    <div>
      {users.map(user => <UserItem onClick={(user) => hist('/user/' + user.id)} key={user.id} user={user} />)}
    </div>
  )
}

export default UserList;