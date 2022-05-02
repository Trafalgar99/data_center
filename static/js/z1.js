let mychart1 = echarts.init(document.querySelector(".x1"));
let mycolor1 = [
  "#1089e7",
  "#1089e7",
  "#1089e7",
  "#1089e7",
  "#1089e7",
  "#1089e7",
  "#fa8231",
];
let data1 = [100, 200, 100, 150, 345, 234, 123];
let option1 = {
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
      data: data1,
      itemStyle: {
        barBorderRadius: 3,
        color: function (params) {
          return mycolor1[params.dataIndex];
        },
      },
    },
  ],
};
mychart1.setOption(option1);

let mychart2 = echarts.init(document.querySelector(".x2"));
let option2 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  xAxis: {
    type: "category",
    data: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
  },
  yAxis: {
    type: "value",
  },
  grid: {
    left: "0%",
    right: "0%",
    bottom: "4%",
    top: "10px",
    containLabel: true,
  },
  series: [
    {
      data: data1,
      type: "line",
      symbol: "triangle",
      symbolSize: 20,
      lineStyle: {
        color: "#5470C6",
        width: 4,
        type: "dashed",
      },
      itemStyle: {
        borderWidth: 3,
        borderColor: "#EE6666",
        color: "yellow",
      },
    },
  ],
};
mychart2.setOption(option2);

let mychart3 = echarts.init(document.querySelector(".x3"));
let option3 = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "1%",
    left: "1%",
    textStyle: {
      color: "white",
    },
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      center: ["50%", "60%"],
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "40",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "2016" },
        { value: 735, name: "2017" },
        { value: 580, name: "2018" },
        { value: 484, name: "2019" },
        { value: 300, name: "2020" },
        { value: 300, name: "2021" },
        { value: 300, name: "2022" },
      ],
    },
  ],
};
mychart3.setOption(option3);

let data_y2 = {
  year: [
    [
      25.52, 24.72, 24.43, 24.28, 24.18, 25.5, 28.5, 31.2, 33.1, 34.2, 34.6, 35,
      35.4, 35.1, 34.6, 34.5, 35.2, 35.9, 36, 35.4, 34.1, 31.6, 29.4, 27.2,
    ],
    [
      10.31, 10.23, 9.89, 9.76, 9.88, 11, 13.2, 14.7, 14.9, 14.6, 13.9, 13.4,
      13.1, 12.7, 12.6, 13.1, 14.6, 16.2, 16.8, 17.0, 16.5, 15.2, 13.9, 12,
    ],
  ],
};
let mychart4 = echarts.init(document.querySelector(".x4"));
let option4 = {
  color: ["#00f2f1", "#ed3f35"],
  tooltip: {
    // 通过坐标轴来触发
    trigger: "axis",
  },

  grid: {
    top: "5%",
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
      areaStyle: {
        color: "rgba(18, 188, 187,0.5)",
      },
      data: data_y2.year[0],
    },
  ],
};
mychart4.setOption(option4);

function RandomNum(Min, Max) {
  let Range = Max - Min;
  let Rand = Math.random();
  let num = Min + Math.floor(Rand * Range); //舍去
  return num;
}
let mychart5 = echarts.init(document.querySelector(".x5"));
let datav5 = [22.52, 20, 24.43, 24.28, 22.18, 25.52, 21, 24.43, 24.28, 24.18];
let datax5 = [];
for (let i = 0; i < 10; i++) {
  datax5.push(i);
}
let option5 = {
  tooltip: {
    // 通过坐标轴来触发
    trigger: "axis",
  },
  grid: {
    top: "5%",
    left: "3%",
    right: "4%",
    bottom: "3%",
    show: true,
    borderColor: "rgba(255,255,255,0.3)",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: datax5,
    axisLabel: {
      color: "rgba(255,255,255,.7)",
    },
  },
  yAxis: {
    min: 15,
    max: 30,
    type: "value",
    axisLabel: {
      color: "rgba(255,255,255,.7)",
    },
    splitLine: {
      lineStyle: {
        color: "rgba(255,255,255,0.3)",
      },
    },
  },
  series: [
    {
      data: datav5,
      type: "line",
      itemStyle: {
        normal: {
          color: "#D980FA",
        },
      },
      lineStyle: {
        width: "4",
        color: "#D980FA",
      },
    },
  ],
};
mychart5.setOption(option5);

setInterval(function () {
  datax5.shift();
  let x = datax5[datax5.length - 1] + 1;
  datax5.push(x);
  datav5.shift();
  let y = RandomNum(20.0, 26.0);
  datav5.push(y);

  if (x >= 30) {
    datax5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    datav5 = [22.52, 20, 24.43, 24.28, 22.18, 25.52, 21, 24.43, 24.28, 24.18];
    option5.xAxis.data = datax5;
    option5.series[0].data = datav5;
    mychart5.setOption(option5);
  }
  mychart5.setOption({
    xAxis: {
      data: datax5,
    },
    series: [
      {
        data: datav5,
      },
    ],
  });
}, 1000);

