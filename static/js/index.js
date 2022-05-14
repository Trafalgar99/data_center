// 初始请求
let data_z1;
let data_y1;
let valdata_y1;
let data_y3;
let data_z2_1;
let data_z2_2;
let data_z2_3;
let data_y2;
let data_z3;
function deploy(data) {
  data_z1 = data.data_z1;
  data_y3 = data.data_y3;
  data_z2_1 = data.data_z2_1;
  data_z2_2 = data.data_z2_2;
  data_z2_3 = data.data_z2_3;
  data_z3 = data.data_z3;
  data_y2 = data.data_y2;
  valdata_y1 = data.valdata_y1;
  data_y1 = data.data_y1;
  let num1 = document.querySelector(".num1");
  let num2 = document.querySelector(".num2");
  num1.innerHTML = data.nums[0];
  num2.innerHTML = data.nums[1];
}
function refresh() {
  option_y1.series[0].data = data_y1;
  option_y1.yAxis[1].data = valdata_y1;
  myChart_y1.setOption(option_y1);
  option_y2.series[0].data = data_y2.year[0];
  option_y2.series[1].data = data_y2.year[1];
  myChart_y2.setOption(option_y2);
  option_y3.series[0].data = data_y3;
  myChart_y3.setOption(option_y3);
  option_z1.series[0].data = data_z1;
  myChart_z1.setOption(option_z1);
  option_z2.series[0].data = data_z2_1;
  option_z2.series[1].data = data_z2_2;
  option_z2.series[2].data = data_z2_3;
  myChart_z2.setOption(option_z2);
  option_z3.series[0].data = data_z3;
  myChart_z3.setOption(option_z3);
}
$.ajax({
  method: "GET",
  url: "/api/data",
  async: false,
  data: "35",
  success: deploy,
  error: function (error) {
    console.log(error);
  },
});

//-------------------------------------------------------------------------
// z1
let myChart_z1 = echarts.init(document.querySelector(".bar .chart"));
let mycolor_z1 = [
  "#1089e7",
  "#1089e7",
  "#1089e7",
  "#1089e7",
  "#1089e7",
  "#1089e7",
  "#fa8231",
];
let option_z1 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: "0%",
    right: "0%",
    bottom: "4%",
    top: "10px",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  color: ["#1089e7"],
  series: [
    {
      name: "发电量（TWh）",
      type: "bar",
      barWidth: "60%",
      data: data_z1,
      itemStyle: {
        barBorderRadius: 3,
        color: function (params) {
          return mycolor_z1[params.dataIndex];
        },
      },
    },
  ],
};
myChart_z1.setOption(option_z1);
console.log("3");
window.addEventListener("resize", function () {
  myChart_z1.resize();
});
//----------------------------------------------------------------------------------
//y1
let myChart_y1 = echarts.init(document.querySelector(".bar2 .chart"));
let titlename_y1 = ["2018", "2019", "2020", "2021", "2022"];
let myColor_y1 = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
let option_y1 = {
  //图标位置
  grid: {
    top: "10%",
    left: "22%",
    bottom: "10%",
    right: "16%",
  },
  xAxis: {
    show: false,
  },
  yAxis: [
    {
      show: true,
      data: titlename_y1,
      inverse: true,
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#fff",

        rich: {
          lg: {
            backgroundColor: "#339911",
            color: "#fff",
            borderRadius: 15,
            // padding: 5,
            align: "center",
            width: 15,
            height: 15,
          },
        },
      },
    },
    {
      show: true,
      inverse: true,
      data: valdata_y1,
      axisLabel: {
        textStyle: {
          fontSize: 12,
          color: "#fff",
        },
      },
    },
  ],
  series: [
    {
      name: "条",
      type: "bar",
      yAxisIndex: 0,
      data: data_y1,
      barCategoryGap: 50,
      barWidth: 10,
      itemStyle: {
        normal: {
          barBorderRadius: 20,
          color: function (params) {
            var num = myColor_y1.length;
            return myColor_y1[params.dataIndex % num];
          },
        },
      },
      label: {
        normal: {
          show: true,
          position: "inside",
          color: "white",
          formatter: "{c}小时",
        },
      },
    },
    {
      name: "框",
      type: "bar",
      yAxisIndex: 1,
      barCategoryGap: 50,
      data: [5500, 5500, 5500, 5500, 5500],
      barWidth: 15,
      itemStyle: {
        normal: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15,
        },
      },
    },
  ],
};
// 使用刚指定的配置项和数据显示图表。
myChart_y1.setOption(option_y1);
window.addEventListener("resize", function () {
  myChart_y1.resize();
});
//----------------------------------------------------------------------------------------
//y3
let myChart_y3 = echarts.init(document.querySelector(".pie1  .chart"));

