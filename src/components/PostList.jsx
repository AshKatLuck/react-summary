import Post from "./Post";
import classes from './PostList.module.css';
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useEffect, useState } from "react";

function PostList({ modalIsVisible, hideModal }) {  
    const [isFetching, setIsFetching] = useState(false);
    const [posts, setPosts] = useState([]);
    useEffect(() => { 
        console.log("inside useEffect");
        const loadPosts = async () => {
            setIsFetching(true);
            const response = await fetch("http://localhost:8080/posts");
            const responseData = await response.json();
            // console.log(responseData.posts);
            setPosts(responseData.posts);
            setIsFetching(false);
        }
        loadPosts();
    },[])
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
        { !isFetching && modalIsVisible &&
         <Modal onClose={hideModal}>
                <NewPost
                    onCancel={ hideModal }
                    onAddNewPost={onAddNewpost}
                />
        </Modal>
        }
        {!isFetching && posts.length > 0 ?
            <ul className={ classes.posts }>
                { posts.map(post => <Post author={ post.author } body={ post.body } key={ post.body} />)}
            </ul> :
            !isFetching&&<div style={ { textAlign: "center", color:"white"}}>
                <h2>There are no posts now!</h2>
                <p>Try adding some</p>
            </div>
        }
        {isFetching && <p style={{textAlign:'center', color:'white'}}>Loading Posts..</p>}
        
       
    </>)    
}

export default PostList;