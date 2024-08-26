
function PostPreview({post}){
    const {title, firstContent, image, author}= post;    

    return (
        <div className="post--preview">
            <h2 className="post__title">{title}</h2>
            <div className="preview-wrapper">
                <img className="post__image" src={image} alt='Post image'/>
                <div className="preview-wrapper__text">
                    <p className="post__content">{firstContent}</p>
                    <p className="post__author">{author}</p>
                </div>                
            </div>
        </div>
    );
}

export default PostPreview;