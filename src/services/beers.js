import Axios from 'axios'

const url = "https://api.punkapi.com/v2/beers"

export default {
    getAllBeers() {
        return Axios.get(url)
        .then( response => response.data)
    },
    getOneBeerId(id) {
        return Axios.get(url+'/'+id)
        .then(response => response.data)
    },
    updateOneBeer(id) {
        return Axios.post(url+'/'+id)
        .then(response => response.data)
    }
}