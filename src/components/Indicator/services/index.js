import axios from 'axios';

export const getDistance = () => {
    return axios.get(`http://192.168.1.157:3000/sensor`);
}