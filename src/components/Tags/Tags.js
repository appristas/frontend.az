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
    russian: 'RU',
    turkish: 'TR',
    azerbaijan: 'AZ'
};

const LangTag = ({ tag }) => <li className={styles.language}>{tag}</li>;

const StackTag = ({ tag }) => (
    <li className={`${styles.stack} ${styles[tag]}`}>
        <FontAwesomeIcon icon={['fab', tag]} />
        <span className="sr-only">{tag}</span>
    </li>
);

const Tags = ({ tags }) => (
    <ul className={styles.tags}>
        {tags
            .filter(tag => tag in langMap)
            .map(tag => langMap[tag])
            .filter((tag, idx, arr) => arr.indexOf(tag) === idx)
            .map(tag => (
                <LangTag key={tag} tag={tag} />
            ))}
        {tags
            .filter(tag => tag in stackMap)
            .map(tag => stackMap[tag])
            .filter((tag, idx, arr) => arr.indexOf(tag) === idx)
            .map(tag => (
                <StackTag key={tag} tag={tag} />
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
