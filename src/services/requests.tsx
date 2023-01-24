import http from '../utils/http-common';


class Requests {
    login(data:any){
        return http.post('/login', data)    
    };
    partida(data:any){
        const token = sessionStorage.getItem('tokenGameDoMilhao');
        
        return http.post('/nova-partida', {data: data} ,{
            headers:{
                'Authorization': token
            }})
        };
    responder(data:any){
        const token = sessionStorage.getItem('tokenGameDoMilhao');

        return http.post('/responder', data ,{
            headers:{
                'Authorization': token
            }})
    };    
};


export default new Requests;