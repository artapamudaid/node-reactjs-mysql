import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [writer, setWriter] = useState('');
    const navigate = useNavigate();

    const saveBook = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/books', {
            title: title,
            writer: writer,
        });
        navigate('/books');
    }

    return (
        <div>
            <form onSubmit={ saveBook }>
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )

}

export default AddBook