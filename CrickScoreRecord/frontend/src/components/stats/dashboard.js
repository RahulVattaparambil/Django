 import React,{ Fragment } from 'react';
 import Form from './form';
 import Stats from './stats';

export default function Dashboard(){
	return(
		<Fragment>
			<Form />
			<Stats />
		</Fragment>
	);
}

