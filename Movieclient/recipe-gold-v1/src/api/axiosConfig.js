import axios from 'axios';

export default axios.create({
    baseURL: 'https://e3b6-87-245-93-237.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});