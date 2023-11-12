import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPost() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:8080/api/posts', {
            method: 'POST',
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
                navigate('/posts')
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <h1>New Post</h1>
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
        </>
    )
}

export default NewPost;