import styles from "./PostsContainer.module.scss";
import { IPost } from "@interfaces/interfaces";
import { Post } from "@components/post/Post";
import { PopUp } from "@components/popUp/PopUp";
import { useActivePost } from "@hooks/useActivePost";
import { usePostsQuery } from "@hooks/usePostsQuery";
import { Alert, Spin } from "antd";
import { useSearchPosts } from "@hooks/useSearchPosts";

export const PostsContainer = () => {
  const [postsData, isLoading, error] = usePostsQuery();
  const [activePost, setActivePost] = useActivePost();
  const [posts] = useSearchPosts(postsData);

  const openPostInfo = (post: IPost) => {
    setActivePost(post);
  };

  return (
    <section className={styles.container}>
      {isLoading && <Spin size="large" className={styles.alert} />}
      {error && (
        <Alert
          message="Error"
          description={error.message}
          type="error"
          className={styles.alert}
        />
      )}
      {posts &&
        posts.map((post, index) => (
          <div className={styles.post}>
            <Post key={index} post={post} onClick={() => openPostInfo(post)} />
          </div>
        ))}
      <PopUp active={activePost} setActive={setActivePost}>
        {activePost && <Post post={activePost} className={styles.detailPost} />}
      </PopUp>
    </section>
  );
};
