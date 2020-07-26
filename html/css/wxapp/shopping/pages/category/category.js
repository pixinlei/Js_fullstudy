
Page({
  data: {
    c_index: 0,//当前
    s3_width: 0,
    t_width: 250,//上方每个tab的大小
    scroll_left: 0,//上方滚动的位置
    t_margin_left: 0,//上方的margin-left
    tab_tite_data: [
      { "name": "果味", "color": "orange", }
      , { "name": "蔬菜", "color": "blue", }
      , { "name": "炒货", "color": "green", }
      , { "name": "点心", "color": "yellow", }
      , { "name": "粗茶", "color": "black", }
      , { "name": "淡饭", "color": "pink", }
    ],
    detail: [
      {
        banner: 'http://img.redocn.com/sheji/20151221/tangguobudingbannerlingshipaipsdfencengsucai_5626296.jpg',
        cate: '果味',
        id: 'guowei',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      },
      {
        banner: 'http://img.redocn.com/sheji/20151221/tangguobudingbannerlingshipaipsdfencengsucai_5626296.jpg',
        cate: '蔬菜',
        id: 'shucai',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      },
      {
        banner: 'http://img.redocn.com/sheji/20151221/tangguobudingbannerlingshipaipsdfencengsucai_5626296.jpg',
        cate: '炒货',
        id: 'chaohuo',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      },
      {
        banner: 'http://img.redocn.com/sheji/20151221/tangguobudingbannerlingshipaipsdfencengsucai_5626296.jpg',
        cate: '点心',
        id: 'dianxin',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      },
      {
        banner: 'http://img.redocn.com/sheji/20151221/tangguobudingbannerlingshipaipsdfencengsucai_5626296.jpg',
        cate: '粗茶',
        id: 'cucha',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      },
      {
        banner: 'http://img.redocn.com/sheji/20151221/tangguobudingbannerlingshipaipsdfencengsucai_5626296.jpg',
        cate: '淡饭',
        id: 'danfan',
        detail: [
          {
            thumb: '../../image/c3.png',
            name: '坚果'
          },
          {
            thumb: '../../image/c1.png',
            name: '瓜子'
          },
          {
            thumb: '../../image/c2.png',
            name: '大米'
          },
          {
            thumb: '../../image/c4.png',
            name: '芹菜'
          }
        ]
      }
    ]
  },
  onShow: function () {
    this.getwidth();
  },
  //滑
  get_index: function (e) {
    var crash_current = e.detail.current;
    var s = 0;
    if (crash_current != 0 && crash_current != 1) {
      s = parseInt(crash_current - 1) * this.data.s3_width;
    }
    this.setData({
      c_index: e.detail.current,
      scroll_left: s
    });
  },
  //点
  changeview: function (e) {
    var crash_current = e.currentTarget.dataset.current;
    var s = 0;
    if (crash_current != 0 && crash_current != 1) {
      s = parseInt(crash_current - 1) * this.data.s3_width;
    }
    this.setData({
      c_index: e.currentTarget.dataset.current,
      scroll_left: s
    });
  },
  getwidth: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData(that.data.s3_width = res.windowWidth / 3);
      },
    })
  }
})
