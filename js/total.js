// 高德地图
var map = new AMap.Map('chart_map', {
    zoom:11,//级别
    center: [116.397428, 39.90923],//中心点坐标
    viewMode:'3D',//使用3D视图
    mapStyle: 'amap://styles/darkblue',
});

//南磨坊常住人口、流动人口曲线图
function echart_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_1'));
    var valueBase = Math.random() * 50;
    var valueBase2 = Math.random() * 50;
    var data = [];
    var data2 = [];
    
    for (var i = 1; i <= 12; i++) {
        valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
        valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
        valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase2);
        valueBase <= 0 && (valueBase2 = Math.random() * 50);
        data2.push([i, valueBase2]);
        data.push([i,valueBase])
    }
    option = {          
        legend: {
            top:'middle',
            data:['意向'],
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            nameGap: 0, 
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            name: '人',
            type: 'value',  
            nameGap: 0,              
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                // inside: true,
                formatter: '{value}\n'
            },
            z: 10
        },
        grid: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 40,
            containLabel: true                
        },
        dataZoom: [{
            type: 'inside',
            throttle: 50
        }],
        series: [
            {
                name:'常住人口',
                type:'line',
                smooth:true,
                stack: 'a',
                symbol: 'circle',
                // symbolSize: 5,
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgba(14, 148, 235, 0.8)'
                    }
                },
                lineStyle: {
                    width: 1
                },
                data: data2
            },
            {
                name:'流动人口',
                type:'line',
                smooth:true,
                stack: 'a',
                symbol: 'circle',
                // symbolSize: 5,
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgba(230,197,49, 0.8)'
                    }
                },
                lineStyle: {
                    width: 1
                },
                data: data
            }
        ]
    };
    
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

