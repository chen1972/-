(function () {
    var html = document.querySelector('html');
    function size() {
        var width = html.offsetWidth
        if (width < 1024) width = 1024
        if (width > 1920) width = 1920
        html.style.fontSize = width / 80 + 'px'
    };
    size();
    window.onresize = function () {
        size();
    }
})();

(function () {
    $('.tabs').on('click', 'a', function () {
        $(this).addClass('active').siblings().removeClass('active')
        $('.content').eq($(this).index()).show().siblings('.content').hide()
    })
    $('.marquee').append($('.marquee .row').clone())
})();


(function () {

    var option = {
  
        tooltip: {
   
            trigger: 'item',
           
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
      
        series: [
            {
                color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
             
                name: '点位统计',
            
                type: 'pie',
             
                radius: ['10%', '70%'],
             
                center: ['50%', '50%'],
          
                roseType: 'radius',
              
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ],
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 8,
                    length2: 10
                }

            }

        ]

    };
    var myChart = echarts.init($('.pie')[0])
    myChart.setOption(option);




})();


(function () {
  
    var item = {
        name: '',
        value: 1200,
    
        itemStyle: {
            color: '#254065'
        },
    
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
       
        tooltip: {
            extraCssText: 'opacity:0'
        }
    }
    var option = {
       
        tooltip: {
       
            trigger: 'item',
 
            axisPointer: {
                
                type: 'shadow'
            }
        },

        grid: {
        
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
       
            containLabel: true,
            show: true,
            borderColor: 'rgba(0,240,255,0.3)'
        },
      
        xAxis: [
            {
              
                type: 'category',
            
                data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],              // 刻度设置
                axisTick: {
                   
                    alignWithLabel: false,
                    show: false
                },
                axisLabel: {
                    color: '#4c9bfd'
                }
            }
        ],
      
        yAxis: [
            {
                
                type: 'value',
                axisTick: {
                    show: false
                },
                // 文字
                axisLabel: {
                    color: '#4c9bfd'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0,240,255,0.3)'
                    }
                }

            }
        ],
       
        series: [
            {
              
                name: '用户统计',
              
                type: 'bar',
               
                barWidth: '60%',
               
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
                itemStyle: {
                 
                    color: new echarts.graphic.LinearGradient(
                        
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#00fffb' }, 
                            { offset: 1, color: '#0061ce' }  
                        ]
                    )
                },


            }

        ]
    };
    var mycahrt = echarts.init($('.bar')[0])
    mycahrt.setOption(option)
})();

// 销售额
(function () {
    var data = {
        day365: { orders: '20,301,987', amount: '99834' },
        day90: { orders: '301,987', amount: '9834' },
        day30: { orders: '1,987', amount: '3834' },
        day1: { orders: '987', amount: '834' }
    }
    $('.filter').on('click', 'a', function () {
        $(this).addClass('active').siblings().removeClass('active')
        var zhi = data[$(this).data('key')]
        $('.order .item h4').eq(0).html(zhi.orders)
        $('.order .item h4').eq(1).html(zhi.amount)



    })
    var index = 0;
    var temp = setInterval(function () {
        index++;
        if (index == 4) {
            index = 0
        }
        $('.filter a').eq(index).addClass('active').siblings().removeClass('active')
        var zhi = data[$('.filter a').eq(index).data('key')]
        $('.order .item h4').eq(0).html(zhi.orders)
        $('.order .item h4').eq(1).html(zhi.amount)

    }, 5000)
    $('.order').on('mouseenter', function () {
        clearInterval(temp)
    })
    $('.order').on('mouseleave', function () {

        temp = setInterval(function () {
            index++;
            if (index == 4) {
                index = 0
            }
            $('.filter a').eq(index).addClass('active').siblings().removeClass('active')
            var zhi = data[$('.filter a').eq(index).data('key')]
            $('.order .item h4').eq(0).html(zhi.orders)
            $('.order .item h4').eq(1).html(zhi.amount)

        }, 5000)


    })

})();

