const http = require('http');

const fetchData = () => {
	return {
		list: [
			{
					name: '包子',
					num: 100
			},
			{
					name: '饺子',
					num: 2000
			}, {
					name: '馒头',
					num: 10
			}
		]
	}
}

const dataToHtml = (data) => {
	let html = '';

	data.list.forEach(item => {
			html += `<div>${item.name}有${item.num}个</div>`
	})

	return html
}

http.createServer((req, res) => {
	res.writeHead(200, {
			'Content-Type': 'text/html'
	})

	const html = dataToHtml(fetchData());

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
	</html>`
	);

}).listen(9001);

console.log('http://localhost:9001')

