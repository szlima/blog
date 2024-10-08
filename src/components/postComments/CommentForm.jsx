import { useContext, useState } from 'react';

import { sendComment } from '../../utils/apiFunctions';
import { isEmpty } from '../../utils/dataFunctions';

import { PostContext } from '../../contexts/PostContext';

function CommentForm(){
    const {currentPost}= useContext(PostContext);
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [message, setMessage]= useState('');

    const handleMessageField= e => {
        if(e.target.value)
            e.target.parentNode.parentNode.classList.remove('comment-form--alert');

        setMessage(e.target.value);
    }

    const handleSubmit= e => {
        e.preventDefault();

        if(isEmpty(message)){
            e.target.parentNode.parentNode.classList.add('comment-form--alert');
            return;
        }

        const newComment= {
            postId: currentPost.id,
            name: name ? name : 'Anonymous',
            email,
            message            
        };

        sendComment(newComment);
    };

    return (
        <div className='comment-form'>
            <h4 className='comment-form__heading'>Leave a comment</h4>
            <p className='comment-form__alert'>The message field is required!</p>
            <form className='comment-form__wrapper'>
                <input type='text' className='comment-form__field comment-form__field--input'
                    placeholder='Name' value={name} onChange={e => setName(e.target.value)}/>
                <input type='text' className='comment-form__field comment-form__field--input'
                    placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
                <textarea className='comment-form__field comment-form__field--textarea'
                    placeholder='Your message' value={message} onChange={handleMessageField}></textarea>
                <button type='submit' className='comment-form__submit' onClick={handleSubmit}>Post</button>
            </form>
        </div>
    );
}

export default CommentForm;