let option_y3 = {
  legend: {
    top: "90%",
    itemWidth: 10,
    itemHeight: 10,
    textStyle: {
      color: "rgba(255,255,255,.5)",
      fontSize: "12",
    },
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c}TWh ({d}%)",
  },
  // 注意颜色写的位置
  color: [
    "#006cff",
    "#60cda0",
    "#ed8884",
    "#ff9f7f",
    "#0096ff",
    "#9fe6b8",
    "#32c5e9",
    "#1d9dff",
  ],
  series: [
    {
      name: "类型占比",
      type: "pie",
      // 如果radius是百分比则必须加引号
      radius: ["10%", "70%"],
      center: ["50%", "42%"],
      roseType: "radius",
      data: data_y3,
      // 修饰饼形图文字相关的样式 label对象
      label: {
        fontSize: 10,
      },
      // 修饰引导线样式
      labelLine: {
        // 连接到图形的线长度
        length: 10,
        // 连接到文字的线长度
        length2: 10,
      },
    },
  ],
};
myChart_y3.setOption(option_y3);
window.addEventListener("resize", function () {
  myChart_y3.resize();
});
//----------------------------------------------------------------------------------------
//z2
let myChart_z2 = echarts.init(document.querySelector(".line1 .chart"));

let option_z2 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      lineStyle: {
        color: "#dddc6b",
      },
    },
  },
  legend: {
    top: "0%",
    textStyle: {
      color: "rgba(255,255,255,.5)",
      fontSize: "12",
    },
  },
  grid: {
    left: "10",
    top: "30",
    right: "10",
    bottom: "10",
    containLabel: true,
  },

  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12,
        },
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)",
        },
      },

      data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "11", "12"],
    },
    {
      axisPointer: { show: false },
      axisLine: { show: false },
      position: "bottom",
      offset: 20,
    },
  ],

  yAxis: [
    {
      type: "value",
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
        },
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12,
        },
      },

      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
        },
      },
    },
  ],
  series: [
    {
      name: "2021",
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          color: "#0184d5",
          width: 2,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)",
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)",
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
        },
      },
      itemStyle: {
        normal: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12,
        },
      },
      data: data_z2_1,
    },
    {
      name: "2020",
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          color: "#00d887",
          width: 2,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(0, 216, 135, 0.4)",
              },
              {
                offset: 0.8,
                color: "rgba(0, 216, 135, 0.1)",
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
        },
      },
      itemStyle: {
        normal: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12,
        },
      },
      data: data_z2_2,
    },
    {
      name: "2019",
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          color: "#a55eea",
          width: 2,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)",
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)",
              },
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)",
        },
      },
      itemStyle: {
        normal: {
          color: "#a55eea",
          borderColor: "rgba(165, 94, 234,.1)",
          borderWidth: 12,
        },
      },
      data: data_z2_3,
    },
  ],
};
myChart_z2.setOption(option_z2);
window.addEventListener("resize", function () {
  myChart_z2.resize();
});
//----------------------------------------------------------------------------------------
//z3
let myChart_z3 = echarts.init(document.querySelector(".pie .chart"));

