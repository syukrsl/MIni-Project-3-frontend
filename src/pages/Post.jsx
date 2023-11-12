import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function Post() {
    const [post, setPost] = useState({});
    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data.data))
    })

    function handleDelete() {
        fetch(`http://localhost:8080/api/posts/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if (data.result === 200) {
                navigate('/posts')
            }
        })
    }

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <img src={post.image} />
            <button onClick={handleDelete}>Delete</button>
            <div>
                <Link to={`/posts/${id}/edit`}>Edit Post</Link>
                <Link to="/posts">Back to Posts</Link>
            </div>
        </>
    )
}
export default Post;