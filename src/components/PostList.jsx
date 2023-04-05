import Post from "./Post";
import classes from './PostList.module.css';
import NewPost from "./NewPost";
import { useState } from "react";


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
        <NewPost onBodyChange={ onBodyChangeHandler } onAuthorChange={ onAuthorChangeHandler} />
        <ul className={ classes.posts }>
            <Post author={author} body={enteredBody } />
        <Post author="Asha" body="I likke react now"/>
        </ul>
    </>)
    
}

export default PostList;