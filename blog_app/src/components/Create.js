import { useState  } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState("");
    const [body , setBody] = useState("");
    const [author, setAuthor] = useState("yoshi");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {title, body, author}

        fetch("http://localhost:8000/blogs", {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then((res) => {
            navigate('/');

        })
    }
    return ( 
    <div className="create"> 
         <h2>Add new Blog</h2>

         <form onSubmit={handleSubmit}>

            <label>Blog Title: </label>
            <input type="text" required value = {title} onChange={(e) => {setTitle(e.target.value)}}/>

            <label>Blog Body: </label>
            <input type="text" required value = {body} onChange={(e) => {setBody(e.target.value)}} />

            <label>Author: </label>
            <select value = {author} onChange={(e) => {setAuthor(e.target.value)}}>
                <option value="yoshi">yoshi</option>
                <option value="mario">mario</option>
            </select>

            <button>Add Blog</button>

         </form>
    </div> );
}
 
export default Create;