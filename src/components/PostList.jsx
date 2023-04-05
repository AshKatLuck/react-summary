import Post from "./Post";
import classes from './PostList.module.css';
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

function PostList() {
    const [enteredBody, setEnteredBody] = useState("");
    const [author, setAuthor] = useState("");
    const onBodyChangeHandler = (event) => {
        setEnteredBody(event.target.value);
    }

    const onAuthorChangeHandler = (event) => {
        setAuthor(event.target.value)
    }
    return (<>
        <Modal>
            <NewPost onBodyChange={ onBodyChangeHandler } onAuthorChange={ onAuthorChangeHandler } />
        </Modal>
        
        <ul className={ classes.posts }>
            <Post author={author} body={enteredBody } />
        <Post author="Asha" body="I likke react now"/>
        </ul>
    </>)
    
}

export default PostList;