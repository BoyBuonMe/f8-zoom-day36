import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import styles from "./Posts.module.scss";
import Loading from "../Loading";

export default function Posts() {
  const [params, setParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line no-constant-binary-expression
  const [page, setPage] = useState(() => +params.get("page") || 1); // + đằng trước để ép kiểu nó thành số
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
        setLoading(false);
        // console.log(posts);
      });
  }, [page]);

  useEffect(() => {
    setParams(`page=${page}`); // Cách 2 đưa thẳng obj vào: setParams({page});
  }, [page, setParams]);

  if(loading) {
    return <>
      <Loading />
    </>
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul className={styles.listPost}>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`} className={styles.post}>
              {post.id} {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <ul className={styles.listPage}>
        {Array(5)
          .fill()
          .map((_, index) => {
            const isActive = page === index + 1;

            return (
              <li
                key={index}
                className={
                  isActive ? `${styles.page} ${styles.active}` : styles.page
                }
                onClick={() => {
                  setPage(() => index + 1);
                }}
              >
                {index + 1}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
