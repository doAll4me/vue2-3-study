<template>
  <div>
    <!-- 2.在调用组件时夹上要插入的内容 -->
    <MyDialog> <div>你确认要删除么?</div> </MyDialog>
    <MyDialog> <p>你确认要退出本系统么?</p> </MyDialog>
  </div>
</template>

<script>
import MyDialog from "./components/MyDialog.vue";
export default {
  data() {
    return {};
  },
  components: {
    MyDialog,
  },
};
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>
