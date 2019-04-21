import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 68d032e13466bfda6678062087932615ddd346fcd57f8d44bdb9b253b4de358d'
    }
});

