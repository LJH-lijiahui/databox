// 绘制图表。
			echarts.init(document.getElementById('main')).setOption({
				title: {
					text: '主机CPU使用情况'
				},
				tooltip: {
					trigger: 'axis'
				},
				toolbox: {
					feature: {
						
					}
				},
				legend: {
					data: ['host-1', 'host-2', 'host-3']
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					name:'最近7天',
					data: ['1', '2', '3', '4', '5', '6', '7']
				},
				yAxis: {
					type: 'value',
					splitNumber: 10,
					name:"CPU使用情况(%)"
				},
				series: [{
						type: 'line',
						name: 'host-1',
						smooth: false,
						data: [33, 32, 21, 23, 38, 15, 42]
					},
					{
						type: 'line',
						name: 'host-2',
						smooth: false,
						data: [50, 56, 41, 34, 20, 25, 19]
					},
					{
						type: 'line',
						name: 'host-3',
						smooth: false,
						data: [8, 18, 27, 13, 10, 12, 28]
					}
				]
			});