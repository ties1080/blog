import {useState} from "react";
import axios from "axios";


export default ({postId}) => {

    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post('http://localhost:4001/posts/'.concat(postId).concat('/comments'),{content});
        setContent('');
        console.log("\nResponse comment ===>>>", res.data)
    }

    return (
            <div>
                <form onSubmit={onSubmit}>
                       <div className="form-group">
                           <label className="form-label">New Comment</label>
                           <input
                               value={content}
                               onChange={(e)=>setContent(e.target.value)}
                               className="form-control"/>
                       </div>

                        <button className="btn btn-primary mt-2">submit</button>
                </form>
            </div>
         );

}
