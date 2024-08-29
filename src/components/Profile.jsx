import { useContext } from "react";

import { BlogContext } from "../contexts/BlogContext";

function Profile(){
    const {owner}= useContext(BlogContext);

    return (
        <aside className="profile">
            <img className="profile__photo" src={owner.photo} alt="Profile photo"/>
            <p className="profile__description">{owner.description}</p>
        </aside>
    );
}

export default Profile;

