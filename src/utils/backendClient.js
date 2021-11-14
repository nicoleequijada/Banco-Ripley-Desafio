import axios from 'axios';

async function postRecipient (recipient) {
    try {
        const response = await axios.post('http://localhost:8000/api/recipient', recipient);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export default postRecipient