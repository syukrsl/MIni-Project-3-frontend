import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Post() {
    const [post, setPost] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/api/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data.data))
    })

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <img src={post.image} />
            <div>
                <Link to={`/posts/${id}/edit`}>Edit Post</Link>
                <Link to="/posts">Back to Posts</Link>
            </div>
        </>
    )
}

export default Post;