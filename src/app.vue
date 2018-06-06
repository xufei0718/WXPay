<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
</style>
<template>
    <div class="layout">
        <Layout>
           <Header>


                <div align="center" >
                   <span style="color:#fff;font-size: 24px ; "><Icon type="card" ></Icon> 二维码收款页面</span>
                </div>





            </Header>
            <Layout>

                <Layout :style="{padding: '20px'}">

                    <Content :style="{padding: '10px', minHeight: '680px',  background: '#fff'}">
                            <router-view></router-view>

                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>


    export default {
        data() {
            return {

            };
        },
        mounted() {




        },
        beforeDestroy() {

        },
        methods: {
            add:function(name){
                console.info(name)
                //下面的字符串为路由文件定义的路径

                    this.$router.push("/"+name)



            }
        },


    };

</script>