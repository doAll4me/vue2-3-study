<template>
  <div class="app">
    <!-- 原理: v-model本质上是一个语法糖。例如应用在输入框上，就是value属性和input事件的合写。
          作用: 提供数据的双向绑定 -->
    <input type="text" v-model="msg1" />
    <br />
    <input type="text" :value="msg2" @input="msg2 = $event.target.value" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: "",
      msg2: "",
    };
  },
  watch: {
    msg1(newVal, oldVal) {
      this.log("msg1", newVal, oldVal);
    },
    msg2(newVal, oldVal) {
      this.log("msg2", newVal, oldVal);
    },
  },

  methods: {
    log(key, newVal, oldVal) {
      console.log(`[log] ${key} 改变了：`, "旧值 =", oldVal, "新值 =", newVal);
    },
  },
};
</script>

<style></style>
