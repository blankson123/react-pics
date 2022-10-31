import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID eaejKd24ukm9VH47bfhcf8IlfOYKw_j5QDbQ_hiw8OA',

    }
});