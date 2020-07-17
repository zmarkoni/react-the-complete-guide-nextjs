import React from 'react';
import styles from './Button.module.scss';
// https://nextjs.org/docs/basic-features/built-in-css-support#adding-a-global-stylesheet

const Button = () => {
	return (
		<button
			type="button"
			// Note how the "error" class is accessed as a property on the imported
			// `styles` object.
			className={styles.error}
		>
			Destroy
		</button>
	);
};

export default Button;