//echart_2重点人员统计
function echart_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_2'));
    //data 为模拟数据
    var data = [{
        name: '重点人员1',
        value: 19251,
        percent: '17.8%',
    }, {
        name: '重点人员22',
        value: 21535,
        percent: '19.9%'
    }, {
        name: '重点人员',
        value: 22455,
        percent: '20.76%'
    }, {
        name: '重点人员3',
        value: 22455,
        percent: '20.76%'
    }, {
        name: '重点人员4',
        value: 22455,
        percent: '20.76%'
    }];
    var color = [ '#c440ef', '#efb013', '#2fda07', '#d8ef13', '#2e4af8', '#0eebc4', '#f129b1', '#17defc', '#f86363'];
    var option = {
        tooltip: {
            trigger: 'item',
            confine: true,
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            textStyle: {
                fontSize: 12
            }
        },
        title: {
            text: '重点人员',
            // subtext: '2000000.00',
            x: 'center',
            y: 'center',
            textStyle: {
                color: '#f2f2f2',
                fontSize: '0.1rem'
            }
        },
        series: [
        // 主要展示层的
            {
                radius: ['50%', '70%'],
                center: ['50%', '50%'],
                type: 'pie',
                labelLine: {
                    show: true,
                    length: 10,
                    length2: 10
                },
                label: {
                    color: "#fff",
                    formatter: '{d}%'
                },
                "color": [ '#c440ef', '#efb013', '#2fda07', '#d8ef13', '#2e4af8', '#0eebc4', '#f129b1', '#17defc', '#f86363'],
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                name: "重点人员占比",
                data: data
        },
        
    ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    var htmlPercente = '';
    data.forEach(function(item,i){
        htmlPercente += '<li>'+
        '<span>'+item.name+'：</span>'+
        '<p><span style="width:'+item.percent+';background:'+color[i]+'"></span></p>'+
        '<span>'+item.percent+'</span>'+
        '</li>';
    })
    document.getElementById("personPercent").innerHTML = htmlPercente;

}

//echart_3 年龄段统计之 流动、常住
function echart_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_3'));
    //data 为模拟数据
    var data = [{
        name: '流动',
        value: 19251,
        percent: '37.91%'
    }, {
        name: '常住',
        value: 31535,
        percent: '62.09%'
    }];
    var sumPerson = 0;
    data.map(function(item){
        sumPerson += item.value;
        return item.name += " " + item.value + " " + item.percent
    })
    var color = ['#0077c5', '#a819d7', '#c99002', '#24bc00', '#b6cb04', '#112ee2', '#00bd9c', '#ce078f', '#00b2cd', '#ec3c3c'];
    var option = {
        tooltip: {
            trigger: 'item',
            confine: true,
            formatter: "{a} <br/>{b}",
            textStyle: {
                fontSize: 12
            }
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: '10',
            // bottom: 10,
            // data: legendData,
            textStyle: {
                color: '#f2f2f2',
            }
            // data: 
        },
        series: [
        // 主要展示层的
            {
                radius: ['40%', '55%'],
                center: ['20%', '35%'],
                type: 'pie',
                "avoidLabelOverlap": false,
                "hoverAnimation": false,
                "legendHoverLink": false,
                labelLine: {
                    show: true,
                    length: 10,
                    length2: 10
                },
                label: {
                    color: "#fff",
                    formatter: '{d}%'
                },
                "color": color,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                name: "重点人员占比",
                data: data
        },
        
    ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}

//echart_4 年龄段统计
function echart_4 () {
    option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: '10',
            left: '3%',
            right: '4%',
            bottom: '40',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['童年<7', '少年<18', '青年<41', '中年<66', '老年'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                barWidth: '30%',
                data:[ 200, 334, 390, 330, 220],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                // {offset: 0.5, color: '#188df0'},
                                {offset: 1, color: '#188df0'}
                            ]
                        )
                    },emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                // {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }
                },
            }
        ]
    };
    var myChart = echarts.init(document.getElementById('chart_4'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    
 }

 //echart_5  房屋统计 自住房、出租房、空置房
function echart_5() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_5'));
    //data 为模拟数据
    var data = [{
        name: '自住房',
        value: 6251,
        percent: '56.21%'
    }, {
        name: '出租房',
        value: 3535,
        percent: '31.79%'
    }, {
        name: '空置房',
        value: 1335,
        percent: '12%'
    }];
    var sumPerson = 0;
    data.map(function(item){
        sumPerson += item.value;
        return item.name += " " + item.value + " " + item.percent
    })
    var color = ['#89b1dc', '#fb9827', '#e40e21', '#24bc00', '#b6cb04', '#112ee2', '#00bd9c', '#ce078f', '#00b2cd', '#ec3c3c'];
    var option = {
        tooltip: {
            trigger: 'item',
            confine: true,
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            textStyle: {
                fontSize: 12
            }
        },
        title: {
            text: '房屋总数：' + sumPerson,
            top: '0',
            left: '35%',
            textStyle: {
                color: '#f2f2f2',
                fontSize: '0.15rem'
            }
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            left: '35%',
            top: 20,
            bottom: 20,
            // data: legendData,
            textStyle: {
                color: '#f2f2f2',
            }
            // data: 
        },
        series: [
        // 主要展示层的
            {
                radius: ['0', '30%'],
                center: ['15%', '30%'],
                type: 'pie',
                "avoidLabelOverlap": false,
                "hoverAnimation": false,
                "legendHoverLink": false,
                labelLine: {
                    show: true,
                    length: 10,
                    length2: 10
                },
                label: {
                    color: "#fff",
                    formatter: '{d}%'
                },
                "color": color,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                name: "房屋统计",
                data: data
        },
        
    ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

}

//echart_6 单位分类统计
function echart_6 () {
    
    option = {
        color: ['#3398DB'],
        tooltip : {
            // trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: '30',
            left: '3%',
            right: '4%',
            bottom: '50',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['普通单位', '行业场所', '管控物品',  '重点单位'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    interval: 0,
                    rotate: 30
                },
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series : [
            {
                name:'单位统计',
                type:'bar',
                barWidth: '40%',
                data:[ 200, 334, 390, 230],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                // {offset: 0.5, color: '#188df0'},
                                {offset: 1, color: '#188df0'}
                            ]
                        )
                    },emphasis: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#2378f7'},
                                // {offset: 0.7, color: '#2378f7'},
                                {offset: 1, color: '#83bff6'}
                            ]
                        )
                    }
                },
            }
        ]
    };
    var myChart = echarts.init(document.getElementById('chart_6'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    
 }

 //echart_7 单位行业统计
function echart_7 () {

var colors = ['#5793f3', '#d14a61', '#675bba'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    
    legend: {
        data:['医院','学校','高新'],
        textStyle: {
            color: '#f2f2f2',
        }
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            data: ['西红门','新宫','旧宫','东华门']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '家',
            min: 0,
            max: 10,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
        }
    ],
    series: [
        {
            name:'医院',
            type:'bar',
            data:[2,4, 7, 3]
        },
        {
            name:'学校',
            type:'bar',
            data:[6, 5, 9, 4]
        },
        {
            name:'高新',
            type:'bar',
            data:[2, 5, 3, 4]
        }
    ]
    };

    var myChart = echarts.init(document.getElementById('chart_7'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    
 }


echart_1();
echart_2();
echart_3();
echart_4();
echart_5();
echart_6();
echart_7();