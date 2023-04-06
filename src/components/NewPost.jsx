import classes from "./NewPost.module.css"
import { useState } from "react";

function NewPost({onCancel, onAddNewPost}) {   
    const [enteredBody, setEnteredBody] = useState("");
    const [author, setAuthor] = useState("");
      const onBodyChangeHandler = (event) => {
        setEnteredBody(event.target.value);
    }

    const onAuthorChangeHandler = (event) => {
        setAuthor(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author:author,
        }
        // console.log(postData);
        onAddNewPost(postData);
        onCancel();
    }

    return (<form className={classes.form} onSubmit={submitHandler}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={onBodyChangeHandler}/>
        </p>
        <p>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required onChange={onAuthorChangeHandler}></input>
        </p>
        <p className={classes.actions}>
            <button type="button" onClick={onCancel}>Cancel</button>
            <button type="submit">Submit</button>
        </p>
    </form>)
}

export default NewPost;