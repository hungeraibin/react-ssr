const Koa = require('koa2')
const koaStatic = require('koa-static')
const path = require('path')
const reactSsr = require('./dist/src/server/middlewares/react-ssr').default

const app = new Koa();

app.use(koaStatic(path.join(__dirname, './dist/static')))

app.use(reactSsr)

app.listen(9001)

console.log('http://localhost:9001')
