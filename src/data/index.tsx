import axios from "axios";

const Instance = axios.create({
    baseURL: 'https://viacep.com.br/ws/',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json*',
      'Access-Control-Allow-Origin': 'http://localhost:5173/',      
    }
  });

  export default Instance;