// 销售统计
(function () {
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                color: '#4c9bfd'
            },
            right: '10%'
        },
        grid: {
            show: true,
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            borderColor: '#012f4a',
            containLabel: true
        },
        xAxis: {
                                            
            type: 'category',
                                           
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                show: false
            },
            boundaryGap: false
        },
        yAxis: {
                                         
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            // axisLine: {
            //     show: false
            // },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            }
        },
        series: [{
            name: '预期销售额',
               

            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                                            
            type: 'line',
                                             
            smooth: true,
            itemStyle: {
                color: '#00f2f1'  
            }
        },
        {
            name: '实际销售额',
                                        
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
                                          
            type: 'line',
                                             
            smooth: true,
            itemStyle: {
                color: '#ed3f35'  
            }
        },

        ],

    };
    var mychart = echarts.init($('.line')[0])
    mychart.setOption(option)
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    var index = 0;
    var temp = setInterval(function () {
        index++;
        if (index == 4) {
            index = 0
        }
        $('.caption a').eq(index).addClass('active').siblings().removeClass('active')
        $('.caption a').eq(index).data('type')
        // console.log($('.caption a').eq(index).data('type'));

        option.series[0].data = data[$('.caption a').eq(index).data('type')][0]
        option.series[1].data = data[$('.caption a').eq(index).data('type')][1]
        mychart.setOption(option)
    }, 5000)
    $('.sales').on('mouseenter', function () {
        clearInterval(temp)
    })
    $('.sales').on('mouseleave', function () {
        temp = setInterval(function () {
            index++;
            if (index == 4) {
                index = 0
            }
            $('.caption a').eq(index).addClass('active').siblings().removeClass('active')
            $('.caption a').eq(index).data('type')
            // console.log($('.caption a').eq(index).data('type'));

            option.series[0].data = data[$('.caption a').eq(index).data('type')][0]
            option.series[1].data = data[$('.caption a').eq(index).data('type')][1]
            mychart.setOption(option)
        }, 5000)



    })



})();

// 销售饼图
(function () {
    var option = {
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['130%', '150%'],
                center: ['48%', '80%'],
                label: {
                    show: false,
                },
                startAngle: 180,
                hoverOffset: 0,
                data: [
                    {
                        value: 100,
                        itemStyle: { // 颜色渐变#00c9e0->#005fc1
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    { offset: 0, color: '#00c9e0' },
                                    { offset: 1, color: '#005fc1' }
                                ]
                            }
                        }
                    },
                    { value: 100, itemStyle: { color: '#12274d' } },
                    { value: 200, itemStyle: { color: 'transparent' } }
                ]
            }
        ]
    };
    var mycahrt = echarts.init($('.gauge')[0])
    mycahrt.setOption(option)
})();

// 全国热榜
(function () {
    var data = [
        { name: '可爱多', num: '9,086' },
        { name: '娃哈哈', num: '8,341' },
        { name: '喜之郎', num: '7,407' },
        { name: '八喜', num: '6,080' },
        { name: '小洋人', num: '6,724' },
        { name: '好多鱼', num: '2,170' },
    ]
    // data = data.sort(function (a, b) { return 0.5 - Math.random() })
    var li = '';
    $.each(data, function (index, elm) {

        li += `<li><span>${data[index].name}</span>${elm.num}<span> <s class="icon-up"></s></span></li>`


    })
    $('.sub').html(li)

    var index = 0;
    $('.sup li').eq(index).addClass('active')
    var temp = setInterval(function () {
        index++;
        if (index == 5) {
            index = 0
        }
        $('.sup li').eq(index).addClass('active').siblings().removeClass('active')
        data = data.sort(function (a, b) { return 0.5 - Math.random() })
        var li = ''
        $.each(data, function (index, elm) {
            li += `<li><span>${data[index].name}</span>${elm.num}<span> <s class="icon-up"></s></span></li>`

            // $('.sub').html('')

        })
        $('.sub').html(li)

    }, 1000)





})();





