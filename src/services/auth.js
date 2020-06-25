import axios from 'axios';

export function login(usernameOrEmail, password) {
    return axios.post('/auth/signin', {
        password,
        usernameOrEmail
    })
}

export function signup(name, email, username, password) {
    return axios.post('/auth/signup', {
        password,
        username,
        name, 
        email
    })
}