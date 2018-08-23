function fnW(str) {
    var num;
    str >= 10 ? num = str : num = "0" + str;
    return num;
}
//获取当前时间
var timer = setInterval(function () {
    var date = new Date();
    var year = date.getFullYear(); //当前年份
    var month = date.getMonth(); //当前月份
    var data = date.getDate(); //天
    var hours = date.getHours(); //小时
    var minute = date.getMinutes(); //分
    var second = date.getSeconds(); //秒
    var day = date.getDay(); //获取当前星期几 
    var ampm = hours < 12 ? 'am' : 'pm';
    $('#time').html(fnW(hours) + ":" + fnW(minute) + ":" + fnW(second));
    $('#date').html('<span>' + year + '/' + (month + 1) + '/' + data + '</span><span>' + ampm + '</span><span>周' + day + '</span>')

}, 1000)

var startColor = ['#0e94eb', '#c440ef', '#efb013', '#2fda07', '#d8ef13', '#2e4af8', '#0eebc4', '#f129b1', '#17defc', '#f86363'];
var borderStartColor = ['#0077c5', '#a819d7', '#c99002', '#24bc00', '#b6cb04', '#112ee2', '#00bd9c', '#ce078f', '#00b2cd', '#ec3c3c'];



//入库量占比，带边框效果的饼图
function chart1() {
    //data 为模拟数据
    var data = [{
        name: '顺丰',
        value: 192581,
        percent: '19.61',
    }, {
        name: '京东',
        value: 215635,
        percent: '21.96',
    }, {
        name: 'EMS',
        value: 224585,
        percent: '2.87',
    }, {
        name: '中通',
        value: 224585,
        percent: '7',
    }, {
        name: '大通',
        value: 124585,
        percent: '2.69',
    }];
    var myChart = echarts.init(document.getElementById('pie'));
    window.addEventListener('resize', function () {
        myChart.resize();
    });

    var str = '';
    for (var i = 0; i < data.length; i++) {
        str += '<p><span><i class="legend" style="background:' + startColor[i] + '"></i></span>' + data[i].name + '<span class="pie-number" style="color:' + startColor[i] + '">' + data[i].value + '</span>' + Number(data[i].percent).toFixed(2) + '%</p>';
    }

    $('.pie-data').append(str);


    function deepCopy(obj) {
        if (typeof obj !== 'object') {
            return obj;
        }
        var newobj = {};
        for (var attr in obj) {
            newobj[attr] = obj[attr];
        }
        return newobj;
    }
    var xData = [],
        yData = [];
    data.map((a, b) => {
        xData.push(a.name);
        yData.push(a.value);
    });


    var RealData = [];
    var borderData = [];
    data.map((item, index) => {
        var newobj = deepCopy(item);
        var newobj1 = deepCopy(item);
        RealData.push(newobj);
        borderData.push(newobj1);
    });
    RealData.map((item, index) => {
        item.itemStyle = {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: startColor[index] // 0% 处的颜色
                }, {
                        offset: 1,
                        color: startColor[index] // 100% 处的颜色
                }],
                    globalCoord: false // 缺省为 false
                },
            }
        }
    });
    borderData.map((item, index) => {
        item.itemStyle = {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: borderStartColor[index] // 0% 处的颜色
                }, {
                        offset: 1,
                        color: borderStartColor[index] // 100% 处的颜色
                }],
                    globalCoord: false // 缺省为 false
                },
            }
        }
    });
    var option = {
        tooltip: {
            trigger: 'item',
            //            position: ['30%', '50%'],
            confine: true,
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
        // 主要展示层的
            {
                radius: ['30%', '45%'],
                center: ['40%', '50%'],
                type: 'pie',
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
                name: "派件入库量占比内容",
                data: RealData
        },
        // 边框的设置
            {
                radius: ['25%', '30%'],
                center: ['40%', '50%'],
                type: 'pie',
                label: {
                    color: "#fff",
                    formatter: '{d}%'
                },
                animation: false,
                tooltip: {
                    show: false
                },
                labelLine: {
                    show: true,
                    length: 10,
                    length2: 10
                },
                data: borderData
        }
    ]
    };

    myChart.setOption(option);
}

chart1()

//----------------------派件入库量占比内容end---------------

//------------广东省寄派件数据内容---------------



