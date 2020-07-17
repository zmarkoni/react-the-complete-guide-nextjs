import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
// We link only folders
import Button from '../components/Button';

const indexPage = (props) => (
	<div>
		<h1>The main Page</h1>
		<p>
			Go to{' '}
			<Link href="/auth">
				<a>Auth</a>
			</Link>
		</p>
		<button onClick={() => Router.push('/auth')}>Go to Auth</button>

		<Button>Error button</Button>
		<p>Fetch and return number of Stars: </p>
		<div>Next stars: {props.stars}</div>
	</div>
);

{
	/* https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
	Initialization of PROPS before page is loaded
	for fetching data and pass to application before initialization
	can be used in Class based components as well 
	can be used in any component
*/
}
indexPage.getInitialProps = async (ctx) => {
	const res = await fetch('https://api.github.com/repos/vercel/next.js');
	const json = await res.json();
	return { stars: json.stargazers_count };
};
export default indexPage;
