import axios from "axios";

const api=axios.create({baseURL:"http://localhost:2000/anu"});

export default api;