import React from 'react';
import { arrayOf, string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.module.css';

const stackMap = {
  react: 'react',
  vue: 'vuejs',
  vuejs: 'vuejs',
  angular: 'angular',
  css: 'css3',
  css3: 'css3',
  html5: 'html5',
  html: 'html5',
  javascript: 'js',
  ember: 'ember'
};

const langMap = {
  azerbaijani: 'AZ',
  english: 'EN',
  russian: 'RU'
};

const Tag = ({ tag }) => {
  if (tag in langMap) {
    return <li className={styles.language}>{langMap[tag]}</li>;
  }

  if (tag in stackMap) {
    return (
      <li className={`${styles.stack} ${styles[stackMap[tag]]}`}>
        <FontAwesomeIcon icon={['fab', stackMap[tag]]} />
        <span className="sr-only">{stackMap[tag]}</span>
      </li>
    );
  }

  return null;
};

const Tags = ({ tags }) => (
  <ul className={styles.tags}>
    {tags.map(tag => (
      <Tag key={tag} tag={tag} />
    ))}
  </ul>
);

Tags.defaultProps = {
  tags: []
};

Tags.propTypes = {
  tags: arrayOf(string.isRequired)
};

export default Tags;
