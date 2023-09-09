import axios from 'axios';


export const getMovieDetailsById = async (imdbId) => {
    const options = {
        method: 'GET',
        url: 'https://movie-database-alternative.p.rapidapi.com/',
        params: {
            r: 'json',
            i: imdbId
        },
        headers: {
            'X-RapidAPI-Key': '2b81a37ff9msh96f013dfc38bb1bp1fe1bejsn1ca098a06261',
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
