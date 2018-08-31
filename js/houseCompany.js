//echart_1 重点房屋分布
function echart_1 () {
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
        grid: {
            top: '20',
            left: '3%',
            right: '4%',
            bottom: '100',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['重点房屋1', '重点房屋2', '重点房屋3',  '重点房屋4', '重点房屋5','重点房屋6'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    lineStyle: {
                        color: '#0e94eb'
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
                axisLabel: {
                    show: true,
                    color: '#0e94eb'
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
                            }
                        },
                        verticalAlign: {
                            options: {
                                top: 'top',
                                middle: 'middle',
                            }
                        },
                        rotate: 90,
                        // formatter: '{c}  {name|{a}}',
                        fontSize: '0.15rem',
                        rich: {
                            name: {
                                textBorderColor: '#fff'
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
    var myChart = echarts.init(document.getElementById('chart_1'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    
 }

 //echart_2  房屋统计 自住房、出租房、空置房
function echart_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_2'));
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
            top: '10',
            left: '0',
            textStyle: {
                color: '#f2f2f2',
                fontSize: '0.15rem'
            }
        },
        legend: {
            orient: 'vertical',
        	left: 'left',
        	top: 40,
            textStyle: {
                color: '#f2f2f2',
                fontSize: '0.15rem',
            	lineHeight: '0.3rem',
            }
            // data: 
        },
        series: [
        // 主要展示层的
            {
                radius: ['0', '60%'],
                center: ['60%', '50%'],
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

//echart_3 单位行业统计
function echart_3 () {

var colors = ['#2fda07', '#efb013', '#2e4af8'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
            top: '60',
            left: '3%',
            right: '4%',
            bottom: '40',
            containLabel: true
        },
    
    legend: {
        data:['医院','学校','高新'],
        top: 20,
        textStyle: {
            color: '#f2f2f2',
            fontSize: '0.15rem',
            lineHeight: '0.3rem',
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
            barWidth: '15%',
            data:[2,4, 7, 3]
        },
        {
            name:'学校',
            type:'bar',
            barWidth: '15%',
            data:[6, 5, 9, 4]
        },
        {
            name:'高新',
            type:'bar',
            barWidth: '15%',
            data:[2, 5, 3, 4]
        }
    ]
    };

    var myChart = echarts.init(document.getElementById('chart_3'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    
 }

//echart_4 单位分类统计
function echart_4 () {
    
    option = {
        color: ['#3398DB'],
        tooltip : {
            // trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: '20',
            left: '3%',
            right: '4%',
            bottom: '120',
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
                        color: '#0e94eb'
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
                axisLabel: {
                    show: true,
                    color: '#0e94eb'
                }
            }
        ],
        series : [
            {
                name:'单位统计',
                type:'bar',
                barWidth: '20%',
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
    var myChart = echarts.init(document.getElementById('chart_4'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    
 }

//echart_5 行业分类
function echart_5() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_5'));
    //data 为模拟数据
    var data = [{
        name: '制造业',
        value: 191,
        percent: '17.8%',
    }, {
        name: '建筑业',
        value: 155,
        percent: '19.9%'
    }, {
        name: '软件业',
        value: 225,
        percent: '20.76%'
    }, {
        name: '批发和零售',
        value: 455,
        percent: '20.76%'
    }, {
        name: '文体和娱乐业',
        value: 255,
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
            text: '行业分类',
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
                radius: ['40%', '60%'],
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

echart_1();
echart_2();
echart_3();
echart_4();
echart_5();
