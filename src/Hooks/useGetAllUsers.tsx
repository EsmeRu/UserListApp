import {useEffect, useState} from 'react';
import {getAllUsers} from '../Services/getAllUsers';
import {User} from '../Models/User';

export const useGetAllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const handleGetAllUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleGetAllUsers();
  }, []);

  return users;
};
