/**
 * 
 */

var options1 = {
	chart : {
		renderTo : 'channellist1',
		type : 'bar'
	},
	title : {
		text : '应用渠道下载量统计'
	},
	xAxis : {
		categories : [ 'AppChina', 'goapk', 'hiapk', '91', 'gfan' ],
		title : {
			text : '渠道'
		}
	},
	yAxis : {
		min : 0,
		title : {
			text : '下载量',
			align : 'high'
		},
		labels : {
			overflow : 'justify'
		}
	},
	tooltip : {
		valueSuffix : ' 次'
	},
	plotOptions : {
		bar : {
			dataLabels : {
				enabled : true
			}
		}
	},
	legend : {
		layout : 'vertical',
		align : 'right',
		verticalAlign : 'top',
		x : -100,
		y : 100,
		floating : true,
		borderWidth : 1,
		backgroundColor : '#FFFFFF',
		shadow : true
	},
	credits : {
		enabled : false
	},
	series : [ {
		name : '5月份下载量',
		data : [ 107, 31, 135, 203, 2 ]
	} ]

};

var options2 = {
	chart : {
		renderTo : 'channellist2',
		plotBackgroundColor : null,
		plotBorderWidth : null,
		plotShadow : false
	},
	title : {
		text : '应用渠道下载量分布图'
	},
	tooltip : {
		pointFormat : '{series.name}: <b>{point.percentage}%</b>',
		percentageDecimals : 1
	},
	plotOptions : {
		pie : {
			allowPointSelect : true,
			cursor : 'pointer',
			dataLabels : {
				enabled : true,
				color : '#000000',
				connectorColor : '#000000',
				formatter : function() {
					return '<b>' + this.point.name + '</b>: '
							+ this.percentage.toFixed(2) + ' %';
				}
			}
		}
	},
	exporting:{
		filename : 'channelpie',
		enabled :true
	},
	series : []
};

$(document).ready(function() {
	$.ajax({
		url : '/DataForge/getdata/channellist.php',
		method : 'get',
		dataType : 'json',
		success : function(data) {
			var series = {};
			series.name = '6月份下载量';
			series.data = data;
			options1.series.push(series);
			var chart1 = new Highcharts.Chart(options1);

		}
	});

	$.ajax({
		url : '/DataForge/getdata/channelpie.php',
		method : 'get',
		dataType : 'json',
		success : function(data) {
			//alert(data);
			var series = {};
			series.name = 'search engine';
			series.type = 'pie'
			series.data = data;
			options2.series.push(series);
			var chart2 = new Highcharts.Chart(options2);
		}
	});

});
