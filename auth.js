import Axios from 'axios';
import { AsyncStorage } from "react-native"
import { relativeTimeRounding } from 'moment';

const API_URL = 'http://localhost:3000/auth/';
const axios = Axios.create({
  baseURL: API_URL,
})

const login = (params) => axios.post('/login', params);
const signup = (params) => axios.post('/signup', params);

export default {
  login,
  signup
}