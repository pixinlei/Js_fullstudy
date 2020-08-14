// components/search/index.js
Component({
  /**
   * 组件的属性列表
   */
  classes:['cancel-class'],
  properties: {
    placeholder:String,
    customClass:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */


  methods: {
    onChange:function onChange(event) {
      // this.$emit('search',event.detail)
      // console.log(event);
      this.triggerEvent('search',event.detail)
    }
  }
})
