// JavaScript Document
jQuery(".banner").slide( { 
       mainCell:".ban-img ul",//切换元素的包裹层对象
       interTime : 2000,//自动运行间隔
       prevCell:".ban-left",//前一个/页按钮对象。
       nextCell:".ban-right",//后一个/页按钮对象。
       titCell:".dot li",//导航元素对象（鼠标的触发元素对象）
       trigger: "mouseover",//触发方式
       scroll:1,//每次滚动个数。
       vis:1,//mainCell的可视范围个数
       titOnClassName:"current",//当前titCell位置自动增加的class名称
       effect:"leftLoop",//动画效果
        autoPlay:true//自动运行
} );

jQuery(".about-us").slide( { 
       mainCell:".about-text>.about-list",//切换元素的包裹层对象
       interTime : 2000,//自动运行间隔
       prevCell:".prev",//前一个/页按钮对象。
       nextCell:".next",//后一个/页按钮对象。
//       titCell:".dot li",//导航元素对象（鼠标的触发元素对象）
       trigger: "mouseover",//触发方式
       scroll:1,//每次滚动个数。
       vis:1,//mainCell的可视范围个数
//       titOnClassName:"ban-cur",//当前titCell位置自动增加的class名称
       effect:"leftLoop",//动画效果
        autoPlay:true,//自动运行
} );

