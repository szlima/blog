import axios from "axios";

const postsPerPage= 5;

const api= axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 5000
});

const getNumberPages= async () => {
    const response= await api.get('posts');
    const numberOfPosts= response.data.length;

    return Math.ceil(numberOfPosts/postsPerPage);
};

const getPosts= async page => {
    const response= await api.get(`posts?_limit=${postsPerPage}&_page=${page}`);

    const list= response.data.map(async post => {
        const image= 'https://picsum.photos/300/200';
        const user= await getUser(post.userId);

        return {
            heading: post.title,
            firstContent: post.body,
            image,
            author: user.name
        };
    });

    return Promise.all(list);
};

const getUser= async id => {
    const response= await api.get(`users/${id}`);
    return response.data;
};

export {getNumberPages, getPosts};