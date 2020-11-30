import axios from 'axios'

const KEY = 'AIzaSyCX5LrIcLHjvgoHzxiegm332TR-rCV0fcA';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});