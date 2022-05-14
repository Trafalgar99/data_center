setInterval(function () {
  let dt = new Date();
  let show_time =
    "当前时间：" +
    dt.getFullYear() +
    "年" +
    (dt.getMonth() + 1) +
    "月" +
    dt.getDate() +
    "日" +
    dt.getHours() +
    "时" +
    dt.getMinutes() +
    "分" +
    dt.getSeconds() +
    "秒";
  document.querySelector(".showTime").innerHTML = show_time;
}, 1000);
