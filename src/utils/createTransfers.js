import axios from 'axios';

async function createTransfers(dataTransfers) {
    try {
      const response = await axios.post('http://localhost:8000/api/transfers', dataTransfers);
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

export default createTransfers