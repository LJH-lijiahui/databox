//首页一些初始化js代码区域
			layui.use(['element', 'table'], function() {
				var element = layui.element,
					table = layui.table //表格;
				//问候语
				layer.msg('欢迎您！');
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
								content: '<iframe scrolling="auto" frameborder="0"  src="' + url+'?v='+ new Date().getTime() + '" style="width:100%;height:100%;"></iframe>',
								id: id
							});
						}

						FrameWH()
					}
					element.tabChange('tabs', options.id); //根据传入的id传入到指定的tab项

				});

				function FrameWH() {
					var h = $(window).height() - 40;
					$("iframe").css("height", h + "px");
				}

				$(window).resize(function() {
					FrameWH();
				})

			});