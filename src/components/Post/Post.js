
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import * as styles from './Post.module.scss';

const Post = ({ post }) => {
  const { html } = post;
  const { tagSlugs } = post.fields;
  const { tags, title, date } = post.frontmatter;

  return (
    <div className={styles['post']}>
      <Link className={styles['post__homeButton']} to="/posts">All Articles</Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>
    </div>
  );
};

export default Post;
