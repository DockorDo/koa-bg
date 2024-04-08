import Koa from 'koa'
import { Context } from 'koa'
const app = new Koa();
import json from 'koa-json'
import bodyparser from 'koa-bodyparser'
import logger from 'koa-logger'

import index from './routes/index'

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

app.use(index.routes())

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

app.listen(3000, () => {
    console.log('server start at http://127.0.0.1:3000')
})