module.exports = function (options, app) {
    return async function (ctx, next) {
        console.log(new Date())
        await next()

    }
}