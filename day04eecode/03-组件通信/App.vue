<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件
    <!-- 1.1给组件标签，添加属性方式 赋值 -->
    <!-- 2.2 父组件对changeTitle消息进行监听-->
    <Son :title="myTitle" @changeTitle="handleChange"></Son>
    <!-- Vue 实际做的：handleChange(子组件 emit 时传的参数) -->
  </div>
</template>

<script>
import Son from "./components/Son.vue";
export default {
  name: "App",
  components: {
    Son,
  },
  data() {
    return {
      myTitle: "学前端",
    };
  },
  methods: {
    handleChange(newTitle) {
      this.myTitle = newTitle;
    },
  },
};
</script>

<style></style>
