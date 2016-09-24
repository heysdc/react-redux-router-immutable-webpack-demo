import Koa from 'koa'
var app = new Koa()

app.use((ctx) => {
  ctx.body = 'Hello World'
})

app.on('error', (err, ctx) => {
  console.log('server error', err, ctx)
})

app.listen(3000)
