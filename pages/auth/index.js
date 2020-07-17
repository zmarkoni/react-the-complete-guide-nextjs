import React from 'react';
import User from '../../components/User';

// https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8294734#overview
// we get code spliting out the box
// routing
// just use pages for containers and than we have components folder
// styling is different

const authIndexPage = () => {
	return (
		<div>
			<h1>The Auth Index Page</h1>
			<User name="Zoki" age={36} />
		</div>
	);
};

export default authIndexPage;
