import axios from "axios";

 const user = axios.create({
    baseURL: import.meta.env.VITE__ENV__BASE,
    headers:{
  "Content-type":"application/json"
    },
    timeout:10000
})
export default user