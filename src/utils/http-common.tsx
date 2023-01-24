import axios from "axios";

// console.log(process.env.REACT_APP_BASE_URL)

export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + '/api/v1',
    headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    }
});