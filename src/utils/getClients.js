import axios from 'axios';

async function getClients() {
    try {
      const response = await axios.get('http://localhost:8000/api/recipient');
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

export default getClients