<template>
<Row>
    <Col>
           <!-- <Row v-if="info1">

                <Col span="24" align="center">
                    <div style="text-align:center;width: 500px ;height: 400px; padding-top: 30px">
                        <Form :label-width="100">
                            <FormItem label="收款金额">
                                <Button type="primary" shape="circle" size="large" icon="ios-search" @click="">1元</Button>
                                <Button type="primary" shape="circle" size="large" icon="ios-search" @click="">2元</Button>
                                <Button type="primary" shape="circle" size="large" icon="ios-search" @click="">5元</Button>
                            </FormItem>


                        </Form>
                    </div>
                </Col>

            </Row>-->

            <Row v-if="!isPay">
                <Col span="24"  align="center" style="padding-top: 50px">
                    <h2 >选择收款金额</h2>
                </Col>
                <Col span="24" align="center" style="padding-top: 20px">
                    <Button class="pay-but" type="primary" shape="circle" size="large" icon="social-yen" @click="pay(1)">1元</Button>
                    <Button class="pay-but" type="primary" shape="circle" size="large" icon="social-yen" @click="pay(2)">2元</Button>
                    <Button class="pay-but" type="primary" shape="circle" size="large" icon="social-yen" @click="pay(5)">5元</Button>
                </Col>
            </Row>

            <Row  v-if="isPay" >
                <Col span="24" align="center"  style="padding-top: 20px">
                    <img width="400px" :src="payImgUrl"/>

                </Col>
                <Col  span="24" align="center"  style="padding-top: 20px">
                    <Button class="pay-but" style="width: 400px"  type="error" size="large" icon="reply" @click="retPay" long>返回</Button>
                </Col>
            </Row>
    </Col>
</Row>

</template>
<script>

    export default {
        mounted(){



        },
        data () {
            return {
                isPay:false,
                payImgUrl:'',
            }
        },
        methods: {
            pay(amount){

                this.payImgUrl='image/WX-PAY-IMG-'+amount+'.JPG'
                this.isPay=true
            },
            retPay(){
                this.isPay=false
                this.payImgUrl=''
            },
            payRes(){
                //页面加载时或数据方法
                axios.post().then((res) => {

                })
            }


        }
    }

</script>
<style>
    .pay-but {
       margin-left: 10px;
       margin-right: 10px;
    }

</style>