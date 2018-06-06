<template>
    <Card :bordered="false" dis-hover>
        <p slot="title">交易记录</p>

    <Table border :columns="columns7" :data="data6"></Table>

    </Card>
</template>
<script>
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: '登录收款人',
                        key: 'name',

                        align:'center',

                    },

                    {
                        title: '收款金额(元)',
                        key: 'amount',
                        align:'center',
                    },

                    {
                        title: '时间',
                        key: 'time',
                        align:'center',
                    },

                ],
                data6: [
                    {
                        bess: '系统管理员',
                        name: '张三',
                        amount: '1',
                        time:'2018-06-01 10:00:00',
                        address: '北京市',
                    },
                    {
                        bess: '系统管理员',
                        name: '李四',
                        amount: '5',
                        time:'2018-06-01 12:00:00',
                        address: '上海市'
                    },

                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            info(index){
                console.info(index)
                //下面的字符串为路由文件定义的路径
                this.$router.push("/info")



            }
        }
    }
</script>