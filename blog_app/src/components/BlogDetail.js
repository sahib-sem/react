import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate()

    const {Data : blog , IsPending , error} = useFetch("http://localhost:8000/blogs/" + id);
    const deleteBlog = (id) => {
        fetch("http://localhost:8000/blogs/" + id , {
            method :"DELETE"
        })
        .then(res => {
            navigate('/')
            console.log(res)
        })
            
    }
    return ( <div className="blog-detail">
        
        {IsPending && <div>Loading.....</div>}
        {error && <div> {error} </div>}
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p> Written by {blog.author}</p>

                <div>{blog.body}</div>

                <button onClick={() => deleteBlog(blog.id)}>delete</button>
            </article>

        ) }
    </div> );
}
 
export default BlogDetail;