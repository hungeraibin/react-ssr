const http = require('http');
const React = require('react');
const { renderToString } = require('react-dom/server')


class Index extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <h1>hello react ssr</h1>
	}
}

// 交互
// class Index extends React.Component {
// 	constructor(props) {
// 		super(props);
// 	}

// 	handlerClick() {
// 		alert('Raect SSR')
// 	}

// 	render() {
// 		return <h1 onClick={this.handleClick}>click here</h1>
// 	}
// }

http.createServer((req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/html'
	});

	const html = renderToString(<Index/>)

	res.end(`<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>传统 ssr</title>
		</head>
		<body>
			<div id="root">
				${html}
			</div>
		</body>
	</html>
	`);
}).listen(9001)

console.log('http://localhost:9001')
