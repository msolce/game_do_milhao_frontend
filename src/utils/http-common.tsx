import axios from "axios";

export default axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL + '/api/v1',
    baseURL: 'http://localhost:3050' + '/api/v1',
    headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    }
});