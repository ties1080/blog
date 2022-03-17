import axios from "axios";
import {useEffect, useState} from "react";


export default ({ comments }) => {
// export default ({postId}) => {

    // const [comments, setComments] = useState([]);

    // const fetchComments = async() => {
    //     const res = await axios.get('http://localhost:4001/posts/'.concat(postId).concat('/comments'));
    //     console.log('Response comments', );
    //     setComments(res.data);
    // }

    // useEffect(() => {
    //     fetchComments();
    // },[]);

    const renderedComments = comments.map((comment)=> {
        return <li key={comment.id}>{comment.content}</li>;
    })

    return (<ul> {renderedComments} </ul>);

}
