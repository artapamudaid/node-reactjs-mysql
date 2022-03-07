import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ListBook from "./components/books/ListBook";
import AddBook from "./components/books/AddBook";
import EditBook from "./components/books/EditBook";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/books" element={<ListBook/>} />
          <Route path="/books/add" element={<AddBook/>} />
          <Route path="/books/edit/:id" element={<EditBook/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
