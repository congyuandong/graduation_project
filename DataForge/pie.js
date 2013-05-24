/**
 * 
 */
var chart; 
$(document).ready(function() {
    chart = new Highcharts.Chart({
       chart: {
          renderTo: 'container',
          type: 'bar'
       },
       title: {
          text: '水果消费'
       },
       xAxis: {
          categories: ['苹果', '香蕉', '橘子']
       },
       yAxis: {
          title: {
             text: 'Fruit eaten'
          }
       },
       series: [{
          name: 'Jane',
          data: [1, 0, 4]
       }, {
          name: 'John',
          data: [5, 7, 3]
       }],
		 exporting: { 
			filename: 'English',
			type: 'image/png'
		 }
    });
 });

var options = {
		 chart: {
			 renderTo : 'chart_pie',
             plotBackgroundColor: null,
             plotBorderWidth: null,
             plotShadow: false
         },
         title: {
             text: 'Browser market shares at a specific website, 2010'
         },
         tooltip: {
     	    pointFormat: '{series.name}: <b>{point.percentage}%</b>',
         	percentageDecimals: 1
         },
         plotOptions: {
             pie: {
                 allowPointSelect: true,
                 cursor: 'pointer',
                 dataLabels: {
                     enabled: true,
                     color: '#000000',
                     connectorColor: '#000000',
                     formatter: function() {
                         return '<b>'+ this.point.name +'</b>: '+ this.percentage.toFixed(2) +' %';
                     }
                 }
             }
         },
         series: [//{
             //type: 'pie',
             //name: 'Browser share',
             //data: [
             //       ["google",1239],["\u767e\u5ea6",998],["\u641c\u641c",342],["\u5fc5\u5e94",421],["\u641c\u72d7",259],["\u5176\u4ed6",83]
            // ]
         //}
		 ]
     };	

//var chart1
$(document).ready(function() { 
    //chart1 = new Highcharts.Chart({     
    //}); 
    
    $.ajax({
    url: '../pie.php',
    method: 'get',
    dataType: 'json',
    success:function(data){
    	//alert(data);
    	//series.update(data);
    	var series = {	
    	};
    	series.name = 'search engine';
    	series.type = 'pie'
    	//series.data = [["google",1239],["\u767e\u5ea6",998],["\u641c\u641c",342],["\u5fc5\u5e94",421],["\u641c\u72d7",259],["\u5176\u4ed6",83]];
    	series.data = data;
    	//series.data.push(data);
    	//alert(series.data[0]);
        alert( data + "\n" + series.data);
    	options.series.push(series);
    	//alert(options.series));
    	var chart1 = new Highcharts.Chart(options);
    }
    });
}); 