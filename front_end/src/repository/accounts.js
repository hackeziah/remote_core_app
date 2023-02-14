import axios from "axios";
const ConfigURL = 'http://127.0.0.1:8000/api/'





export async function getAccounts() {
    return await axios.get(`${ConfigURL.apiUrl}/`).then(response => {  
        console.log(response.data.results)                                   

        return response.data.results
    }).catch(error => {
        throw error;
    });
}
