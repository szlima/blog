import { useContext } from "react";

import { BlogContext } from "../contexts/BlogContext";

function Header(){
    const {blogName, blogDescription}= useContext(BlogContext);

    return (
        <header className="header">
            <h1 className="header__heading">{blogName}</h1>
            <p className="header__description">{blogDescription}</p>
        </header>
    );
}

export default Header;