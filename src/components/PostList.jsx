import Post from "./Post";
import classes from './PostList.module.css';
import NewPost from "./NewPost";

function PostList() {

    return (<>
        <NewPost/>
        <ul className={ classes.posts }>
         <Post author="Max" body="React is good"/>
        <Post author="Asha" body="I likke react now"/>
        </ul>
    </>)
    
}

export default PostList;