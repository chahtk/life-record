import * as React from 'react';

interface colorInterface {
	color: string;
}

function App({ color }: colorInterface): React.ReactElement {
	return (
		<div>
			<h1>Welcome to React with Typescript</h1>
			<p>The color of this page is: {color}</p>
		</div>
	);
}

export default App;
