import { useNavigate } from 'react-router-dom';

function PostPreview({post}){
    const navigate= useNavigate();
    const {id, heading, firstContent, image, author}= post;

    const openFullPost= () => navigate(`/posts/${id}`);

    return (
        <div className='post--preview' onClick={openFullPost}>
            <h2 className='post__heading'>{heading}</h2>
            <div className='preview-wrapper'>
                {image && <img className='post__image' src={image} alt='Post image'/>}
                <div className='preview-wrapper__text'>
                    <p className='post__content'>{firstContent}</p>
                    <p className='post__author'>{author}</p>
                </div>                
            </div>
        </div>
    );
}

export default PostPreview;