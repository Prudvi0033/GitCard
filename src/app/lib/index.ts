import axios from 'axios'

const getData = async (name : string) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${name}`)
        return response.data
        
    } catch (error) {
        console.error("Failed to fetch the users data");
        return null;
    }
}

export default getData