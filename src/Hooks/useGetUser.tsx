import {useEffect, useState} from 'react';
import {getUser} from '../Services/getUser';
import {User} from '../Models/User';

export const useGetUser = (id: string) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const handleGetUser = async () => {
      try {
        const response = await getUser(id);
        setUser(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleGetUser();
  }, []);

  return user;
};
