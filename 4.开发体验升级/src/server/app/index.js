import reactSsr from "../middlewares/react-ssr"
import Koa from 'koa2'
import koaStatic from 'koa-static'
import path from 'path'
import proConfig from '../../share/pro-config'

const port = proConfig.nodeServerPort || process.env.PORT

const app = new Koa();

app.use(koaStatic('./dist/static'))

app.use(reactSsr)

app.listen(port);

console.log('server is start .',`http://localhost:${port}`);
