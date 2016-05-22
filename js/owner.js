var owner = (function () {

    function tabChange(matchs) {
        var matchTop = utils.firstChild(matchs);
        var matchUL = utils.children(matchTop, "ul")[0];
        var oLis = utils.children(matchUL, 'li');
        var ol = utils.next(matchTop);
        var divList = utils.nextAll(ol);

        for (var i = 0; i < oLis.length; i++) {
            var curLi = oLis[i];
            curLi.index = i;

            curLi.onmouseenter = function () {
                utils.addClass(this, "bt");
                var curLiSib = utils.siblings(this);
                for (var k = 0; k < curLiSib.length; k++) {
                    utils.removeClass(curLiSib[k], "bt");
                }
                for (k = 0; k < divList.length; k++) {
                    k === this.index ? utils.addClass(divList[k], "appear") : utils.removeClass(divList[k], "appear");
                }
            }
        }
    }

    return {
        tabChange: tabChange
    }

})();
//大轮播图
var banner = new AutoBanner("banner", "json/banner.txt", 2000);

var match = utils.getElementsByClass("match");
for (var i = 0; i < match.length; i++) {
    owner.tabChange(match[i]);
}


//实现左侧导航显示详细信息
var type = document.getElementById("type");
var typeLi = utils.children(type, "li");
var typeDiv = utils.getElementsByClass("typeLiDetail");
for (var k = 0; k < typeLi.length; k++) {
    var curType = typeLi[k];
    curType.index = k;
    var typeSib = utils.siblings(typeDiv);
    curType.onmouseover = function () {
        utils.css(typeDiv[this.index], "display", "block");
        var ulCount = utils.children(typeDiv[this.index], "ul").length;
        utils.css(typeDiv[this.index], "width", ulCount * 265);
        for (var n = 0; n < typeSib.length; n++) {
            utils.css(typeSib[n], "display", "none");
        }
    };
    curType.onmouseout = function () {
        utils.css(typeDiv[this.index], "display", "none");
    }
}

//实现购物车显示隐藏
var shopCon = document.getElementById("shopCon");
var shopCar = document.getElementById("shopCar");
var shopDetail = document.getElementById("shopDetail");
shopCon.onmouseover = function () {
    utils.addClass(shopCar, "bg");
    utils.css(shopDetail, "display", "block");
//        animate(shopDetail,{height:100},1000,Linear);
};
shopCon.onmouseout = function () {
    utils.removeClass(shopCar, "bg");
    utils.css(shopDetail, "display", "none");
};

//实现推荐区轮播
var recLeft = document.getElementById("recLeft");
var recRight = document.getElementById("recRight");
var recList = document.getElementById("recList");
var tarLeft = null;

    recRight.onclick = function () {
        var curLeft = parseFloat(utils.css(recList, "left"));
        tarLeft = curLeft + (-1240);
        var maxLeft = -1240 * 3;
        utils.removeClass(recRight, "bg");
        utils.css(recRight, "cursor", "pointer");
        if (Math.abs(tarLeft) >= Math.abs(maxLeft)) {
            tarLeft = maxLeft;
            utils.addClass(recRight, "bg");
            utils.css(recRight, "cursor", "default");
            utils.addClass(recLeft, "bg1");
        }
        animate(recList, {
            left: tarLeft
        }, 500)
    };

    recLeft.onclick = function () {
        var curLeft = parseFloat(utils.css(recList, "left"));
        tarLeft = curLeft + 1240;
        utils.removeClass(recLeft, "bg");
        utils.css(recLeft, "cursor", "pointer");

        if (tarLeft >= 0) {
            tarLeft = 0;
            utils.addClass(recLeft, "bg");
            utils.css(recLeft, "cursor", "default");
            utils.addClass(recRight, "bg1");
        }
        animate(recList, {
            left: tarLeft
        }, 500)
    };


//实现明星区域图片滚动
var starLeft = document.getElementById("starLeft");
var starRight = document.getElementById("starRight");
var starList = document.getElementById("starList");

//    var oLis = utils.children(starList, "li");
//    var step = 0, interval = 2000, autoTimer = null;
//    autoTimer = window.setInterval(autoMove, interval);
//    function autoMove() {
//        var starLiLeft=utils.css(starList,"left");
//        if(starLiLeft<=-1226){
//
//        }
//        animate(starList, {
//            left: -1226
//        }, 2000);
//
//    }
starRight.onclick = function () {
    animate(starList, {
        left: -1226
    }, 500)
};
starLeft.onclick = function () {
    animate(starList, {
        left: 0
    }, 500)
};