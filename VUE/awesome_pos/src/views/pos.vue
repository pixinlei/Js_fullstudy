<template>
    <div class="home">
        <el-row>
            <el-col :span="7" class="self-button">
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table border>
                            <el-table-column props="goodsName" label="商品名称"></el-table-column>
                            <el-table-column props="count" label="数量"></el-table-column>
                            <el-table-column props="price" label="金额"></el-table-column>
                            <el-table-column label="操作" fixed="right"></el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">挂单</el-tab-pane>
                    <el-tab-pane label="外卖">外卖</el-tab-pane>
                </el-tabs>

            </el-col>
            <el-col :span="7">

            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'pos',
        data() {
            return {
                res: ['小明','xiaohong', 'xiaolan']
            }
        }
    }
</script>
<style scoped>
    .self-button {
        background-color: #F9FAFC;
        border-right: 1px solid #C0CCDA;
        height: 100vh;

    }
</style>
