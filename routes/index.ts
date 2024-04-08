import {default as rt} from 'koa-router'
import { Context, DefaultState} from 'koa';
const router = new rt<DefaultState, Context>();

router.get('/', async (ctx) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

export default router

module.exports = router
