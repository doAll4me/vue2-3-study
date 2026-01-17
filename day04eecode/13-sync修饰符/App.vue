<template>
  <div class="app">
    <button @click="isShow = true">退出按钮</button>
    <!--本质就是  :属性名 和 @update:属性名合写  ===  :visible + @update:visible  -->
    <BaseDialog :visible.sync="isShow"></BaseDialog>
    <!-- <BaseDialog
              :visible="isShow"
              @update:visible="isShow = $event" -->
  </div>
</template>

<script>
import BaseDialog from "./components/BaseDialog.vue";
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {},
  components: {
    BaseDialog,
  },
};
</script>

<style></style>
