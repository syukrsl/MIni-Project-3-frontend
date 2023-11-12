import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

function EditPost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/api/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                setTitle(data.data.title);
                setDescription(data.data.description);
                setImage(data.data.image);
            })
    }, [id])

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:8080/api/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                image
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.result === 200) {
                navigate('/posts/' + id)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <h1>Edit Post</h1>
            <form>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                <br />
                <label>Description</label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
                <br />
                <label>Image</label>
                <input type="text" value={image} onChange={e => setImage(e.target.value)} />
                <br />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            <Link to={`/posts/${id}`}>Back to Post Page</Link>
            <Link to="/posts">Back to Posts</Link>
        </>

    )
}

export default EditPost;