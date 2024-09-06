
function PostPreview({post}){
    const {heading, firstContent, image, author}= post;

    const hideImage= e => e.target.classList.add('post__image--not-found');

    return (
        <div className='post--preview'>
            <h2 className='post__heading'>{heading}</h2>
            <div className='preview-wrapper'>
                <img className='post__image' onError={hideImage} src={image} alt='Post image'/>
                <div className='preview-wrapper__text'>
                    <p className='post__content'>{firstContent}</p>
                    <p className='post__author'>{author}</p>
                </div>                
            </div>
        </div>
    );
}

export default PostPreview;