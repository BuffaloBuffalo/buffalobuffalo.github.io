
import React from 'react';
import { Link } from 'gatsby';
// import type { Edges } from '../../types';
import * as styles from './Feed.module.scss';
import { formatMonthSummaryDisplay, formatMicrodataDate } from '../../utils/date-utils';

// type Props = {
//   edges: Edges
// };

const Feed = ({ edges }) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__itemMeta']}>
          <time className={styles['feed__itemMetaTime']} dateTime={ formatMicrodataDate(edge.node.frontmatter.date)}>
          { formatMonthSummaryDisplay(edge.node.frontmatter.date)}
          </time>
          <span className={styles['feed__itemMetaDivider']} />
          <span className={styles['feed__itemMetaCategory']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__itemMetaCategoryLink']}>{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <h2 className={styles['feed__itemTitle']}>
          <Link className={styles['feed__itemTitleLink']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <p className={styles['feed__itemDescription']}>{edge.node.frontmatter.description}</p>
        <Link className={styles['feed__itemReadmore']} to={edge.node.fields.slug}>Read</Link>
      </div>
    ))}
  </div>
);

export default Feed;
