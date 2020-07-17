import React from 'react';
import User from '../../components/User';

// https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8294734#overview
// we get codespliting out the box
// routing
// just use pages for containers and than we have components folder
// styling is different

const authIndexPage = (props) => {
	return (
		<div>
			<h1>The Auth Index Page</h1>
			<div>Next stars: {props.stars}</div>
			<User name="Zoki" age={36} />
		</div>
	);
};

{
	/* https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
	for fetching data and pass to application before initialization
	can be used in Class based components as well 
*/
}
authIndexPage.getInitialProps = async (ctx) => {
	const res = await fetch('https://api.github.com/repos/vercel/next.js');
	const json = await res.json();
	return { stars: json.stargazers_count };
};

export default authIndexPage;
