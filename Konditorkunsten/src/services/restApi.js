import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Erstat med den faktiske API-endepunkts-URL
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getHelloWorld() {
    return apiClient.get('/helloworld');
  },
  greet(name) {
    return apiClient.post('/greet', { name });
  }
};
