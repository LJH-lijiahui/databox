//首页一些初始化js代码区域
layui.use(['element', 'table', 'carousel'], function() {
	var element = layui.element,
		table = layui.table, //表格;
		carousel = layui.carousel
	//问候语
	layer.msg('欢迎您！');
	//执行一个轮播实例
	carousel.render({
		elem: '#test1',
		width: '100%' //设置容器宽度
			,
		height: 200,
		arrow: 'none' //不显示箭头
			,
		anim: 'fade' //切换动画方式
	});
					element.tabAdd('tabs', {
					title: "首页",
					content: '<iframe scrolling="auto" frameborder="0"  src="component/index_01.html' + '?v=' + new Date().getTime() + '" class="layadmin-iframe"></iframe>',
					id: 4
				});
				element.tabChange('tabs', 4); //根据传入的id传入到指定的tab项
	//				layer.open({
	//				  type: 0, 
	//				   content: 'demo.html',
	//				   area: 'auto'
	//					
	//				});
	//				layer.confirm('纳尼？', {
	//btn: ['按钮一', '按钮二', '按钮三'] //可以无限个按钮
	//,btn3: function(index, layero){
	//  //按钮【按钮三】的回调
	//}
	//}, function(index, layero){
	////按钮【按钮一】的回调
	//}, function(index){
	////按钮【按钮二】的回调
	//});
	//监听导航栏切换
	element.on('nav(test)', function(obj) {
		/*使用DOM操作获取超链接的自定义data属性值*/
		console.log(obj.data())
		var options = obj.data();
		var url = options.url;
		var title = options.title;
		var id = options.id;
		isData = false;
		if(id != null && id != '' && id != 0 && id != undefined) {

			for(var i = 0; i <= $(".layui-tab-title li").length; i++) {
				if($(".layui-tab-title li").eq(i).attr("lay-id") == id) {
					isData = true;
					//                      return false;
				}
			}
			if(!isData) {
				element.tabAdd('tabs', {
					title: title,
					content: '<iframe scrolling="auto" frameborder="0"  src="' + url + '?v=' + new Date().getTime() + '" class="layadmin-iframe"></iframe>',
					id: id
				});
			}

//			FrameWH()
		}
		element.tabChange('tabs', options.id); //根据传入的id传入到指定的tab项

	});

//	function FrameWH() {
//		var h = $(window).height() - 40;
//		$("iframe").css("height", h + "px");
//	}
//
//	$(window).resize(function() {
//		FrameWH();
//	})

});
