<template>
  <!-- ①目标标签添加ref属性 ref='xxx' -->
  <div ref="mychart" class="base-chart-box">子组件</div>
</template>

<script>
import * as echarts from "echarts";

export default {
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    // 1.如果用document.querySelector选择元素，会被同名元素干扰
    // const myChart = echarts.init(document.querySelector(".base-chart-box"));

    // 2.通过ref去绑定Dom元素可以不被影响（更精确稳定
    // ② 恰当时机(挂载后),通过this.$refs.xxx获取目标标签
    const myChart = echarts.init(this.$refs.mychart);
    // 绘制图表
    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  },
};
</script>

<style scoped>
.base-chart-box {
  width: 400px;
  height: 300px;
  border: 3px solid #000;
  border-radius: 6px;
}
</style>
