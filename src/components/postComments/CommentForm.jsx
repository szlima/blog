import { useContext, useEffect, useState } from 'react';

import { isEmpty } from '../../utils/dataFunctions';
import { STATUS, NEW_COMMENT_INFO } from '../../utils/dataInfo';

import { PostContext } from '../../contexts/PostContext';

function CommentForm(){
    const {
        newCommentStatus, resetNewCommentStatus, sendNewComment
    }= useContext(PostContext);
    const [alertInfo, setAlertInfo]= useState('');
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [body, setBody]= useState('');

    useEffect(() => {

        if((newCommentStatus === STATUS.completed) || (newCommentStatus === STATUS.unavailable))
            showSubmissionInfo();

    }, [newCommentStatus]);

    const showSubmissionInfo= () => {
        setAlertInfo(newCommentStatus);

        setTimeout(() => {
            setAlertInfo('');
            resetNewCommentStatus();
        }, 3000);
    };

    const getFormInfoClass= () => alertInfo ? `comment-form--${alertInfo}` : '';

    const handleBodyField= e => {
        if(e.target.value)
            setAlertInfo('');

        setBody(e.target.value);
    }

    const handleSubmit= e => {
        e.preventDefault();

        if(isEmpty(body)){
            setAlertInfo('required');
            return;
        }

        const newComment= {
            name: name ? name : 'Anonymous',
            email,
            body
        };

        sendNewComment(newComment);
    };

    return (
        <div className={`comment-form ${getFormInfoClass()}`}>
            <h4 className='comment-form__heading'>Leave a comment</h4>
            <p className='comment-form__alert'>{NEW_COMMENT_INFO[alertInfo]}</p>
            <form className='comment-form__wrapper'>
                <input type='text' className='comment-form__field comment-form__field--input'
                    placeholder='Name' value={name} onChange={e => setName(e.target.value)}/>
                <input type='text' className='comment-form__field comment-form__field--input'
                    placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
                <textarea className='comment-form__field comment-form__field--textarea'
                    placeholder='Your message' value={body} onChange={handleBodyField}></textarea>
                <button type='submit' className='comment-form__submit' onClick={handleSubmit}>Post</button>
            </form>
        </div>
    );
}

export default CommentForm;