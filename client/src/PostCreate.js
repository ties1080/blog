import React, {useState} from "react";
import axios from "axios";

export default () => {

    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        console.log("\nonSubmit PostCreat ===>>>", event)
        event.preventDefault();
        const res = await axios.post('http://localhost:4000/posts',{title});
        setTitle('');
        console.log("\nResponse post ===>>>", res.data)
    }

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label className="form-label">Title</label>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                           className="form-control"
                    />
                </div>
                <button className="btn btn-primary mt-3">Submit</button>

             </form>
        </div>
    );
}
