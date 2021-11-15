import axios from 'axios';

async function getTransfers() {
    try {
      const response = await axios.get('http://localhost:8000/api/transfers');
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

export default getTransfers