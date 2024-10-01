import axios from 'axios';

const postsPerPage= 5;

const api= axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 5000
});

// ---------- ----------

const getNumberPages= async author => {
    const response= await api.get(`posts${author? `?userId=${author.id}` : ''}`);
    const numberOfPosts= response.data.length;

    return Math.ceil(numberOfPosts/postsPerPage);
};

const getPosts= async (page, author) => {
    const response= await api.get(`posts?${author? `userId=${author.id}&` : ''}_limit=${postsPerPage}&_page=${page}`);

    const list= response.data.map(async post => {
        const image= await getPostImage(post.id);
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

const getUsers= async () => {
    const response= await api.get('users');
    return response.data;
};

const getUser= async id => {
    const response= await api.get(`users/${id}`);
    return response.data;
};

const getPostImage= async (postId) => {
    const url= `https://picsum.photos/id/${postId+70}/300/200`;

    return await axios.get(url)
        .then(() => url)
        .catch(() => '');
};

// ---------- ----------

const getPostListInfo= async (page, author) => {
    const [newTotalPages, newPosts]= await Promise.all([
        getNumberPages(author),
        getPosts(page, author)
    ]);

    return {newTotalPages, newPosts};
};

const getBlogData= async () => {
    const ownerData= await getUser(3);
    const authorsData= await getUsers();
    const smallOwnerPhoto= 'https://picsum.photos/id/64/300?grayscale',
        bigOwnerPhoto= 'https://picsum.photos/id/64/400/300',
        ownerDescription= 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dolore illo amet, doloribus voluptas, fuga aspernatur sequi deleniti, error aliquid modi laboriosam facere et! Provident ad temporibus voluptas aspernatur in.',
        blogDescription= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';

    return {
        owner: {
            ...ownerData,
            smallPhoto: smallOwnerPhoto,
            bigPhoto: bigOwnerPhoto,
            description: ownerDescription
        },
        blogName: ownerData.name,
        blogDescription,
        authors: authorsData
    };
};

const getFAQ= () => {
    const exampleFaq= [{
            question: 'Vitae non recusandae quasi perspiciatis tempora dolorem pariatur asperiores?',
            answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo fuga voluptatem, suscipit accusamus molestiae nobis, eum eligendi iure amet maxime earum.'
        }, {
            question: 'Voluptas beatae excepturi voluptates ipsum nemo aliquam laborum nostrum adipisci qui commodi rem a, nesciunt error libero doloremque dolor sapiente ab ipsam?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate, quod sapiente necessitatibus magnam modi commodi quam consequuntur laborum unde. Libero, officia id. Animi ad natus, vel labore veritatis minima.'
        }
    ];

    return new Promise(resolve => {
        setTimeout(() => {
            let faq= [];
            for(let i=0; i<5; i++){
                faq.push(exampleFaq[0]);
                faq.push(exampleFaq[1]);
            }
            resolve(faq);
        }, 1000);
    });

};

// ---------- ----------

export {getPostListInfo, getBlogData, getFAQ};