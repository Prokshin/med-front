import axios from "axios";

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 401) {
        //place your reentry code
        console.log('401')
    }
    return error;
});


export const httpService = () => {
    return axios.create({
        baseURL: "http://localhost:5001/",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        },
        responseType: "json",
    })
}
