import axios from "axios";

const postsPerPage= 5;

const api= axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 5000
});

const getNumberPages= async author => {
    const response= await api.get(`posts${author? `?userId=${author.id}` : ''}`);
    const numberOfPosts= response.data.length;

    return Math.ceil(numberOfPosts/postsPerPage);
};

const getPosts= async (page, author) => {
    const response= await api.get(`posts?${author? `userId=${author.id}&` : ''}_limit=${postsPerPage}&_page=${page}`);

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

const getInitialPostsInfo= async author => {
    const newCurrentPage= 1;
    const [newTotalPages, newPosts]= await Promise.all([
        getNumberPages(author),
        getPosts(newCurrentPage, author)
    ]);

    return {newCurrentPage, newTotalPages, newPosts};
};

const getUser= async id => {
    const response= await api.get(`users/${id}`);
    return response.data;
};

const getBlogData= async () => {
    const user= await getUser(3);
    const ownerPhoto= 'https://picsum.photos/id/64/300?grayscale',
        ownerDescription= 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dolore illo amet, doloribus voluptas, fuga aspernatur sequi deleniti, error aliquid modi laboriosam facere et! Provident ad temporibus voluptas aspernatur in.',
        blogDescription= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

    return {
        owner: {
            ...user,
            photo: ownerPhoto,
            description: ownerDescription
        },
        blogName: user.name,
        blogDescription
    };
};

const getUsers= async () => {
    const response= await api.get('users');
    return response.data;
};

export {getPosts, getInitialPostsInfo, getBlogData, getUsers};