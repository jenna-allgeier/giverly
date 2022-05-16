import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const Client = axios.create({ baseURL: 'http://127.0.0.1:8000' })

export default Client