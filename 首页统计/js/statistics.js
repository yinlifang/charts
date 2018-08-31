// 高德地图
var map = new AMap.Map('chart_map', {
    zoom:11,//级别
    center: [116.397428, 39.90923],//中心点坐标
    viewMode:'3D',//使用3D视图
//  mapStyle: 'amap://styles/darkblue',
});


var titleStyle = {
    			color: '#3d4753',
    			fontWeight: "normal",
    			fontFamily: "微软雅黑",
    			fontSize: "16",
    			align : "center"
    		}
var chartGrid = {
            top: 40,
            left: 0,
            right: 0,
            bottom: 0,
            containLabel: true                
        }
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
    	title: {
    		text: '人员统计',
    		textStyle: titleStyle,
    		left: "center"
    	},
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            nameGap: 0, 
            axisLine: {
                lineStyle: {
                    color: '#675bba'
                },
                nameGap: 10
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
                    color: '#675bba'
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
        grid: chartGrid,
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
    		textStyle: titleStyle,
    		left: "center",
    		padding: [
			    5,  // 上
			    10, // 右
			    25,  // 下
			    10, // 左
			]
    	},
    	legend: {
            type: 'scroll',
            orient: 'vertical',
            left: '58%',
            top: 'middle',
            textStyle: {
                color: '#3d4753',
            },
            icon: 'pin'
        },
        series: [
        // 主要展示层的
            {
                radius: ['0', '60%'],
                center: ['25%', '60%'],
                type: 'pie',
                labelLine: {
                    show: true,
                    length: 10,
                    length2: 10
                },
                label: {
                    color: "#675bba",
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
            top: 'middle',
            textStyle: {
                color: '#3d4753',
            },
            icon: 'pin'
        },
         title: {
    		text: '人员统计',
    		textStyle: titleStyle,
    		left: "center"
    	},
        series: [
        // 主要展示层的
            {
                radius: ['45%', '60%'],
                center: ['25%', '60%'],
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
                    color: "#675bba",
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
        grid: chartGrid,
        title: {
    		text: '年龄段统计',
    		textStyle: titleStyle,
    		left: "center"
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
                        color: '#675bba'
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
                        color: '#675bba'
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

//echart_5  男女分布
function echart_5(){
	 var myChart = echarts.init(document.getElementById('chart_5'));
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
    	title: {
    		text: '性别分布',
    		textStyle: titleStyle,
    		left: "center"
    	},
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            nameGap: 0, 
            axisLine: {
                lineStyle: {
                    color: '#675bba'
                },
                nameGap: 10
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
                    color: '#675bba'
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
        grid: chartGrid,
        dataZoom: [{
            type: 'inside',
            throttle: 50
        }],
        series: [
            {
                name:'男',
                type:'line',
                smooth:true,
                stack: 'a',
                symbol: 'circle',
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgba(51, 239, 7, 0.8)'
                    }
                },
                lineStyle: {
                    width: 1
                },
                data: data2
            },
            {
                name:'女',
                type:'line',
                smooth:true,
                stack: 'a',
                symbol: 'circle',
                // symbolSize: 5,
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgba(228,14,33, 0.8)'
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

//echart_6 小区学历分布
function echart_6 () {
    var posList = [
        'left', 'right', 'top', 'bottom',
        'inside',
        'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
        'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
    ];
    option = {
        color: ['#3398DB'],
        tooltip : {
            // trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
    		text: '学历分布',
    		textStyle: titleStyle,
    		left: "center"
    	},
        grid: chartGrid,
        xAxis : [
            {
                type : 'category',
                data : ['大专', '本科', '硕士',  '博士', '博士后','其他'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    lineStyle: {
                        color: '#675bba'
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
                        color: '#675bba'
                    }
                }
            }
        ],
        series : [
            {
                name:'单位统计',
                type:'bar',
                barWidth: '50%',
                data:[ 200, 334, 390, 230,200,300],
                label: {
                    normal: {
                        show: true,
                        position: ['3','80%'],
                        distance: {
                            min: 0,
                            max: 100
                        },
                        align: {
                            options: {
                                left: 'left',
                                center: 'center',
                                right: 'right'
                            }
                        },
                        verticalAlign: {
                            options: {
                                top: 'top',
                                middle: 'middle',
                                bottom: 'bottom'
                            }
                        },
                        rotate: 90,
                        // formatter: '{c}  {name|{a}}',
                        fontSize: '0.15rem',
                        rich: {
                            name: {
                                textBorderColor: '#675bba'
                            }
                        }
                    }
                },
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

//echart_7 民族分布统计
function echart_7() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_7'));
    //data 为模拟数据
    var data = [{
        name: '汉族',
        value: 19251,
        percent: '12.58%',
    }, {
        name: '回族',
        value: 2535,
        percent: '14.07%'
    }, {
        name: '壮族',
        value: 22455,
        percent: '14.67%'
    }, {
        name: '满族',
        value: 2455,
        percent: '14.67%'
    }, {
        name: '苗族',
        value: 2455,
        percent: '14.67%'
    }, {
        name: '维吾尔族',
        value: 2455,
        percent: '14.67%'
    }, {
        name: '土家族',
        value: 2455,
        percent: '14.67%'
    }, {
        name: '朝鲜族',
        value: 2455,
        percent: '14.67%'
    }, {
        name: '同族',
        value: 2455,
        percent: '14.67%'
    }, {
        name: '白族',
        value: 2455,
        percent: '14.67%'
    }, {
        name: '哈尼族',
        value: 2455,
        percent: '14.67%'
    }];
   
    var color = [ '#c440ef', '#efb013', '#2fda07', '#d8ef13', '#2e4af8', '#0eebc4', '#f129b1', '#17defc', '#f86363'];
    var option = {
        tooltip: {
            trigger: 'item',
            confine: true,
            formatter: "{a} <br/>{b}",
            textStyle: {
                fontSize: 12
            }
        },
         title: {
    		text: '民族分布',
    		textStyle: titleStyle,
    		left: "center"
    	},
        grid: chartGrid,
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            textStyle: {
                color: '#3d4753',
            },
            icon: 'pin'
        },
        series: [
        // 主要展示层的
            {
                radius: ['40%', '60%'],
                center: ['25%', '60%'],
                type: 'pie',
                labelLine: {
                    show: true,
                    length: 10,
                    length2: 10
                },
                label: {
                    color: "#675bba",
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
                name: "民族占比",
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
    // document.getElementById("personPercent").innerHTML = htmlPercente;

}

//echart_8 特殊人群
function echart_8() {
    var myChart = echarts.init(document.getElementById('chart_8'))
    window.addEventListener('resize', function () {
        myChart.resize();
        myCharts.resize();
    });

    //    设置背景阴影的参数，获取数据的最大值

    var data; //横坐标数据，不动
    var data_; //模拟数据
        data_ = [{
                name: "特殊1",
                value: 584
            },
            {
                name: "特殊2",
                value: 152
            }, {
                name: "特殊3",
                value: 1000
            },
            {
                name: "特殊4",
                value: 689
            },
            {
                name: "特殊5",
                value: 200
            }]
   
    var series_data; //绘制图表的数据
    //绘制图表
    var yMax = 0;
    for (var j = 0; j < data_.length; j++) {
        if (yMax < data_[j].value) {
            yMax = data_[j].value;
        }
    }
    var dataShadow = [];
    for (var i = 0; i < 10; i++) {
        dataShadow.push(yMax * 2);
    }
        data = ['特殊1', '特殊2', '特殊3', '特殊4', '特殊5'];
        series_data = [
            { // For shadow
                type: 'bar',
                barWidth: 20,
                xAxisIndex: 2,
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(14, 148, 235, 0.102)'
                    }
                },
                data: dataShadow,
                animation: false
            },
            {
                name: '特殊人群1',
                type: 'bar',
                barGap: '-100%',
                barWidth: '40%',
                xAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: '#0e94eb'
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
                data: [data_[0], 0, 0, 0, 0],
            },
            {
                name: '特殊人群2',
                type: 'bar',
                xAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: 'rgba(239,176,19,.9)'
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
                data: [0, data_[1], 0, 0, 0],
            },
            {
                name: '特殊人群3',
                type: 'bar',
                xAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: 'rgba(162,56,193,0.8 )'
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
                data: [0, 0, data_[2], 0, 0],
            },
            {
                name: '特殊人群4',
                type: 'bar',
                xAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: 'rgba(181,47,53,0.8)'
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
                data: [0,0, 0, data_[3], 0],
            },
            {
                name: '特殊人群5',
                type: 'bar',
                xAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: 'rgba(196,64,239,0.8)'
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
                data: [0, 0, 0, 0, data_[4]],
            }
        ]

    var option = {
        title: {
            text: '特殊人群分布',
            top: '0',
            left: 'center',
            textStyle: titleStyle
        },
        grid: chartGrid,
        tooltip: {
            show: true
        },
        xAxis: [{
                type: 'category',
                data: data,
                axisLabel: {
                	textStyle: {
                        color: '#675bba'
                    },
                    interval: 0,
                    rotate: 30
                },
            },
            {
                type: 'category',
                position: "bottom",
                data: data,
                boundaryGap: true,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                	textStyle: {
                        color: '#675bba'
                    },
                    interval: 0,
                    rotate: 30
                },
            },
            {
                show: false,
                data: dataShadow,
                axisLabel: {
                    inside: true,
                    textStyle: {
                        color: '#675bba'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                z: 10
        },
        ],
        yAxis: [{
                show: true,
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "#0e94eb"
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    color: '#0e94eb'
                }
        }, {
                show: false,
                type: "value",
                nameTextStyle: {
                    color: '#0e94eb'
                },
                axisLabel: {
                    color: '#0e94eb'
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
        },
            {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#999'
                    }
                }
                }],
        //        color: ['#e54035'],
        series: series_data
    }
        myChart.clear();
        myChart.setOption(option);
    
}


 //echart_9  房屋统计 自住房、出租房、空置房
function echart_9() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_9'));
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
    var color = ['#02c9cc', '#fb9827', '#e40e21', '#24bc00', '#b6cb04', '#112ee2', '#00bd9c', '#ce078f', '#00b2cd', '#ec3c3c'];
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
            left: 'center',
            textStyle: titleStyle
        },
        legend: {
            type: 'scroll',
            orient: 'vertical',
            left: '58%',
            top: 'middle',
            textStyle: {
                color: '#3d4753',
            },
            icon: 'pin'
        },
        series: [
        // 主要展示层的
            {
                radius: ['0', '60%'],
                center: ['25%', '60%'],
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
                    color: "#675bba",
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

//echart_10 单位分类统计
function echart_10 () {
    
    option = {
        color: ['#3398DB'],
        tooltip : {
            // trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid:chartGrid,
        title: {
    		text: '单位分类统计',
    		textStyle: titleStyle,
    		left: "center"
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
                        color: '#675bba'
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
                        color: '#675bba'
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
    var myChart = echarts.init(document.getElementById('chart_10'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    
 }

 //echart_11 单位行业统计
function echart_11 () {

var colors = ['#5793f3', '#d14a61', '#675bba'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: chartGrid,
    
    legend: {
        data:['医院','学校','高新'],
        textStyle: {
            color: '#3d4753',
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

    var myChart = echarts.init(document.getElementById('chart_11'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    
 }

 //echart_12 单位行业统计
function echart_12 () {

var colors = ['#5793f3', '#d14a61', '#675bba'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: chartGrid,
    
    legend: {
        data:['医院','学校','高新'],
        textStyle: {
            color: '#3d4753',
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

    var myChart = echarts.init(document.getElementById('chart_12'));
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
echart_8();
echart_9();
echart_10();
echart_11();
echart_12();