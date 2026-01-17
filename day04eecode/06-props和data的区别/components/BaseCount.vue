<template>
  <div class="base-count">
    <!-- <button @click="count--">-</button> -->
    <button @click="dec">-</button>
    <span>{{ count }}</span>
    <button @click="add">+</button>
    <!-- <button @click="count++">+</button> -->
  </div>
</template>

<script>
export default {
  // 1.自己的数据随便修改  （谁的数据 谁负责）
  data() {
    return {
      // count: 100,
    };
  },
  // 2.外部传过来的数据props 不能随便修改
  props: {
    count: Number,
  },
  methods: {
    // 如果要修改props外部传来的数据，必须要利用$emit传递修改信息，让父组件去改
    add() {
      this.$emit("changeCount", this.count + 1);
    },
    dec() {
      this.$emit("changeCount", this.count - 1);
    },
  },
};
</script>

<style>
.base-count {
  margin: 20px;
}
</style>
