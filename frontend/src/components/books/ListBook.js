import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const ListBook = () => {
    const [books, setBook] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        const response = await axios.get('http://localhost:5000/books');
        setBook(response.data);
    }

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:5000/books/${id}`);
        getBooks();
    }

    return (
        <div>
            <Link to="/books/add" className="button is-primary mt-2">Add Book</Link>
            <table className="table is-stiped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Writer</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { books.map((book, index) => (
                            <tr key={book.id}>
                                <td>{index + 1}</td>
                                <td>{book.title}</td>
                                <td>{book.writer}</td>
                                <td>
                                    <Link to={`edit/${book.id}`} className="button is-info is-small">Edit</Link>
                                    <button onClick={()=>deleteBook(book.id)} className="button is-danger is-small">Delete</button>
                                </td>
                            </tr>
                        )) }
                </tbody>
            </table>
        </div>
    )
}

export default ListBook