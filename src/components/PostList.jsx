import Post from "./Post";
import classes from './PostList.module.css';
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useState } from "react";

function PostList({ modalIsVisible, hideModal }) {  
    const [posts, setPosts] = useState([]);
    const onAddNewpost = (postData) => {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type':'application/json',
            }
        })
        setPosts((prevPosts) => [postData, ...prevPosts]);
        // console.log(posts);
    }
    return (<>
        { modalIsVisible &&
         <Modal onClose={hideModal}>
                <NewPost
                    onCancel={ hideModal }
                    onAddNewPost={onAddNewpost}
                />
        </Modal>
        }
        { posts.length > 0 ?
            <ul className={ classes.posts }>
                { posts.map(post => <Post author={ post.author } body={ post.body } key={ post.body} />)}
            </ul> :
            <div style={ { textAlign: "center", color:"white"}}>
                <h2>There are no posts now!</h2>
                <p>Try adding some</p>
            </div>
        }
        
       
    </>)    
}

export default PostList;