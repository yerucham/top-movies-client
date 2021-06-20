import axios from 'axios';

const url = 'https://localhost:44329/api/Movies/';

export default {

    getAllMovies() {
        return axios.get(url);
    },
    addMovie(movie) {
        return axios.post(url, movie);
    },
    updateMovie(id, movie) {
        return axios.put(url + `?id=${id}`, movie);
    },
    getMovie(id) {
        return axios.get(url + `${id}`);
    },
    deleteMovie(id) {
        return axios.delete(url + `?id=${id}`)
    },
};
