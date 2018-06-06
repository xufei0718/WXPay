const routers = [
    {
        path: '/',
        meta: {
            title: '二维码收款'
        },
        component: (resolve) => require(['./views/pay.vue'], resolve)
    },
    {
        path: '/pay',
        meta: {
            title: '二维码收款'
        },
        component: (resolve) => require(['./views/pay.vue'], resolve)
    },
    {
        path: '/query',
        meta: {
            title: '交易记录'
        },
        component: (resolve) => require(['./views/query.vue'], resolve)
    },






];
export default routers;