
jQuery(document).ready(function() {
  debugger
  var main_field_dict = {
    '应用名': 'field7755',
    '主机名': 'field7756',
  }

  var attr_dict = {
    '只读': 1,
    '可编辑': 2,
    '必填': 3,
    '隐藏': 4,
  }

  function changeFieldAttr(fieldNameList, attrName) {
    var attrValue = attr_dict[attrName]
    for (var i = fieldNameList.length - 1; i >= 0; i--) {
      var fieldName = fieldNameList[i]
      var fieldId = main_field_dict[fieldName]
      WfForm.changeFieldAttr(fieldId, attrValue)
    }
  }

  function changeValue(fieldName, fieldValue, specialobj) {
    var fieldId = main_field_dict[fieldName]
    var data = {value: fieldValue}
    if (specialobj) {
      if (Array.isArray(specialobj)) {
        data['specialobj'] = specialobj
      } else {
        data['specialobj'] = [specialobj]
      }
    }
    WfForm.changeFieldValue(fieldId, data)
  }

  function getValue(fieldName) {
    var fieldId = main_field_dict[fieldName]
    return WfForm.getFieldValue(fieldId)
  }
  function check(value) {
    let checkRules = /^[0-9a-zA-Z-]{1,}$/
    return checkRules.test(value)
  }
  function finishCheck() {
      let result = true
      for(let item in main_field_dict) {
          if(!check(getValue(item))) {
              result = false
          }
      }
      return result
  }
  function bindFieldChangeEvent(fieldName, callback) {
    var fieldId = main_field_dict[fieldName]
    WfForm.bindFieldChangeEvent(fieldId, callback)
  }
  
  function appNameChanged(obj, id, value) {
    debugger
    console.log("WfForm.bindFieldChangeEvent--",obj,id,value);
    var newValue = value.replace('，', ',')
    changeValue('应用名', newValue)
  };
  function hostNameChanged(obj, id, value) {
    debugger
    console.log("WfForm.bindFieldChangeEvent--",obj,id,value);
    var newValue = value.replace('，', ',')
    changeValue('主机名', newValue)
  };
  bindFieldChangeEvent('应用名', appNameChanged)
  bindFieldChangeEvent('主机名', hostNameChanged)
  
  WfForm.registerCheckEvent(WfForm.OPER_SUBMIT, function(callback) {
    if(!finishCheck()) return
    callback();    //继续提交需调用callback，不调用代表阻断
  });
})
