import axios from 'axios';
import {User} from '../Models/User';

export const getUser = (id: string) =>
  axios.get<{
    data: User;
  }>(`https://reqres.in/api/users/${id}`);
