
function Comment({message}){
    const {name, email, body}= message;    

    return (
        <div className='comment'>
            <div className='comment__author'>
                <p className='comment__author__name'>{name}</p>
                <p className='comment__author__email'>{email}</p>
            </div>
            <p className='comment__body'>{body}</p>
        </div>
    );
}

export default Comment;