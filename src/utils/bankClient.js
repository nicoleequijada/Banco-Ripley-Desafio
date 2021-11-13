import axios from 'axios';


async function getBankList() {
    try {
      const response = await axios.get('https://bast.dev/api/banks.php');
      return response.data
    } catch (error) {
      console.error(error);
    }
  }

export default getBankList