// 可爱萝莉
var lovelyGirl = function () {
    this.slogan = '性感在可爱面前一文不值';
  }
  lovelyGirl.prototype = {
    sayHi : function () {
      console.log('你好呀，小哥哥');
    },
    habit : function () {
      console.log('洛丽塔');
    }
  }
  // 性感女郎
  var sexyLady = function () {
    this.slogan = '可爱在性感面前一文不值';
  }
  sexyLady.prototype = {
    sayHi : function () {
      console.log('嗨！帅哥');
    },
    habit : function () {
      console.log('黑丝');
    }
  }
  // 美女工厂
  var lookerFactory = function (name) {
    switch (name) {
      case 'lovely':
        return new lovelyGirl();
      case 'sexy':
        return new sexyLady();
    }
  }
  
  var marilynMonroe = lookerFactory('sexy'); 
  console.log(marilynMonroe);                // sexyLady {slogan: "可爱在性感面前一文不值"}
  console.log(marilynMonroe.slogan);         // 可爱在性感面前一文不值    
  marilynMonroe.sayHi();                     // 嗨！帅哥                     
  marilynMonroe.habit();                     // 黑丝