import axios from "axios";

 const user = axios.create({
    baseURL:" https://api.tvmaze.com",
    headers:{
  "Content-type":"application/json"
    },
    timeout:10000
})
export default user