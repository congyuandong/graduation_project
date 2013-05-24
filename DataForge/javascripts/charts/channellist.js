/**
 * 
 */

var options = {
	chart : {
		renderTo: 'chartcontainer',
		type : 'bar'
	},
	title : {
		text : 'Historic World Population by Region'
	},
	subtitle : {
		text : 'Source: Wikipedia.org'
	},
	xAxis : {
		categories : [ 'Africa', 'America', 'Asia', 'Europe', 'Oceania' ],
		title : {
			text : null
		}
	},
	yAxis : {
		min : 0,
		title : {
			text : 'Population (millions)',
			align : 'high'
		},
		labels : {
			overflow : 'justify'
		}
	},
	tooltip : {
		valueSuffix : ' millions'
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
		name : 'Year 1800',
		data : [ 107, 31, 635, 203, 2 ]
	}]

};
$(document).ready(function() {
	$.ajax({
	    url: '/DataForge/getdata/channellist.php',
	    method: 'get',
	    dataType: 'json',
	    success:function(data){
	    	alert(data);
	    	//var series = {	
	    	//};
	    	//series.name = 'search engine';
	    	//series.type = 'pie'
	    	//series.data = [["google",1239],["\u767e\u5ea6",998],["\u641c\u641c",342],["\u5fc5\u5e94",421],["\u641c\u72d7",259],["\u5176\u4ed6",83]];
	    	//series.data = data;
	    	//series.data.push(data);
	    	//alert(series.data[0]);
	        //alert( data + "\n" + series.data);
	    	//options.series.push(series);
	    	//alert(options.series));
	    	var chart1 = new Highcharts.Chart(options);
	    }
	    });
});

