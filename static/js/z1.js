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

let mychart5 = echarts.init(document.querySelector(".x5"));
let option5 = {
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
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    axisLabel: {
      color: "rgba(255,255,255,.7)",
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      color: "rgba(255,255,255,.7)",
    },
    splitLine: {
      lineStyle: {
        color: "#012f4a",
      },
    },
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
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
