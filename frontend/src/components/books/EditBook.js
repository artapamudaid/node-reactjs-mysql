import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const updateBook = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/books/${id}`, {
            title: title,
            writer: writer,
        });

        navigate('/books');
    }

    useEffect(() => {
        getBookById();
    }, []);

    const getBookById = async () => {
        const response = await axios.get(`http://localhost:5000/books/${id}`);
        setTitle(response.data.title);
        setWriter(response.data.writer);
    }

    return (
        <div>
            <form onSubmit={ updateBook }>
                <div className="field">
                    <label className="label">Title</label>
                    <input className="input" type="text" placeholder="Title" value={ title }
                    onChange={ (e) => setTitle(e.target.value) } />
                </div>
                <div className="field">
                    <label className="label">Writer</label>
                    <input className="input" type="text" placeholder="Writer" value={ writer }
                    onChange={ (e) => setWriter(e.target.value) } />
                </div>
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )

}

export default EditBook