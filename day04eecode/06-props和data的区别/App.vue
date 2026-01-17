<template>
  <div class="app">
    <BaseCount :count="count" @changeCount="handlerCount"></BaseCount>
  </div>
</template>

<script>
import BaseCount from "./components/BaseCount.vue";
export default {
  components: {
    BaseCount,
  },
  data() {
    return {
      count: 100,
    };
  },
  methods: {
    handlerCount(newCount) {
      this.count = newCount;
    },
  },
};
</script>

<style></style>
