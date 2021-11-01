module.exports = function(options, app) {
    return async function(ctx, next) {
        let list = options.list
        let currentIp = ctx.request.ip


        // 看当前ip是否在黑名单中
        let shouldForbid = list.some(ip => {
            return ip === currentIp
        })
        if(shouldForbid) {
            ctx.status = 403;
            ctx.body = '您的ip已经被屏蔽！！！'
        }else{
            await next()
        }
    }
}