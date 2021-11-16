jQuery(document).ready(function() {
  // 监听字段改变事件
  function bindFieldChangeEvent(fieldName, callback) {
    var fieldId = field_dict[fieldName] // 这里不是main_field_dict， 而是field_dict
    WfForm.bindFieldChangeEvent(fieldId, callback)
  }
  
  WfForm.bindDetailFieldChangeEvent("field6641",function(id,rowIndex,values) { //明细1字段：收付款笔数
    console.log("WfForm.bindDetailFieldChangeEvent--",id,rowIndex,values);
    var num = Number(values)+1;
    console.log(num);
    WfForm.changeFieldValue("field6997_"+ rowIndex, {value: "第"+num+"笔"});//明细1字段：笔数信息
  });

  startMainTableDateControl();
  startDetailDateControl();
  //startMainJEControl();
  startProjectIdControl();
  removeControl();
  daishenpihetongControl();
});

function startMainTableDateControl(){
  WfForm.bindFieldChangeEvent("field6628", function(obj,id,startDate) { //主表字段：合同开始日期
    console.log("WfForm.bindFieldChangeEvent--",obj,id,startDate);
    if(!!startDate) {
      WfForm.controlDateRange("field6629", startDate, "");//主表字段：合同结束日期
      var end = WfForm.getFieldValue("field6629");
      if(!!end && !!startDate) {
        if (end < startDate) {
          WfForm.changeFieldValue("field6629", {value: ""});
        }
      }
    }
  });
}

//合同审批流程控制流程明细表表的日期填写规则：不得超过主表范围
function startDetailDateControl() {
  WfForm.bindDetailFieldChangeEvent("field6650", function (id, rowIndex, startDate) { //明细3字段：开始时间
    var cg = WfForm.getFieldValue("field6624"); //主表字段：合同类型（采购类、销售类、其他）
    if (!!cg  && cg==0) {
      var mainend = WfForm.getFieldValue("field6629");//主表字段：合同结束日期
      console.log("主表结束日期",mainend);
      var mainstart = WfForm.getFieldValue("field6628");//主表字段：合同开始日期
      console.log("主表开始日期",mainstart);
      if(!!mainstart && !!mainend) {
        if (!!startDate) {
          WfForm.controlDateRange('field6650_' + rowIndex, mainstart, mainend);//明细3字段：开始时间
          WfForm.controlDateRange('field7127_' + rowIndex, mainstart, mainend);//明细3字段：结束时间
          if(startDate < mainstart){
            WfForm.changeFieldValue("field6650_" + rowIndex, {value: ""});//明细3字段：开始时间
          }
          var end = WfForm.getFieldValue("field7127_" + rowIndex);//明细3字段：结束时间
          if (end < startDate) {
            WfForm.changeFieldValue("field7127_" + rowIndex, {value: ""});//明细3字段：结束时间
          }
        }
      }
    }
  });
}
/*
function startMainJEControl(){
    WfForm.registerCheckEvent(WfForm.OPER_SUBMIT, function(callback){
        var hj = WfForm.getFieldValue("field7225"); //主表字段：收付款金额总计
     var bd = WfForm.getFieldValue("field7408");//主表字段：明细1金额合计
    if(!!hj && !!bd){
      if(hj==bd){
         callback();    //继续提交需调用callback，不调用代表阻断
      }
    else{
         WfForm.showMessage("收付款金额与费用构成金额不等！");
      }
    }
       
    });
  }
*/
//主表控制选择框选项
function removeControl() {
  WfForm.bindFieldChangeEvent("field7128", function(obj,id,value) { //主表字段：费用类型（框架合同、项目合同、其他）
    var fylx=WfForm.getFieldValue("field7128");    //主表字段：费用类型（框架合同、项目合同、其他）
    var fylxz=Number(fylx);
    if(!!fylxz  &&  (fylxz==1 || fylxz==2) ) {
      WfForm.controlSelectOption("field7130", "2");   //主表字段：申请类型（主合同、订单、合同）
      WfForm.changeFieldValue("field7130", {value:2});//主表字段：申请类型（主合同、订单、合同）
      WfForm.changeFieldAttr("field7130", 1);  //只读；主表字段：申请类型（主合同、订单、合同）
    } else {
      WfForm.changeFieldAttr("field7130", 2); //主表字段：申请类型（主合同、订单、合同）
      WfForm.changeFieldValue("field7130", {value:"1"});//主表字段：申请类型（主合同、订单、合同）
      WfForm.controlSelectOption("field7130", "0,1");  //控制选择框只显示1/0的选项//主表字段：申请类型（主合同、订单、合同）
    }
  });
}

//费用类型为框架合同，申请类型为主合同时候，待审批合同应该是必须上传
//费用类型为项目合同时候，待审批合同应该为必须上传
//费用类型为其他的时候，待审批合同应该为必须上传
//归纳：只有当申请类型为“订单”的时候，审批合同上传非必填，其他情况必填
function daishenpihetongControl() {
  //待审批合同上传 field6633
  //申请类型 field7130
  WfForm.bindFieldChangeEvent("field7130", function(obj,id,value){
    //0：主合同  1：订单  2：合同
    //1：只读，2：可编辑，3：必填，4：隐藏字段标签及内容
    if (value === "1") {
        WfForm.changeFieldAttr("field6633", 2);
    } else {
        WfForm.changeFieldAttr("field6633", 3);
    }
  });
}

