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
            id: post.id,
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

const getPost= async id => {
    const response= await api.get(`/posts/${id}`);
    const post= response.data;
    const author= await getUser(post.userId);
    const image= await getPostImage(id);
    const anotherContent= [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio molestiae numquam quam, error voluptates saepe, laboriosam facere id sapiente qui, labore nemo ab. Reprehenderit illum magnam minima ad mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores dolore nesciunt quae! Veritatis nam rem numquam, enim laboriosam obcaecati quibusdam! Porro ullam, iste distinctio odit aut nulla amet commodi!',
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis reiciendis totam doloribus odit atque itaque delectus aperiam! Voluptatibus quos reprehenderit illum esse assumenda deleniti, qui harum at dolorum, nemo impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quibusdam veniam rem deserunt et quam, mollitia ratione exercitationem repellat modi inventore impedit quisquam! Aut eaque, adipisci veritatis in maiores harum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tempora, necessitatibus a in explicabo nam, amet suscipit odio dignissimos, velit quia officiis. Magni totam distinctio rem error, ex cum dolor!',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, aliquid laboriosam rerum pariatur aspernatur sequi repellendus at doloribus. Explicabo ipsum autem, praesentium cupiditate reprehenderit nesciunt quae doloribus maiores sed animi.',
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate voluptatem illum soluta sit recusandae cum voluptates eaque! Eligendi illo saepe asperiores voluptatibus ipsa, ullam laborum a veniam animi consequuntur culpa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in sit ut tenetur dicta eius quibusdam debitis quia vel, molestias quo qui facilis fuga aut nihil obcaecati libero vitae culpa!'
    ];

    return {
        id,
        heading: post.title,
        firstContent: post.body,
        anotherContent,
        image,
        author
    };
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

const getComments= async postId => {
    const response= await api.get(`posts/${postId}/comments`);
    return response.data;
};

const sendComment= async (postId, comment) => {
    const response= await api.post(`posts/${postId}/comments`, comment);
    return response.data;
};

// ---------- ----------

export {getPostListInfo, getPost, getBlogData, getFAQ, getComments, sendComment};