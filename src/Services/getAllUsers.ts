import axios from 'axios';
import {User} from '../Models/User';

export const getAllUsers = () =>
  axios.get<{
    data: User[];
  }>('https://reqres.in/api/users');
