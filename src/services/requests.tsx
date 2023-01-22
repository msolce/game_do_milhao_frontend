import http from '../utils/http-common';

console.log(process.env)

class Requests {
    login(data:any){
        console.log("🚀 ~ file: requests.tsx:5 ~ Requests ~ login ~ data", data)
        return http.post('/login', data)    
    }    
};


export default new Requests;