function startProjectIdControl() {
  WfForm.bindFieldChangeEvent("field7576", function(obj,id,value){
    console.log("WfForm.bindFieldChangeEvent--",obj,id,value);
    //通过SU的api获取项目名称
    var pid = value;
    $.ajax({
      url: '/idyapi/public/su_proj_name/',
      dataType: 'json',
      type: 'post',
      contentType: 'application/json',
      data: JSON.stringify( {pid: pid} ),
      success: function( data ){
          var title = data.join(',')
          WfForm.changeFieldValue("field7616", {value: title});
      }
    });
  });
  
  // BMS过来的请求
  function initData(ids) {
    $.ajax({
      url: '/idyapi/public/oa/bills/',
      dataType: 'json',
      type: 'post',
      contentType: 'application/json',
      data: JSON.stringify( {ids} ),
      success: function( data ){
          var field_dict = {
    '项目编号': 'field7576',
    '项目名称': 'field7616',
    '发起人': 'field6618',
    '项目PM': 'field7597',
    '我方主体': 'field6625',
    '合同开始日期': 'field6628',
    '合同结束日期': 'field6629',
    '合同标的': 'field6632'
  }

var detail2_field_dict = {
  '服务内容': 'field6645',
  '单价': 'field6646',
  '数量': 'field6647',
  '小计': 'field6648',
  '备注': 'field6649',
}

  var getRowData = function(data) {
    var rowData = {}
    for (var fieldName in data) {
      var fieldId = detail2_field_dict[fieldName]
      var fieldValue = data[fieldName]
      rowData[fieldId] = {value: fieldValue}
    }
    return rowData
  }

  var addDetailRow = function(formId, data) {
    var rowData = getRowData(data)
    WfForm.addDetailRow(formId, rowData)
  }

  // 改变字段值
  function changeFieldValue(fieldName, fieldValue, specialobj) {
      var fieldId = field_dict[fieldName] // 这里不是main_field_dict，而是field_dict
      var data = { value: fieldValue }
      if (specialobj) {
          if (Array.isArray(specialobj)) {
              data['specialobj'] = specialobj
          } else {
              data['specialobj'] = [specialobj]
          }
      }
      WfForm.changeFieldValue(fieldId, data)
  }
  
  
        // 改变字段值
        function changeFieldValue(fieldName, fieldValue, specialobj) {
            var fieldId = field_dict[fieldName] // 这里不是main_field_dict，而是field_dict
            var data = { value: fieldValue }
            if (specialobj) {
                if (Array.isArray(specialobj)) {
                    data['specialobj'] = specialobj
                } else {
                    data['specialobj'] = [specialobj]
                }
            }
            WfForm.changeFieldValue(fieldId, data)
        }  
      
        var {show_id, project_name, sale_list, pm_list, region, start_date, end_date, total_price, service_list, bill_discount} = data.data[0]
        
        var SUZHOUZHONGYAN = 2
        var SHANGHAIZHONGYAN = 1
        
        var ourMainBody = {
          [SUZHOUZHONGYAN]:0,
          [SHANGHAIZHONGYAN]:1,
        }
        
        console.log(data.data[0], '这里是所有数据')
        
        console.log(sale_list, '这里是列表数据')
        
        changeFieldValue('项目编号', show_id || '')
        changeFieldValue('项目名称', project_name || '')
        changeFieldValue('项目PM', pm_list[0].name || '')
        changeFieldValue('我方主体', ourMainBody[region] || '')
        
        changeFieldValue('合同标的', total_price || '')

        debugger

        var data = {}
        for(let i=0;i<service_list.length;i++) {
          var {name, price, num, comment, discount, balance} = service_list[i]
          data['服务内容'] = name
          data['单价'] = price
          data['数量'] = num
          data['备注'] = comment
          data['小计'] = (price * num) * (discount || bill_discount || 100) / 100 + balance
        }

        debugger
        addDetailRow("detail_2", data)
      }
    }); 
  }

// 测试使用
debugger
// initData(948760)
debugger

    var getUrlParam = function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURI(r[2]); return null;
    }

    //BMS过来的请求，会带上project_id参数
    var project_id = getUrlParam('project_id');
    if (project_id) {
      WfForm.changeFieldValue("field7576", {value: project_id});
      
      initData(project_id)
      // $.ajax({
      //     url: '/idyapi/public/bms_invoice/',
      //     dataType: 'json',
      //     type: 'post',
      //     contentType: 'application/json',
      //     data: JSON.stringify( {invoice_id: bmsinvoice} ),
      //     success: function( data ){
      //       WfForm.changeFieldValue("field6855", {value: data['invoice_type']});
      //     }
      // });

    };

}


