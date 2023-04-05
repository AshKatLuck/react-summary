import classes from "./NewPost.module.css"

function NewPost(props) {    
    return (<form className={classes.form}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={props.onBodyChange}/>
        </p>
        <p>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required onChange={props.onAuthorChange}></input>
        </p>
        <p className={classes.actions}>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Submit</button>
        </p>
    </form>)
}

export default NewPost;