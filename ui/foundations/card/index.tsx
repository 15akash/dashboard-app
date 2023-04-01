import React from 'react';
import styles from './card.module.scss';
import Flexbox from '../flexbox';

const Card = (props: any) => {
	return <Flexbox className={styles.card}>{props.children}</Flexbox>;
};

export default Card;
