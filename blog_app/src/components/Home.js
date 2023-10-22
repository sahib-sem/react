import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";
const Home = () => {

    

    const {Data : blogs , IsPending, error , setData} = useFetch("http://localhost:8000/blogs")

    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {IsPending && <div>Loading .........</div>}
            {blogs && <BlogList blogs = {blogs} ></BlogList>}
        </div>
     );
}
 
export default Home;