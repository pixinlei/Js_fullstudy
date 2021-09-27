<template>
  <div>
    <el-row style="display:flex; align-items: center; justify-content: center; padding: 0 5px;">
      <el-col :span="9" style="display: flex; align-items: center">
        <h2 style="display: inline-block; margin-right: 20px">应用列表</h2>
        <i class="el-icon-refresh icon-btn link" @click="fetchData" title="刷新"></i>
      </el-col>
      <el-col :span="6" style="display: flex; align-items: center;">
        <el-input v-model="search" size="mini" placeholder="输入关键字搜索" @keyup.enter.native="fetchData" />
        <i class="el-icon-search link" @click="fetchData" style="margin-left: 5px;"></i>
      </el-col>
      <el-col :span="9" class="btn-group">
        <i class="el-icon-circle-plus-outline" @click="showCreateDlg=true;" title="创建"></i>
        <i class="el-icon-remove-outline" @click="deleteRow" title="删除"></i>
      </el-col>
    </el-row>

    <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange" @sort-change="pageSortChanged">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="name" prop="name">
        <template #default="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="title" prop="title">
        <template #default="scope">
          <span class="cursor-pointer" @click="tdClick(scope.row)">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="status" prop="status">
        <template #default="scope">
          <span>{{ showStatusTitle(scope.row.status) }}</span>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px; display: flex; justify-content: flex-end;" v-show="pagination.rowsNumber > pagination.rowsPerPage">
      <el-pagination
        @size-change="pageSizeChanged"
        @current-change="pageCurrentChanged"
        :current-page="pagination.page"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.rowsNumber"
      ></el-pagination>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mymodal {
  padding: 20px;
}
.btn-group {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
.btn-group i {
  margin-left: 5px;
  font-size: 18px;
  cursor: pointer;
}
.link {
  color: #409eff;
  cursor: pointer;
}
.icon-btn {
  font-size: 16px;
  margin: 2px 5px 0 5px;
}
</style>
