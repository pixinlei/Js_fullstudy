
    let Utils = {
        getElement(selector) {
            return document.querySelector(selector);
        },
        getAllElement(selector) {
            return document.querySelectorAll(selector);
        },
        timePad(time) {
            return time < 10 ? '0' + time : time;
        }
    }
    function daysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }
    
    function _Set(data_id, data) {
        if (data_id != "") {
            if (data) {
                var lsobj = window.localStorage;
                var datajson = JSON.stringify(data);
                lsobj.setItem(data_id, datajson);
            }
        }
    }
    
    function _Get(data_id) {
        if (data_id != "") {
            var data = null;
            var lsdata = window.localStorage;
            try {
                var datajson = lsdata.getItem(data_id);
                datajson = JSON.parse(datajson);
                data = datajson;
            } catch (e) {
    
            } finally {
                return data;
            }
        }
    }
    
    
    let scrollAction = {
        x: 'undefined',
        y: 'undefined'
    },
    scrollDirection;
    
    // 判断页面滚动方向
    function scrollFunc() {
    if (typeof scrollAction.x == 'undefined') {
        scrollAction.x = window.pageXOffset;
        scrollAction.y = window.pageYOffset;
    }
    let diffX = scrollAction.x - window.pageXOffset;
    let diffY = scrollAction.y - window.pageYOffset;
    if (diffX < 0) {
        // Scroll right
        scrollDirection = 'right';
    } else if (diffX > 0) {
        // Scroll left
        scrollDirection = 'left';
    } else if (diffY < 0) {
        // Scroll down
        scrollDirection = 'down';
    } else if (diffY > 0) {
        // Scroll up
        scrollDirection = 'up';
    } else {
        // First scroll event
    }
    scrollAction.x = window.pageXOffset;
    scrollAction.y = window.pageYOffset;
    };
    
    // 检测两个div是否重叠
    function collision(target, current) {
        let targetX = target.offsetLeft;
        let targetY = target.offsetTop;
        let targetW = target.offsetWidth;
        let targetH = target.offsetHeight;
        let currentX = current.offsetLeft;
        let currentY = current.getBoundingClientRect().top;
        let currentW = current.offsetWidth;
        let currentH = current.offsetHeight;
        return (targetX + targetW > currentX && targetX < currentX + currentW && targetY + targetH > currentY &&
            targetY < currentY + currentH);
    }
    
    // 计算当前选择日期往后推6个月
    function calcDate(str) {
        str = str.replace(/-/g, '/');
        let date = new Date(str);
        //日期转文本方式一：
        let year = date.getFullYear(); //年
        let month = date.getMonth() + 7; //月 +6个月  因为js里month从0开始，所以要加1
        if (month > 12) {
            year++;
            month -= 12;
        }
        let date2 = new Date(year, month, 0); //新的年月
        let day1 = date.getDate();
        let day2 = date2.getDate();
        if (day1 > day2) { //防止+6月后没有31天
            day1 = day2;
        }
        str = year + '-' +
            Utils.timePad(month) +
            '-' +
            Utils.timePad(day1);
        return str;
    }
    
    // 获取两个日期之间的值
    Date.prototype.format = function () {
        let s = '';
        let mouth = (this.getMonth() + 1) >= 10 ? (this.getMonth() + 1) : ('0' + (this.getMonth() + 1));
        let day = this.getDate() >= 10 ? this.getDate() : ('0' + this.getDate());
        s += this.getFullYear() + '-'; // 获取年份。
        s += mouth + "-"; // 获取月份。
        s += day; // 获取日。
        return (s); // 返回日期。
    };
    // 获取两个日期之间的值
    function getAll(begin, end) {
        let arr = [];
        let ab = begin.split("-");
        let ae = end.split("-");
        let db = new Date();
        db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
        let de = new Date();
        de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
        let unixDb = db.getTime() - 24 * 60 * 60 * 1000;
        let unixDe = de.getTime() - 24 * 60 * 60 * 1000;
        for (let k = unixDb; k <= unixDe;) {
            //console.log((new Date(parseInt(k))).format());
            k = k + 24 * 60 * 60 * 1000;
            arr.push((new Date(parseInt(k))).format());
        }
        return arr;
    }
    // 比较两个日期大小
    function CompareDate(d1, d2) {
        return ((new Date(d1.replace(/-/g, "\/"))) < (new Date(d2.replace(/-/g, "\/"))));
    }
    
    function getPhoneType() {
        //正则,忽略大小写
        var pattern_phone = new RegExp("iphone", "i");
        var pattern_android = new RegExp("Android", "i");
        var userAgent = navigator.userAgent.toLowerCase();
        var isAndroid = pattern_android.test(userAgent);
        var isIphone = pattern_phone.test(userAgent);
        var phoneType = "phoneType";
        if (isAndroid) {
            var zh_cnIndex = userAgent.indexOf("-");
            var spaceIndex = userAgent.indexOf("build", zh_cnIndex + 4);
            var fullResult = userAgent.substring(zh_cnIndex, spaceIndex);
            phoneType = fullResult.split(";")[1];
        } else if (isIphone) {
            //6   w=375    6plus w=414   5s w=320     5 w=320
            var wigth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (wigth > 400) {
                phoneType = "iphone6 plus";
            } else if (wigth > 370) {
                phoneType = "iphone6";
            } else if (wigth > 315) {
                phoneType = "iphone5s";
            } else {
                phoneType = "iphone 4s";
            }
        } else {
            phoneType = "您的设备太先进了";
        }
        return phoneType;
    }
    
    function isIphonex() {
        if (typeof window !== 'undefined' && window) {
            return /iphone/gi.test(window.navigator.userAgent) && window.screen.height >= 812;
        }
        return false;
    }
    