let option_z3 = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c}TWh ({d}%)",
  },
  legend: {
    top: "90%",
    itemWidth: 10,
    itemHeight: 10,
    data: ["石油", "核能", "风力", "进口", "太阳能", "其他"],
    textStyle: {
      color: "rgba(255,255,255,.5)",
      fontSize: "12",
    },
  },

  series: [
    {
      name: "类型占比",
      type: "pie",
      center: ["50%", "42%"],
      radius: ["40%", "60%"],
      color: [
        "#55efc4",
        "#00b894",
        "#ffeaa7",
        "#fdcb6e",
        "#d63031",
        "#e84393",
        "#6c5ce7",
        "#a29bfe",
        "#00cec9",
      ],
      label: { show: false },
      labelLine: { show: false },
      data: data_z3,
    },
  ],
};
myChart_z3.setOption(option_z3);
window.addEventListener("resize", function () {
  myChart_z3.resize();
});
//----------------------------------------------------------------------------------------
//y2
let myChart_y2 = echarts.init(document.querySelector(".line .chart"));
let option_y2 = {
  color: ["#00f2f1", "#ed3f35"],
  tooltip: {
    // 通过坐标轴来触发
    trigger: "axis",
  },
  legend: {
    // 距离容器10%
    right: "10%",
    // 修饰图例文字的颜色
    textStyle: {
      color: "#4c9bfd",
    },
    // 如果series 里面设置了name，此时图例组件的data可以省略
    // data: ["邮件营销", "联盟广告"]
  },
  grid: {
    top: "20%",
    left: "3%",
    right: "4%",
    bottom: "3%",
    show: true,
    borderColor: "#012f4a",
    containLabel: true,
  },

  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
    ],
    // 去除刻度
    axisTick: {
      show: false,
    },
    // 修饰刻度标签的颜色
    axisLabel: {
      color: "rgba(255,255,255,.7)",
    },
    // 去除x坐标轴的颜色
    axisLine: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    // 去除刻度
    axisTick: {
      show: false,
    },
    // 修饰刻度标签的颜色
    axisLabel: {
      color: "rgba(255,255,255,.7)",
    },
    // 修改y轴分割线的颜色
    splitLine: {
      lineStyle: {
        color: "#012f4a",
      },
    },
  },
  series: [
    {
      name: "天然气发电量",
      type: "line",
      stack: "总量",
      // 是否让线条圆滑显示
      smooth: true,
      data: data_y2.year[0],
    },
    {
      name: "需求电量",
      type: "line",
      stack: "总量",
      smooth: true,
      data: data_y2.year[1],
    },
  ],
};
myChart_y2.setOption(option_y2);
window.addEventListener("resize", function () {
  myChart_y2.resize();
});
//----------------------------------------------------------------------------------------
// map
let myChart_map = echarts.init(document.querySelector(".map .chart"));
let option_map = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    top: "bottom",
    left: "right",
    textStyle: {
      color: "#fff",
    },
    selectedMode: "single",
  },

  series: [
    {
      name: "中国",
      label: {
        emphasis: {
          show: true,
          color: "#fff",
        },
      },
      // 把中国地图放大了1.2倍
      zoom: 1.2,
      roam: true,
      itemStyle: {
        normal: {
          // 地图省份的背景颜色
          areaColor: "rgba(20, 41, 87,0.6)",
          borderColor:  "#195BB9",
          borderWidth: 1,
        },
        emphasis: {
          //鼠标命中后的颜色
          areaColor: "#2B91B7",
        },
      },
      select: {
        // 地图选中区域样式
        label: {
          // 选中区域的label(文字)样式
          color: "#fff",
        },
        itemStyle: {
          // 选中区域的默认样式
          areaColor: "#2B91B7",
        },
      },
      type: "map",
      mapType: "china",
      data: [],
    },
  ],
};
myChart_map.setOption(option_map);
let selected_id = 35;
let last_id = 35;
myChart_map.on("click", function (params) {
  console.log(params);
  selected_id = params.dataIndex;
  selected_id == last_id
    ? (selected_id = last_id = 35)
    : (last_id = selected_id);

  console.log(selected_id);
  let data_id = selected_id.toString();
  $.ajax({
    method: "GET",
    data: data_id,
    url: "/api/data",
    success: function (data) {
      // console.log(data);
      deploy(data);
      refresh();
    },
    error: function (error) {
      console.log("no");
      console.log(error);
    },
  });
});
window.addEventListener("resize", function () {
  myChart_map.resize();
});
//----------------------------------------------------------------------------------------
// wkd12362001W
