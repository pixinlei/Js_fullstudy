<template>
    <div class="page">
        <ul>
            <li>
                <i class="icon iconfont icon-goumai"></i>
                <div>收银</div>
            </li>
            <li>
                <i class="icon iconfont icon-dianpu"></i>
                <div>店铺</div>
            </li>
            <li>
                <i class="icon iconfont icon-ziyuan"></i>
                <div>商品</div>
            </li>
            <li>
                <i class="icon iconfont icon-huiyuanka"></i>
                <div>会员</div>
            </li>
            <li>
                <i class="icon iconfont icon-goumai"></i>
                <div>统计</div>
            </li>
            <li>
                <i class="icon iconfont icon-shezhi"></i>
                <div>设置</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'leftNav',

    }
</script>

<style scoped>
    .page {
        color: #ffffff;
        font-size: 10px;
        height: 100vh;
        background-color: #1D8CE0;
        float: left;
        width: 5%;
    }
    .iconfont {
        font-size: 24px;
    }
    li {
        list-style: none;
        text-align: center;
        border-bottom: 1px solid #20a0ff;
        padding: 10px;
    }
</style>