let mychart6 = echarts.init(document.querySelector(".x6"));
let data6 = {
  data_z2_1: [
    273, 217.7, 232.85, 258.5, 238.17, 219.91, 251.04, 222.46, 250.58, 196.91,
    233.02, 237.8,
  ],
  data_z2_2: [
    234, 200.85, 220.96, 197.5, 180.84, 223.46, 234.62, 250.76, 245.4, 210.4,
    226.06, 241.77,
  ],
  data_z2_3: [309, 249, 227, 245, 245, 251, 254, 211, 212, 236, 270, 232],
};
let option6 = {
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
      data: data6.data_z2_1,
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
      data: data6.data_z2_2,
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
      data: data6.data_z2_3,
    },
  ],
};
mychart6.setOption(option6);

// -------------------------------------------------------
let mychart7 = echarts.init(document.querySelector(".x7"));
// prettier-ignore
let dataAxis = []
for (let i = 0; i < 24; i++) {
  dataAxis.push(i);
}
// prettier-ignore
let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220,90, 149, 210, 122];
let yMax = 500;
let dataShadow = [];
for (let i = 0; i < data.length; i++) {
  dataShadow.push(yMax);
}
let option7 = {
  grid: {
    left: "10",
    top: "30",
    right: "10",
    bottom: "10",
    containLabel: true,
  },

  xAxis: {
    data: dataAxis,
    axisLabel: {
      inside: true,
      color: "#fff",
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    z: 10,
  },
  yAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: "#999",
    },
  },
  dataZoom: [
    {
      type: "inside",
    },
  ],
  series: [
    {
      type: "bar",
      showBackground: true,
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: "#00a8ff" },
          { offset: 0.5, color: "#0097e6" },
          { offset: 1, color: "#273c75" },
        ]),
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#2378f7" },
            { offset: 0.7, color: "#2378f7" },
            { offset: 1, color: "#83bff6" },
          ]),
        },
      },
      data: data,
    },
  ],
};
// Enable data zoom when user click bar.
const zoomSize = 6;
mychart7.on("click", function (params) {
  console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
  mychart7.dispatchAction({
    type: "dataZoom",
    startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
    endValue:
      dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)],
  });
});
mychart7.setOption(option7);

let mychart8 = echarts.init(document.querySelector(".x8"));

let option8 = {
  grid: {
    left: "10",
    top: "30",
    right: "10",
    bottom: "10",
    containLabel: true,
  },
  series: {
    type: "treemap",
    itemStyle: {
      color: "rgba(109, 40, 40, 1)",
      borderWidth: 2,
      borderColor: "rgba(255, 255, 0, 0)",
    },
    data: [
      {
        name: "2022",
        value: 800,
        // itemStyle: {
        //   color: "rgba(255,0, 0, 0.5)",
        //   borderWidth: 10,
        //   borderColor: "rgba(0,255,0,1)",
        // },
      },
      {
        name: "2021",
        value: 1000,
      },
      {
        name: "2020",
        value: 100,
      },
      {
        name: "2019",
        value: 700,
      },
      {
        name: "2018",
        value: 200,
      },
    ],
  },
  type: "basicTreemap",
};

mychart8.setOption(option8);

let mychart9 = echarts.init(document.querySelector(".x9"));
let data9 = [
  { 2022: 14 },
  { 2021: 13 },
  { 2020: 15 },
  { 2019: 11 },
  { 2018: 17 },
];

let option9 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
    },
  },
  grid: {
    left: "10",
    top: "20",
    right: "10",
    bottom: "10",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    boundaryGap: false,
    max: 20, // Math.ceil(max / 4) * 5 || 10
    axisLine: { show: true, lineStyle: { color: "#ccc" } },
    axisTick: { show: false },
    axisLabel: { color: "#999" },
    splitLine: {
      lineStyle: { color: ["#CEEDFF"], type: [5, 8], dashOffset: 3 },
    },
  },
  yAxis: {
    type: "category",
    data: ["2022", "2021", "2020", "2019", "2018"],
    axisLine: { show: true, lineStyle: { color: "#ccc" } },
    axisTick: { length: 3 },
    axisLabel: { fontSize: 14, color: "#666", margin: 16, padding: 0 },
    inverse: true,
  },
  series: [
    {
      name: "数量",
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(82, 168, 255, 0.1)",
        borderRadius: [0, 8, 8, 0],
      },
      itemStyle: {
        color: "#52A8FF",
        normal: {
          borderRadius: [0, 8, 8, 0],
          color: function (params) {
            // 定义一个颜色集合
            let colorList = [
              "#52A8FF",
              "#00B389",
              "#FFA940",
              "#FF5A57",
              "#29EFC4",
              "#F8AEA4",
              "#FFC53D",
              "#009982",
              "#C099FC",
              "#F5855F",
            ];
            // 对每个bar显示一种颜色
            return colorList[params.dataIndex];
          },
        },
      },
      barMaxWidth: 16,
      label: {
        show: true,
        position: "insideRight",
        offset: [-5, 2],
        color: "#fff",
      },
      data: [15, 12, 21, 11, 11, 11, 11, 7, 6, 3],
    },
  ],
};
mychart9.setOption(option9);
