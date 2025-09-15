import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./PostDetail.module.scss";
import Loading from "../Loading";

export default function PostDetail() {
  const params = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((post) => {
        setPost(post);
        setLoading(false);
        // console.log(post);
      });
  }, [params]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
      .then((res) => res.json())
      .then((comments) => {
        // console.log(comments);
        setComments(comments);
        setLoading(false);
      });
  }, [params]);

  if(loading) {
    return <>
      <Loading />
    </>
  }

  return (
    <div className={styles.postDetail}>
      <div className={styles.postContainer}>
        <h1>Post Detail</h1>
        <div className={styles.postInfo}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <div className={styles.comments}>
          <h3>Comments:</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id} className={styles.comment}>
                <div className={styles.commentInfo}>
                  <h4>{comment.name}</h4>
                  <p>{comment.email}</p>
                </div>
                <div className={styles.commentBody}>{comment.body}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
