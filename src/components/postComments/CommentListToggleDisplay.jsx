import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from 'react-icons/md';

function CommentListToggleDisplay({isDisplaying, toToggle}){

    return (
        <button type='button' className='comment-list__toggle-display' onClick={toToggle}>
            {
                isDisplaying ? <>
                    <MdKeyboardDoubleArrowUp />
                    <span>hide comments</span>
                    <MdKeyboardDoubleArrowUp />
                </> : <>
                    <MdKeyboardDoubleArrowDown />
                    <span>show comments</span>
                    <MdKeyboardDoubleArrowDown />
                </>
            }
        </button>
    );
}

export default CommentListToggleDisplay;