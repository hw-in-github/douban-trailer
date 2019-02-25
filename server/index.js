const Koa = require('Koa')
const App = new Koa()
const { htmlTpl, ejsTpl, pugTpl } = require('./tpl')
// const ejs = require('ejs')
const pug = require('pug')

App.use(async (ctx, next) => {
    ctx.type = 'text/html; charset=utf-8'
    ctx.body = pug.render(pugTpl, {
        you: 'luke',
        me: 'HW'
    })
})
App.listen('4455')

