import { createContext, useState, useEffect } from "react";

const post= {
    heading: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    firstContent: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto.",
    author: "Leanne Graham",
    image: "https://picsum.photos/seed/picsum/300/200"
};

const owner= {
    name: 'Clementine Bauch',
    photo: 'https://picsum.photos/id/64/300?grayscale',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod dolore illo amet, doloribus voluptas, fuga aspernatur sequi deleniti, error aliquid modi laboriosam facere et! Provident ad temporibus voluptas aspernatur in.'   
};

const authors= ["Leanne Graham", "Ervin Howell", "Patricia Lebsack"];

const blogName= owner.name,
    blogDescription= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    totalPages= 10, currentPage= 3;

const initialState= {
    blogName,
    blogDescription,
    owner,
    authors,
    posts: [],
    totalPages,
    currentPage
};

const BlogContext= createContext(initialState);

function BlogProvider({children}){
    const [posts, setPosts]= useState([]);

    useEffect(() => {
        setPosts([post, post, post]);
    }, []);

    return (
        <BlogContext.Provider value={{
            blogName, blogDescription, owner,
            authors, posts, totalPages, currentPage
        }}>
            {children}
        </BlogContext.Provider>
    );
}

export {BlogContext, BlogProvider};