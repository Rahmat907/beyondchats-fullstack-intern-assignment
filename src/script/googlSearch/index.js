import axios from "axios"

const fetchArticle = async ()=>{
    try {
        
    const response = await axios.get("http://localhost:7000/api/articles/");
    console.log(response.data);        
    } catch (error) {
        console.log(error);
    }

}
export default fetchArticle
