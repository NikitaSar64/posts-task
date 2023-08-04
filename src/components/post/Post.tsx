import { FC } from "react";

import cn from "classnames";

import styles from "./Post.module.scss";
import { PostProps } from "./Post.props";

export const Post: FC<PostProps> = ({
  post: { autor, date, img, img_2x, tags, text, title, views },
  onClick,
  className,
}) => {
  return (
    <article className={cn(styles.post, className)} onClick={onClick}>
      <img
        className={styles.img}
        src={img}
        alt="postImg"
        srcSet={`${img_2x} 2x`}
      />
      <div className={styles.tag}>{tags}</div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.info}>
        <span className={styles.author}>{autor}</span>
        <span>{date}</span>
        <span>{views} Views</span>
      </div>
      <p className={styles.text}>{text}</p>
    </article>
  );
};
