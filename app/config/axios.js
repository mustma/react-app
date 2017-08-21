import axios from 'axios';
import { GLOBAL_API_DOMAIN } from './config';

axios.defaults.baseURL = GLOBAL_API_DOMAIN;

export default axios;