import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{
    return axios.create({
        baseURL: process.env.REACT_APP_BACKEND_ENDPOINT
    })
}