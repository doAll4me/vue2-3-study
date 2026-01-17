<template>
  <div class="app">
    <BaseSelect v-model="selectId"></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from "./components/BaseSelect.vue";
export default {
  data() {
    return {
      selectId: "102",
    };
  },

  components: {
    BaseSelect,
  },

  watch: {
    selectId(newVal, oldVal) {
      console.log(
        "[watch] selectId 变化了：",
        "旧值 =",
        oldVal,
        "新值 =",
        newVal
      );
    },
  },
};
</script>

<style></style>
