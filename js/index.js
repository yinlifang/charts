$(function () {
    echart_1();
    echart_2();

    echart_3();
    echart_4();

    echart_map();
    echart_5();
    echart_6();
    echart_7();

    //echart_1南磨坊总收入
    function echart_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_1'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}万元"
            },
            calculable: true,
            grid: {
                top: 'middle'
            },
            series: [{
                name: '',
                type: 'pie',
                //起始角度，支持范围[0, 360]
                startAngle: 0,
                //饼图的半径，数组的第一项是内半径，第二项是外半径
                radius: [41, 100.75],
                //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
                center: ['50%', '5%'],
                //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
                // 'radius' 面积展现数据的百分比，半径展现数据的大小。
                //  'area' 所有扇区面积相同，仅通过半径展现数据大小
                roseType: 'area',
                //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        formatter: '{c}万元'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length2: 1,
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{
                        value: 900.58,
                        name: '张家口',
                        itemStyle: {
                            normal: {
                                color: '#f845f1'
                            }
                        }
                    },
                    {
                        value: 1100.58,
                        name: '承德',
                        itemStyle: {
                            normal: {
                                color: '#ad46f3'
                            }
                        }
                    },
                    {
                        value: 1200.58,
                        name: '衡水',
                        itemStyle: {
                            normal: {
                                color: '#5045f6'
                            }
                        }
                    },
                    {
                        value: 1300.58,
                        name: '邢台',
                        itemStyle: {
                            normal: {
                                color: '#4777f5'
                            }
                        }
                    },
                    {
                        value: 1400.58,
                        name: '邯郸',
                        itemStyle: {
                            normal: {
                                color: '#44aff0'
                            }
                        }
                    },
                    {
                        value: 1500.58,
                        name: '保定',
                        itemStyle: {
                            normal: {
                                color: '#45dbf7'
                            }
                        }
                    },
                    {
                        value: 1500.58,
                        name: '秦皇岛',
                        itemStyle: {
                            normal: {
                                color: '#f6d54a'
                            }
                        }
                    },
                    {
                        value: 116.46,
                        name: '北京',
                        itemStyle: {
                            normal: {
                                color: '#f69846'
                            }
                        }
                    },
                    {
                        value: 1800,
                        name: '唐山',
                        itemStyle: {
                            normal: {
                                color: '#ff4343'
                            }
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    {
                        value: 0,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //echart_2 南磨坊重点房屋统计
    function echart_2() {
           // 基于准备好的dom，初始化echarts实例
           var myChart = echarts.init(document.getElementById('chart_2'));
         
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
                bottom: 20,
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
        

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // echart_map中国地图
    function echart_map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_map'));

        var mapName = 'china'
        var data = []
        var toolTipData = [];

        /*获取地图数据*/
        myChart.showLoading();
        var mapFeatures = echarts.getMap(mapName).geoJson.features;
        myChart.hideLoading();
        var geoCoordMap = {
            '福州': [119.4543, 25.9222],
            '长春': [125.8154, 44.2584],
            '重庆': [107.7539, 30.1904],
            '西安': [109.1162, 34.2004],
            '成都': [103.9526, 30.7617],
            '常州': [119.4543, 31.5582],
            '北京': [116.4551, 40.2539],
            '北海': [109.314, 21.6211],
            '海口': [110.3893, 19.8516],
            '长沙': [113.019455,28.200103],
            '上海': [121.40, 31.73],
            '内蒙古': [106.82, 39.67]
        };

        var GZData = [
            [{
                name: '长沙'
            }, {
                name: '福州',
                value: 95
            }],
            [{
                name: '长沙'
            }, {
                name: '长春',
                value: 80
            }],
            [{
                name: '长沙'
            }, {
                name: '重庆',
                value: 70
            }],
            [{
                name: '长沙'
            }, {
                name: '西安',
                value: 60
            }],
            [{
                name: '长沙'
            }, {
                name: '成都',
                value: 50
            }],
            [{
                name: '长沙'
            }, {
                name: '常州',
                value: 40
            }],
            [{
                name: '长沙'
            }, {
                name: '北京',
                value: 30
            }],
            [{
                name: '长沙'
            }, {
                name: '北海',
                value: 20
            }],
            [{
                name: '长沙'
            }, {
                name: '海口',
                value: 10
            }],
            [{
                name: '长沙'
            }, {
                name: '上海',
                value: 80
            }],
            [{
                name: '长沙'
            }, {
                name: '内蒙古',
                value: 80
            }]
        ];

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var dataItem = data[i];
                var fromCoord = geoCoordMap[dataItem[0].name];
                var toCoord = geoCoordMap[dataItem[1].name];
                if (fromCoord && toCoord) {
                    res.push({
                        fromName: dataItem[0].name,
                        toName: dataItem[1].name,
                        coords: [fromCoord, toCoord]
                    });
                }
            }
            return res;
        };

        var color = ['#c5f80e'];
        var series = [];
        [
            ['北京', GZData]
        ].forEach(function (item, i) {
            series.push({
                name: item[0],
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: 'arrow',
                    symbolSize: 5
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            }, {
                name: item[0],
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
        });

        option = {
            tooltip: {
                trigger: 'item'
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(175,238,238, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(47,79,79, .1)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                }
            },
            series: series
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }

    //echart_3实有房屋统计
    function echart_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_3'));
        option = {
            title: {
                text: ''
            },
            tooltip: {
                trigger: 'axis'
            },            
            grid: {
                top: '40',
                left: '20',
                right: '20',
                bottom: '20',
                containLabel: true
            },
            color: ['#FF4949','#FFA74D','#FFEA51','#4BF0FF','#44AFF0','#4E82FF','#584BFF','#BE4DFF','#F845F1'],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2012年','2013年','2014年','2015年','2016年'],
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
                name: '套',
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
                    name:'房屋总数',
                    type:'line',
                    data:[3961, 4233, 4183, 3633, 3704]
                },
                {
                    name:'自住房总数',
                    type:'line',
                    data:[3374, 3364, 3274, 3371, 3259]
                },
                {
                    name:'出租房总数',
                    type:'line',
                    data:[1477, 1517, 1390, 1475, 1502]
                },
                {
                    name:'空置房总数',
                    type:'line',
                    data:[686,847,895,865,886]
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    //重点人员统计
    function echart_4() {
        console.log(document.getElementById('chart_4').offsetWidth)
          // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_4'));
        option = {
            tooltip: {
                trigger: 'axis'
            },             
            grid: {
                top: 40,
                left: 20,
                right: 20,
                bottom: 20,
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
    //南磨坊车辆统计
    function echart_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('chart_5'));

        var base = +new Date(2016, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var oneHour = 3600*1000;
        var valueBase = Math.random() * 300;
        var valueBase2 = Math.random() * 50;
        var data = [];
        var data2 = [];
        
        for (var i = 1; i < 12; i++) {
            var nowhour = new Date(base += oneHour);
            var timeStr = nowhour.getHours();
        
            // valueBase = Math.round((Math.random() - 0.5) * 20 + valueBase);
            // valueBase <= 0 && (valueBase = Math.random() * 300);
            // data.push([dayStr, valueBase]);
        
            valueBase2 = Math.round((Math.random() - 0.5) * 20 + valueBase2);
            valueBase2 <= 0 && (valueBase2 = Math.random() * 50);
            data2.push([nowhour, valueBase2]);
        }
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
                type: 'time',
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
                name: '辆',
                type: 'value',                
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
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
                z: 10
            },
            grid: {
                top: 40,
                left: 20,
                right: 20,
                bottom: 20,
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
                            color: 'rgba(14, 148, 235, 0.8)'
                        }
                    },
                    lineStyle: {
                        width: 1
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(14, 148, 235, 0.8)',
                            }, {
                                offset: 1,
                                color: 'rgba(14, 148, 235, 0)'
                            }])
                        }
                    },
                    data: data2
                }
        
            ]
        };
        

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echart_6(){
        var myChart = echarts.init(document.getElementById('chart_6'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#fff'
                    }
                }
            },
            toolbox: {
                feature: {
                    // dataView: {show: true, readOnly: false},
                    // magicType: {show: true, type: ['line', 'bar']},
                    // restore: {show: true},
                    // saveAsImage: {show: true}
                }
            },
            legend: {
                data:['医院','学校','足疗店'],
                textStyle: {
                    color: '#fff',
                },
                bottom: 10
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    },
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '医院',
                    min: 0,
                    max: 10,
                    interval: 3,
                    axisTick: {
                        inside: true
                    },
                    axisLabel: {
                        inside: true,
                        formatter: '{value}\n'
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    },
                    axisLabel: {
                        formatter: '{value} 家'
                    }
                },
                {
                    type: 'value',
                    name: '学校',
                    min: 0,
                    max: 25,
                    interval: 5,
                    axisLine: {
                        lineStyle: {
                            color: "#fff"
                        }
                    },
                    axisLabel: {
                        formatter: '{value} 家'
                    }
                }
            ],
            series: [
                {
                    name:'医院',
                    type:'bar',
                    data:[2.0, 1, 2, 1, 2, 1, 2, 1, 2, 6, 2, 3],
                    itemStyle: {
                        color: 'rgba(255,167,77,0.8)'
                    }
                },
                {
                    name:'学校',
                    type:'bar',
                    data:[2.0, 1, 2, 3, 2, 1, 6, 1, 2, 8, 2, 3],
                    itemStyle: {
                        color: 'rgba(14, 148, 235, 0.8)'
                    }
                },
                {
                    name:'足疗店',
                    type:'line',
                    yAxisIndex: 1,
                    data:[2.0, 1, 2, 1, 2, 4, 2, 1, 2, 5, 2, 3]
                }
            ]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    // 实有人口统计
    function echart_7(){
        var myChart = echarts.init(document.getElementById('chart_7'));        
        
        option = {            
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                bottom: 10,
                textStyle: {
                    color: '#fff'
                }
            },
            grid: {
                top: 40,
                left: 20,
                right: 20,
                bottom: 20,
                containLabel: true                
            },
            series : [
                {
                    type: 'pie',
                    radius : '65%',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    data:[
                        {
                            value:1548,
                            name: '常住人口',  
                            itemStyle: {                               
                                color: {
                                    type: 'radial',
                                    x: 0,
                                    y: 0.5,
                                    r: 1,
                                    colorStops: [{
                                        offset: 0, color: '#fff' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'blue' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }            
                        },
                        {
                            value:1035, 
                            name: '流动人口',
                            itemStyle: {                               
                                color: {
                                    type: 'radial',
                                    x: 1,
                                    y: 0.5,
                                    r: 1,
                                    colorStops: [{
                                        offset: 0, color: '#fff' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: 'red' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }  
                        },
                    ],
                    label: {
                        color: "#fff"
                    }
                }
            ]
        };
        
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    //点击跳转
    // $('#chart_map').click(function(){
    //     window.location.href = './page/index.html';
    // });
    // $('.t_btn2').click(function(){
    //     window.location.href = "./page/index.html?id=2";
    // });
    // $('.t_btn3').click(function(){
    //     window.location.href = "./page/index.html?id=3";
    // });
    // $('.t_btn4').click(function(){
    //     window.location.href = "./page/index.html?id=4";
    // });
    // $('.t_btn5').click(function(){
    //     window.location.href = "./page/index.html?id=5";
    // });
    // $('.t_btn6').click(function(){
    //     window.location.href = "./page/index.html?id=6";
    // });
    // $('.t_btn7').click(function(){
    //     window.location.href = "./page/index.html?id=7";
    // });
    // $('.t_btn8').click(function(){
    //     window.location.href = "./page/index.html?id=8";
    // });
    // $('.t_btn9').click(function(){
    //     window.location.href = "./page/index.html?id=9";
    // });
});
