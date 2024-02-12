// BlogContentFormatter.js

import React from 'react';
import styles from './BlogContentFormatter.module.css';

const BlogContentFormatter = ({ htmlContent }) => {
  return (
    <div className={styles.container} dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default BlogContentFormatter;