function chart2(chartType) {
    var myChart = echarts.init(document.getElementById('chartMap'));
    window.addEventListener('resize', function () {
        myChart.resize();
    });
        myChart.hideLoading();
        var option = {
            animation: true,
            tooltip: {
                show: true
            },
            visualMap: {
                show: false,
                min: 0,
                text: ['高', '低'],
                orient: 'horizontal',
                // itemWidth: 15,
                // itemHeight: 200,
                // right: 0,
                // bottom: 30,
                inRange: {
                    color: ['#75ddff', '#0e94eb']
                },
                textStyle: {
                    color: 'white'
                }
            },
            series: [
                {
                    name: '数据名称',
                    type: 'map',
                    mapType: '广东',
                    selectedMode: 'multiple',
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}<br/>{c} (件)'
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            borderColor: '#0e94eb',
                            label: {
                                show: false
                            }
                        },
                        emphasis: { // 也是选中样式
                            borderWidth: 1,
                            borderColor: '#fff',
                            backgroundColor: 'red',
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        }
                    },
            }
            ]
        };
        myChart.setOption(option);
}
chart2();

//------------广东省寄派件数据内容end--------------


//渐变半圆进度
var percent = 60; //百分数
var color_percent0 = '#89b1dc',
color_percent25 = '#2c84fb',
    color_percent50 = '#fb9827',
    color_percent100 = '#e40e21';

