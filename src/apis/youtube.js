import axios from 'axios'


const KEY = 'AIzaSyCxYrl8i5iv06oXTibhsdjX7xKv9LDPa60';

export default axios.create({

    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});