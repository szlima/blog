
const STATUS= {
    standBy: 'stand-by',
    loading: 'loading',
    unavailable: 'unavailable',
    completed: 'completed',
    notFound: 'not-found'
};

const DATA_TYPE= {
    blogData: 'Blog data',
    postList: 'Post list',
    post: 'Post',
    commentList: 'Comment list',
    comment: 'Comment',
    faq: 'FAQ'
};

const ERROR_TYPE= {
    loading: 'Loading error',
    submission: 'Submission error'
};

const POST_LIST_TYPE= {
    fullList: 'full-list',
    listByAuthor: 'list-by-author'
};

const NEW_COMMENT_INFO= {
    required: 'The message field is required!',
    completed: 'Thanks for your comment!',
    unavailable: 'Submission error: Comment not sent.'
};

export {STATUS, DATA_TYPE, ERROR_TYPE, POST_LIST_TYPE, NEW_COMMENT_INFO};