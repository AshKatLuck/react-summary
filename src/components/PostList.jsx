import Post from "./Post";
import classes from './PostList.module.css';

function PostList() {

    return (<ul className={classes.posts}>
         <Post author="Max" body="React is good"/>
        <Post author="Asha" body="I likke react now"/>
    </ul>)
    
}

export default PostList;