function setPieOption (percent, tit) {
    return pieoption = {
        title: {
            "x": '46%',
            "y": '45%',
            textAlign: "center",
            top: '68%',//字体的位置
            'text': tit,
            "textStyle": {
    
                "fontWeight": 'normal',
                "color": '#FFF',
                "fontSize": 10
            },
            "subtextStyle": {//副标题的文字的样式
                "fontWeight": 'bold',
                "fontSize": 18,
                "color": '#3ea1ff'
            },
    
        },
        series: [{
                "name": '',
                "type": 'pie',
                "radius": ['50%', '70%'],
                "avoidLabelOverlap": false,
                "startAngle": 225,
                "color": [{
                    type: 'linear',
                    colorStops: [{
                        offset: 0,
                        color: color_percent0 // 0% 处的颜色
                    }, {
                        offset: 0.2,
                        color: color_percent25 // 0% 处的颜色
                    }, {
                        offset: 0.8,
                        color: color_percent50 // 100% 处的颜色
                    }, {
                        offset: 1,
                        color: color_percent100 // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }, 'none'],
                "hoverAnimation": false,//是否开启 hover 在扇区上的放大动画效果。
                "legendHoverLink": false,//是否启用图例 hover 时的联动高亮。
                "label": {
                    "normal": {
                        "show": false,
                        "position": 'center'
                    },
                    "emphasis": {
                        "show": true,
                        "textStyle": {
                            "fontSize": '10',
                            "fontWeight": 'bold'
                        }
                    }
                },
                "labelLine": {
                    "normal": {
                        "show": false
                    }
                },
                "data": [{
                    "value": 75,
                    "name": '1',
                }, {
                    "value": 25,
                    "name": '2'
                }]
            },{
                "name": '',
                "type": 'pie',
                "radius": ['50%', '70%'],
                "avoidLabelOverlap": false,
                "startAngle": 315,
                "color": [ "#1d3669", "transparent"],
                "hoverAnimation": false,
                "legendHoverLink": false,
                "clockwise": false,//饼图的扇区是否是顺时针排布。
                "itemStyle": {
                    "normal": {
                        "borderColor": "transparent",
                        "borderWidth": "20"
                    },
                    "emphasis": {
                        "borderColor": "transparent",
                        "borderWidth": "20"
                    }
                },
                "z": 10,
                "label": {
                    "normal": {
                        "show": false,
                        "position": 'center'
                    },
    
                },
                "labelLine": {
                    "normal": {
                        "show": false
                    }
                },
                "data": [{
                    "value": (100 - percent) * 270 / 360,
    
                    "label": {
                        normal: {
                            formatter: percent + '%',
                            position: 'center',
                            show: true,
                            textStyle: {
                                fontSize: '10',
                                fontWeight: 'normal',
                                color: '#fff'
                            }
                        }
                    },
                    "name": ''
                }, {
                    "value": 0,
                    "name": ''
                }, {
                    "value": 100 - (100 - percent) * 270 / 360,
                    "name": ''
                }]
            }
        ]
    };
}

function chartPie1 (id , data ,tit) {
    var pieOption = setPieOption(data , tit);
    var myChart = echarts.init(document.getElementById(id));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(pieoption);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

 function rightChartPie (id, data, color) {
    var nameArr = new Array();
    var lengendArr = new Array();
    data.map(function(d){
        nameArr.push(d.name);
        lengendArr.push(d.name + " " + d.value);
        return d.name = d.name + " " + d.value;
    })
    var option = {
        
        legend: {
            type: 'plain',
            orient: 'vertical',
            left: '45%',
            top: 'middle',
            icon: 'pin',
            textStyle: {
                color: '#fff',
            },
            formatter: function (name) {
                return name;
            },
            data: data
        },
        series: [
            {
                name: data[0].name,
                type:'pie',
                radius: ['40%', '55%'],
                center: ['20%', '50%'],
                avoidLabelOverlap: false,
                "color": color,
                "avoidLabelOverlap": false,
                "hoverAnimation": false,
                "legendHoverLink": false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false,
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:data
            }
        ]
    };
    var myChart = echarts.init(document.getElementById(id));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
 }

 function chart4 () {
    option = {
        color: ['#3398DB'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: '20px',
            left: '3%',
            right: '4%',
            bottom: '40px',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
                barWidth: '60%',
                data:[10, 52, 200, 334, 390, 330, 220],
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
    var myChart = echarts.init(document.getElementById('chart4'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    
 }

function chart5 () {
    option = {
        legend: {
            top:'middle',
            data:['意向'],
        },
        tooltip: {
            trigger: 'axis',
            // triggerOn: 'none',
            position: function (pt) {
                return [pt[0], 130];
            }
        },
        xAxis: {
            type: 'category',
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
            name: '套',
            type: 'value',
            axisTick: {
                inside: true
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                inside: true,
                formatter: '{value}\n'
            },
            z: 10
        },
        grid: {
            top: 40,
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
                name:'车辆数量',
                type:'line',
                smooth:true,
                stack: 'a',
                symbol: 'circle',
                // symbolSize: 5,
                sampling: 'average',
                itemStyle: {
                    normal: {
                        color: 'rgba(255,167,77, 0.8)'
                    }
                },
                lineStyle: {
                    width: 1
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255,167,77, 0.8)',
                        }, {
                            offset: 1,
                            color: 'rgba(14, 148, 235, 0)'
                        }])
                    }
                },
                data: [[2012,1000],[2013,3000],[2014,2500],[2015,1988],[2016,2389],[2017,2341],[2018,2339]]
            }
    
        ]
    };

    var myChart = echarts.init(document.getElementById('chart5'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    
    // setInterval(function () {
    //     option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    //     myChart.setOption(option, true);
    // },2000);
    
}

function chart6(){
    var myChart = echarts.init(document.getElementById('chart6'));
    option = {
        tooltip: {
            trigger: 'axis'
        },             
        grid: {
            top: 40,
            left: 20,
            right: 20,
            bottom: 40,
            containLabel: true                
        },
        xAxis: {
            type: 'category',
            // boundaryGap: false,
            data: ['2012年','2013年','2014年','2015年','2016年','2017年','2018年'],
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        yAxis: {
            name: '人',
            type: 'value',
            splitLine: {
                show: false
            },
            axisTick: {
                inside: true
            },
            axisLabel: {
                inside: true,
                formatter: '{value}\n'
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        series: [
            {
                name:'重点人员',
                type:'line',
                smooth: true,
                data:[3961, 4233, 4183, 3633, 3704, 3434, 4535],
                itemStyle: {
                    normal: {
                        color: 'rgba(75,240,255, 0.8)'
                    }
                },
                lineStyle: {
                    width: 1
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(75,240,255, 0.8)',
                        }, {
                            offset: 1,
                            color: 'rgba(14, 148, 235, 0)'
                        }])
                    }
                },
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}


chartPie1('chartPie1', 30, '啦啦la')
chartPie1('chartPie2', 70, '啦啦')
chartPie1('chartPie3', 99, '啦啦3')
rightChartPie('rightPie1', [
    {value:335, name:'租户',},
    {value:310, name:'常住'},
    {value:234, name:'流动'},
], [ "#71f6f9", "#6666ff",'#44aff0','#fff065'],)
rightChartPie('rightPie2', [
    {value:335, name:'租户2',},
    {value:310, name:'常住2'},
    {value:104, name:'流动2'}
], [ "#f6d54a", "#ff4343",'#f69846'],)
rightChartPie('rightPie3', [
    {value:335, name:'租户2',},
    {value:310, name:'常住2'},
    {value:104, name:'流动2'}
], [ "#dd7c1b", "#2f89fc",'#e7e6fc'],)
rightChartPie('rightPie4', [
    {value:335, name:'租户2',},
    {value:310, name:'常住2'},
    {value:104, name:'流动2'}
], [ "#2f19c6", "#6666ff",'#1d51a9','#fff065'],);
chart4();
chart5();
chart6();