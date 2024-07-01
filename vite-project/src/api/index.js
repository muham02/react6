import axios from "axios";

const user = axios.create({
  baseURL:" https://api.tvmaze.com/shows ",
  headers:{
    "Content-Type":"application/json"
  },timeout:1000
})