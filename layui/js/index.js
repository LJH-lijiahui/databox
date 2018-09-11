//这里存放，layui框架的一些组件实例和初始化的JS，请所有页面的layui组件初始化都写在此文件
layui.use(['element', 'table', 'carousel'], function() {
	var element = layui.element,
		table = layui.table, //表格;
		carousel = layui.carousel

	//首页数据盒子介绍轮播
	carousel.render({
		elem: '#test1',
		width: '100%' //设置容器宽度
			,
		height: 100,
		arrow: 'none' //不显示箭头
			,
		anim: 'fade' //切换动画方式
	});
	element.tabAdd('tabs', {
		title: "首页",
		content: '<iframe scrolling="auto" frameborder="0"  src="component/index_01.html' + '?v=' + new Date().getTime() + '" class="layadmin-iframe"></iframe>',
		id: 1
	});
	element.tabChange('tabs', 1); //根据传入的id传入到指定的tab项
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

	//初始化一个《设备管理》Tabel实例
	table.render({
		elem: '#equipmentTabel',
		height: "400",
		url: '../data.json' //数据接口
			,
		title: '用户表',
		page: true //开启分页
			,
		toolbar: '#Addbtn ' //开启工具栏，此处显示默认图标，可以自定义模板，详见文档
			,
		totalRow: false //开启合计行
			,
		type: 'true',
		limit: 10,
		loading: true,
		where: {
			limit: 10,
			page: 2
		},
		cols: [
			[ //表头

				{
					field: 'id',
					title: 'ID',
					sort: true
				}, {
					field: 'username',
					title: '用户名',
					width: '',
					event: "ees"
				}, {
					field: 'experience',
					title: '积分',
					width: '',
					sort: true,
					totalRow: true
				}, {
					field: 'sex',
					title: '性别',
					width: '',
					sort: true
				}, {
					field: 'score',
					title: '评分',
					width: '',
					sort: true,
					totalRow: true
				}, {
					field: 'city',
					title: '城市',
					width: ''
				}, {
					field: 'sign',
					title: '签名',
					width: ''
				}, {
					field: 'classify',
					title: '职业',
					width: ''
				}, {
					field: 'wealth',
					title: '财富',
					width: '',
					sort: true,
					totalRow: true
				}, {
					fixed: 'right',
					width: '20%',
					align: 'center',
					toolbar: '#barDemo',
					title: '操作'
				}
			]
		]
	});

	//监听《设备管理》Tabel实例头工具栏事件
	table.on('toolbar(equipmentTabel)', function(obj) {
		var checkStatus = table.checkStatus(obj.config.id),
			data = checkStatus.data; //获取选中的数据
		switch(obj.event) {
			case 'add':
				layer.msg('添加');
				break;
			case 'update':
				if(data.length === 0) {
					layer.msg('请选择一行');
				} else if(data.length > 1) {
					layer.msg('只能同时编辑一个');
				} else {
					layer.alert('编辑 [id]：' + checkStatus.data[0].id);
				}
				break;
			case 'delete':
				if(data.length === 0) {
					layer.msg('请选择一行');
				} else {
					layer.msg('删除');
				}
				break;
			case 'addContant':
				var ind = layer.open({
					type: 2,
					area: ['700px', '450px'],
					fixed: false, //不固定
					maxmin: true,
					content: '../component/addVM.html'
				});
				break;
		};
	});

	//监听《设备管理》Tabel实例行工具事件
	table.on('tool(equipmentTabel)', function(obj) { //注：tool 是工具条事件名，equipmentTabel 是 table 原始容器的属性 lay-filter="对应的值"
		var data = obj.data //获得当前行数据
			,
			layEvent = obj.event; //获得 lay-event 对应的值
		if(layEvent === 'detail') {
			layer.msg('查看操作');
		} else if(layEvent === 'del') {
			layer.confirm('真的删除行么', function(index) {
				obj.del(); //删除对应行（tr）的DOM结构
				layer.close(index);
				//向服务端发送删除指令
			});
		} else if(layEvent === 'edit') {
			layer.msg('编辑操作');
		} else if(layEvent === 'ees') {

			layer.msg('obj');
		} else if(layEvent === 'addContant') {

			layer.msg('obj');
		}
	});

});
//接收子页面传给父页面的值和操作
function setRel(rel) {
	this.rel = rel;
	layer.alert(rel)
}

